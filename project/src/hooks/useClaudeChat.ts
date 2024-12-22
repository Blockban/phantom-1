import { useState, useCallback } from 'react';
import { ConversationManager } from '../lib/claude/conversation';
import type { Message } from '../lib/claude/types';

export function useClaudeChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const conversation = new ConversationManager();

  const sendMessage = useCallback(async (content: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Add user message immediately for better UX
      const userMessage: Message = { role: 'user', content };
      setMessages(prev => [...prev, userMessage]);

      const response = await conversation.sendMessage(content);
      
      // Add assistant message
      const assistantMessage: Message = { 
        role: 'assistant', 
        content: response 
      };
      setMessages(prev => [...prev, assistantMessage]);
      
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message';
      setError(errorMessage);
      // Remove the user message if there was an error
      setMessages(prev => prev.slice(0, -1));
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearHistory = useCallback(() => {
    conversation.clearHistory();
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearHistory
  };
}