import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { ChatLog } from '../../types/archive';

interface ChatLogDialogProps {
  log: ChatLog | null;
  onClose: () => void;
}

export function ChatLogDialog({ log, onClose }: ChatLogDialogProps) {
  if (!log) return null;

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
          className="relative w-full max-w-2xl bg-black/90 rounded-lg border border-purple-500/20 p-6 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white"
          >
            <X size={20} />
          </button>

          <div className="mb-6">
            <h2 className="text-xl font-light text-white/90 mb-2">{log.title}</h2>
            <div className="flex gap-2">
              {log.participants.map((participant) => (
                <span
                  key={participant}
                  className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300/80"
                >
                  {participant}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {log.content.map((message, index) => {
              const [speaker, content] = message.split(': ');
              return (
                <div key={index} className="flex gap-4">
                  <span className="text-purple-400/80 font-light">{speaker}:</span>
                  <p className="text-white/80">{content}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}