import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface ChatErrorProps {
  message: string;
}

export function ChatError({ message }: ChatErrorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2"
    >
      <AlertCircle className="w-4 h-4 text-red-400" />
      <p className="text-red-400 text-sm">{message}</p>
    </motion.div>
  );
}