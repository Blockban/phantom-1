import { OPENAI_CONFIG, REQUEST_CONFIG } from './config';
import type { Message, OpenAIResponse, APIError } from './types';

export class OpenAIAPI {
  private readonly endpoint: string;

  constructor() {
    this.endpoint = `${OPENAI_CONFIG.API_URL}/chat/completions`;
  }

  async sendMessage(messages: Message[]): Promise<Message> {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: REQUEST_CONFIG.headers,
        body: JSON.stringify({
          model: OPENAI_CONFIG.MODEL,
          messages,
          max_tokens: OPENAI_CONFIG.MAX_TOKENS,
          temperature: OPENAI_CONFIG.TEMPERATURE,
        })
      });

      if (!response.ok) {
        const errorData = await response.json() as APIError;
        throw new Error(errorData.error.message || `Request failed with status ${response.status}`);
      }

      const data = await response.json() as OpenAIResponse;
      return data.choices[0].message;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to send message');
    }
  }
}