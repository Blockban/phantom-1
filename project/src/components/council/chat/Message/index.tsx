import { OracleAvatar } from './OracleAvatar';
import { MessageContent } from './MessageContent';
import type { Message as MessageType } from '../../../../types/chat';
import { motion } from 'framer-motion';

interface MessageProps {
  message: MessageType;
}

export function Message({ message }: MessageProps) {
  const isOracle = message.role === 'assistant';

  return (
    <motion.div 
      className={`flex ${isOracle ? 'justify-start' : 'justify-end'} gap-3`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {isOracle && <OracleAvatar />}
      
      <div className={`max-w-[85%] ${isOracle ? 'mr-auto' : 'ml-auto'}`}>
        <MessageContent message={message} isOracle={isOracle} />
      </div>
    </motion.div>
  );
}