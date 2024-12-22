import { useState, useCallback } from 'react';
import { sendMessage as sendApiMessage } from '../api/claude';
import type { Message } from '../types/chat';
import type { OracleType } from '../types/oracle';

export function useOpenAIChat(oracleType: OracleType) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;
    
    setIsLoading(true);
    setError(null);

    const userMessage: Message = { role: 'user', content };

    try {
      // Optimistically add user message
      setMessages(prev => [...prev, userMessage]);

      const response = await sendApiMessage([...messages, userMessage], oracleType);
      
      // Add assistant response
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response.content
      }]);
    } catch (err) {
      // Remove user message on error
      setMessages(prev => prev.slice(0, -1));
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  }, [messages, oracleType]);

  const clearHistory = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearHistory
  };
}