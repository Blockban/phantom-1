import { useState, useCallback } from 'react';
import { clearChatHistory } from '../../lib/storage/chatHistory';
import type { Message } from '../../types/chat';
import type { OracleType } from '../../types/oracle';

export function useChatState() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addMessage = useCallback((message: Message) => {
    setMessages(prev => [...prev, message]);
  }, []);

  const removeLastMessage = useCallback(() => {
    setMessages(prev => prev.slice(0, -1));
  }, []);

  const clearMessages = useCallback((oracleType?: OracleType) => {
    setMessages([]);
    setError(null);
    if (oracleType) {
      clearChatHistory(oracleType);
    }
  }, []);

  return {
    messages,
    isLoading,
    error,
    setMessages,
    setIsLoading,
    setError,
    addMessage,
    removeLastMessage,
    clearMessages
  };
}