import React from 'react';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';
import { ChatEffects } from './ChatEffects';
import type { Message } from '../../../types/chat';

interface ChatContainerProps {
  messages: Message[];
  isLoading: boolean;
  onSend: (message: string) => void;
}

export function ChatContainer({ messages, isLoading, onSend }: ChatContainerProps) {
  return (
    <div className="relative flex flex-col h-[calc(100vh-16rem)] min-h-[400px] max-h-[800px]">
      <ChatEffects />
      <ChatMessages messages={messages} isLoading={isLoading} />
      <ChatInput onSend={onSend} isLoading={isLoading} />
    </div>
  );
}