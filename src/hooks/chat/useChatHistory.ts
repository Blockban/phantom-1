import { useEffect } from 'react';
import { getChatHistory, saveChatHistory } from '../../lib/storage/chatHistory';
import type { Message } from '../../types/chat';
import type { OracleType } from '../../types/oracle';

interface UseChatHistoryProps {
  oracleType: OracleType;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

export function useChatHistory({ 
  oracleType, 
  messages, 
  setMessages 
}: UseChatHistoryProps) {
  // Load chat history when oracle changes
  useEffect(() => {
    const history = getChatHistory(oracleType);
    setMessages(history);
  }, [oracleType, setMessages]);

  // Save chat history when messages change
  useEffect(() => {
    saveChatHistory(oracleType, messages);
  }, [oracleType, messages]);
}