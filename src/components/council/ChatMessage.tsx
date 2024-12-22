import React from 'react';
import { motion } from 'framer-motion';
import { useOracleContext } from '../../contexts/OracleContext';
import type { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { currentOracle } = useOracleContext();
  const isOracle = message.role === 'assistant';
  const [displayedText, setDisplayedText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(true);

  React.useEffect(() => {
    if (isOracle) {
      let index = 0;
      setDisplayedText('');
      setIsTyping(true);

      const typingInterval = setInterval(() => {
        if (index < message.content.length) {
          setDisplayedText(prev => prev + message.content[index]);
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 20);

      return () => clearInterval(typingInterval);
    } else {
      setDisplayedText(message.content);
      setIsTyping(false);
    }
  }, [message.content, isOracle]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isOracle ? 'justify-start' : 'justify-end'} gap-2`}
    >
      {isOracle && (
        <div className="w-8 h-8 flex-shrink-0">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <img
              src={`/assets/oracles/${currentOracle.type}.png`}
              alt={currentOracle.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      
      <div className={`max-w-[85%] ${isOracle ? 'mr-auto' : 'ml-auto'}`}>
        <div className={`
          px-4 py-2 rounded-lg text-sm
          ${isOracle ? 'bg-purple-900/10' : 'bg-white/5'}
        `}>
          <p className="text-white/90">{displayedText}</p>
          {isTyping && isOracle && (
            <span className="inline-flex ml-1">
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-purple-400"
              >
                ▋
              </motion.span>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}