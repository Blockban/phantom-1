import { useChatState } from './useChatState';
import { useChatActions } from './useChatActions';
import { useChatHistory } from './useChatHistory';
import type { OracleType } from '../../types/oracle';

export function useChat(oracleType: OracleType) {
  const {
    messages,
    isLoading,
    error,
    setMessages,
    setIsLoading,
    setError,
    addMessage,
    removeLastMessage,
    clearMessages
  } = useChatState();

  // Integrate chat history
  useChatHistory({
    oracleType,
    messages,
    setMessages
  });

  const { sendMessage } = useChatActions(oracleType, {
    messages,
    setIsLoading,
    setError,
    addMessage,
    removeLastMessage
  });

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearHistory: clearMessages
  };
}