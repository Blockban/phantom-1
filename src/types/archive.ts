export interface Message {
  oracle: string;
  content: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  timestamp: string;
  subject?: string;
  messages: Message[];
}