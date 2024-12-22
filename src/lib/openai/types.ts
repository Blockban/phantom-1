export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
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