import type { Message } from '../../types/chat';

export function validateMessage(message: Message): void {
  if (!message.role || !message.content) {
    throw new Error('Invalid message: missing role or content');
  }

  if (!['user', 'assistant'].includes(message.role)) {
    throw new Error('Invalid message role');
  }

  if (typeof message.content !== 'string' || !message.content.trim()) {
    throw new Error('Invalid message content');
  }
}

export function validateMessages(messages: Message[]): void {
  if (!Array.isArray(messages)) {
    throw new Error('Messages must be an array');
  }

  messages.forEach(validateMessage);
}