import type { Message } from '../../types/chat';
import type { OracleType } from '../../types/oracle';

export interface ChatRequest {
  messages: Message[];
  oracleType: OracleType;
}

export interface OpenAIResponse {
  id: string;
  choices: Array<{
    message: Message;
    finish_reason: string;
  }>;
}

export interface APIError {
  error: {
    message: string;
    type: string;
    code: string;
  };
}

export type { Message };