import React from 'react';
import { motion } from 'framer-motion';
import { useOracleContext } from '../../../contexts/OracleContext';
import type { Message as MessageType } from '../../../types/chat';

interface MessageProps {
  message: MessageType;
}

export function Message({ message }: MessageProps) {
  const { currentOracle } = useOracleContext();
  const isOracle = message.role === 'assistant';
  const [displayedText, setDisplayedText] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(true);
  
  const sanitizedContent = React.useMemo(() => {
    const content = message.content || '';
    return content.replace(/\.?undefined$/, '').trim();
  }, [message.content]);

  React.useEffect(() => {
    if (isOracle) {
      let index = 0;
      setDisplayedText('');
      setIsTyping(true);

      // Increased typing speed and chunk size
      const typingInterval = setInterval(() => {
        if (index < sanitizedContent.length) {
          // Type 2 characters at a time
          const chunk = sanitizedContent.slice(index, index + 2);
          setDisplayedText(prev => prev + chunk);
          index += 2;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 10); // Reduced interval from 20ms to 10ms

      return () => clearInterval(typingInterval);
    } else {
      setDisplayedText(sanitizedContent);
      setIsTyping(false);
    }
  }, [sanitizedContent, isOracle]);

  return (
    <div className={`flex ${isOracle ? 'justify-start' : 'justify-end'} gap-3`}>
      {isOracle && (
        <motion.div 
          className="relative w-8 h-8 flex-shrink-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-lg blur-sm" />
          <div className="relative rounded-lg overflow-hidden border border-purple-500/20">
            <img
              src={`/assets/oracles/${currentOracle.type}.png`}
              alt={currentOracle.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      )}
      <div className={`max-w-[85%] ${isOracle ? 'mr-auto' : 'ml-auto'}`}>
        <motion.div
          className={`
            relative px-4 py-2 rounded-lg
            ${isOracle 
              ? 'bg-gradient-to-br from-purple-900/10 to-fuchsia-900/10 border border-purple-500/10' 
              : 'bg-white/5 border border-white/5'
            }
          `}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <p className="text-sm text-white/90">{displayedText}</p>
          {isTyping && isOracle && (
            <motion.span
              className="inline-block w-1.5 h-4 ml-1 bg-purple-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
          <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-purple-500/30" />
          <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-purple-500/30" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-purple-500/30" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-purple-500/30" />
        </motion.div>
      </div>
    </div>
  );
}