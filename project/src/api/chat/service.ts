import { API_CONFIG, REQUEST_CONFIG } from './config';
import { ChatAPIError, NetworkError } from './errors';
import { validateMessages } from './validators';
import type { ChatRequest, OpenAIResponse, Message } from './types';
import { getOraclePrompt } from '../../lib/prompts';

export async function sendMessage(request: ChatRequest): Promise<Message> {
  try {
    validateMessages(request.messages);
    
    const lastMessage = request.messages[request.messages.length - 1]?.content?.trim() || '';
    const systemPrompt = getOraclePrompt(request.oracleType, lastMessage);
    
    const messages = [
      {
        role: 'system',
        content: systemPrompt
      },
      ...request.messages.map(msg => ({
        role: msg.role,
        content: String(msg.content || '').trim()
      }))
    ];

    const response = await fetch(`${API_CONFIG.BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: REQUEST_CONFIG.headers,
      body: JSON.stringify({
        model: API_CONFIG.MODEL,
        messages,
        max_tokens: API_CONFIG.MAX_TOKENS,
        temperature: API_CONFIG.TEMPERATURE,
        stream: false,
        presence_penalty: 0.6,
        frequency_penalty: 0.5
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new ChatAPIError(
        error.error?.message || `Request failed with status ${response.status}`,
        response.status
      );
    }

    const data = await response.json() as OpenAIResponse;
    
    if (!data.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format: missing message content');
    }

    return {
      role: 'assistant',
      content: data.choices[0].message.content.trim()
    };
  } catch (error) {
    if (error instanceof ChatAPIError) {
      throw error;
    }
    
    if (error instanceof Error) {
      throw new NetworkError(error.message);
    }
    
    throw new NetworkError();
  }
}