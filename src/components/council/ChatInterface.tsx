import { useChat } from '../../hooks/chat/useChat';
import { useOracleContext } from '../../contexts/OracleContext';
import { ChatContainer } from './chat/ChatContainer';
import { ChatError } from './chat/ChatError';

export function ChatInterface() {
  const { currentOracle } = useOracleContext();
  const {
    messages,
    isLoading,
    error,
    sendMessage,
  } = useChat(currentOracle.type);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <ChatContainer 
        messages={messages} 
        isLoading={isLoading} 
        onSend={sendMessage}
      />
      {error && <ChatError message={error} />}
    </div>
  );
}