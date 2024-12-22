import type { Message, OpenAIResponse } from './types';

export function validateMessages(messages: Message[]): void {
  if (!Array.isArray(messages) || messages.length === 0) {
    throw new Error('Messages must be a non-empty array');
  }

  messages.forEach((msg, index) => {
    if (!msg.role || !msg.content) {
      throw new Error(`Invalid message at index ${index}: missing role or content`);
    }
  });
}

export function validateResponse(response: OpenAIResponse): void {
  if (!response.choices?.[0]?.message) {
    throw new Error('Invalid response: missing message in choices');
  }
}