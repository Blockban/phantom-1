import { OpenAIAPI } from './api';
import type { Message } from './types';

export class ConversationManager {
  private readonly api: OpenAIAPI;
  private messages: Message[];

  constructor() {
    this.api = new OpenAIAPI();
    this.messages = [];
  }

  async sendMessage(content: string): Promise<string> {
    const userMessage: Message = { role: 'user', content };
    this.messages.push(userMessage);

    try {
      const response = await this.api.sendMessage(this.messages);
      this.messages.push(response);
      return response.content;
    } catch (error) {
      // Remove user message on error
      this.messages.pop();
      throw error;
    }
  }

  getHistory(): Message[] {
    return [...this.messages];
  }

  clearHistory(): void {
    this.messages = [];
  }
}