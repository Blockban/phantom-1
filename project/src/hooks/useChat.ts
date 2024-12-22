import { useState, useCallback } from 'react';
import { sendMessage, ChatAPIError, NetworkError } from '../api/chat';
import type { Message } from '../types/chat';
import type { OracleType } from '../types/oracle';

export function useChat(oracleType: OracleType) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;
    
    setIsLoading(true);
    setError(null);

    const userMessage: Message = { role: 'user', content };

    try {
      // Optimistically add user message
      setMessages(prev => [...prev, userMessage]);

      const response = await sendMessage({
        messages: [...messages, userMessage],
        oracleType
      });
      
      // Add assistant response
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response.content
      }]);
    } catch (err) {
      // Remove user message on error
      setMessages(prev => prev.slice(0, -1));
      
      if (err instanceof ChatAPIError) {
        setError(`Failed to get response: ${err.message}`);
      } else if (err instanceof NetworkError) {
        setError('Network error. Please check your connection and try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
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
    sendMessage: handleSendMessage,
    clearHistory
  };
}