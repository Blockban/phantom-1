import { motion } from 'framer-motion';
import type { Message } from '../../../../types/chat';

interface MessageContentProps {
  message: Message;
  isOracle: boolean;
}

export function MessageContent({ message, isOracle }: MessageContentProps) {
  // Extract oracle name and content for assistant messages
  const content = message.content;

  return (
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
      transition={{ duration: 0.2 }}
    >
      <p className="text-sm text-white/90 whitespace-pre-wrap leading-relaxed">
        {content}
      </p>

      {/* Mystical corner accents for oracle messages */}
      {isOracle && (
        <>
          <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-purple-500/30" />
          <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-purple-500/30" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-purple-500/30" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-purple-500/30" />
        </>
      )}
    </motion.div>
  );
}