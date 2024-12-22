import { useCallback } from 'react';
import { sendMessage } from '../../api/chat';
import { ChatAPIError, NetworkError } from '../../api/chat/errors';
import type { Message } from '../../types/chat';
import type { OracleType } from '../../types/oracle';

interface ChatActions {
  messages: Message[];
  setIsLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  addMessage: (message: Message) => void;
  removeLastMessage: () => void;
}

export function useChatActions(
  oracleType: OracleType,
  actions: ChatActions
) {
  const { messages, setIsLoading, setError, addMessage, removeLastMessage } = actions;

  const handleSendMessage = useCallback(async (content: string) => {
    const trimmedContent = content.trim();
    if (!trimmedContent) return;
    
    setIsLoading(true);
    setError(null);

    const userMessage: Message = { 
      role: 'user', 
      content: trimmedContent 
    };

    try {
      addMessage(userMessage);
      
      const response = await sendMessage({
        messages: [...messages, userMessage],
        oracleType
      });
      
      if (!response?.content) {
        throw new Error('Invalid response from API');
      }
      
      addMessage({
        role: response.role,
        content: response.content.trim()
      });
      
    } catch (err) {
      removeLastMessage();
      
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
  }, [messages, oracleType, addMessage, removeLastMessage, setError, setIsLoading]);

  return {
    sendMessage: handleSendMessage
  };
}