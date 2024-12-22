import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { format } from 'date-fns';
import type { Conversation } from '../../types/archive';

interface ConversationDialogProps {
  conversation: Conversation | null;
  onClose: () => void;
}

export function ConversationDialog({ conversation, onClose }: ConversationDialogProps) {
  if (!conversation) return null;

  const formattedDate = format(new Date(conversation.timestamp), "dd/MM/yyyy, HH:mm:ss");

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-black/90 rounded-lg border border-purple-500/20 p-6"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white"
          >
            <X size={20} />
          </button>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-purple-300/80">
                conversation {conversation.id}
              </span>
              <span className="text-sm text-purple-300/60">
                {formattedDate}
              </span>
            </div>
            {conversation.subject && (
              <h2 className="text-lg text-white/90 font-light">
                {conversation.subject}
              </h2>
            )}
          </div>

          <div className="space-y-4">
            {conversation.messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4"
              >
                <span className="text-purple-400/80 font-light whitespace-nowrap uppercase">
                  {message.oracle}:
                </span>
                <p className="text-white/80">{message.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}