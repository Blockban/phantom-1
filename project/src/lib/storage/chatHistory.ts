import { getItem, setItem } from './local';
import type { Message } from '../../types/chat';
import type { OracleType } from '../../types/oracle';

const CHAT_HISTORY_KEY = 'ORACLE_CHAT_HISTORIES';

interface ChatHistory {
  messages: Message[];
  lastUpdated: number;
}

interface ChatHistories {
  [key: string]: ChatHistory;
}

export function getChatHistory(oracleType: OracleType): Message[] {
  const histories = getItem<ChatHistories>(CHAT_HISTORY_KEY, {});
  return histories[oracleType]?.messages || [];
}

export function saveChatHistory(oracleType: OracleType, messages: Message[]): void {
  const histories = getItem<ChatHistories>(CHAT_HISTORY_KEY, {});
  
  histories[oracleType] = {
    messages,
    lastUpdated: Date.now()
  };
  
  setItem(CHAT_HISTORY_KEY, histories);
}

export function clearChatHistory(oracleType: OracleType): void {
  const histories = getItem<ChatHistories>(CHAT_HISTORY_KEY, {});
  delete histories[oracleType];
  setItem(CHAT_HISTORY_KEY, histories);
}

export function clearAllChatHistories(): void {
  setItem(CHAT_HISTORY_KEY, {});
}