import { motion } from 'framer-motion';
import { format } from 'date-fns';
import type { Conversation } from '../../types/archive';
import { UpvoteButton } from './UpvoteButton';

interface ConversationCardProps {
  conversation: Conversation;
  onClick: () => void;
}

export function ConversationCard({ conversation, onClick }: ConversationCardProps) {
  const formattedDate = format(new Date(conversation.timestamp), "dd/MM/yyyy, HH:mm:ss");
  const participants = [...new Set(conversation.messages.map(m => m.oracle))];

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="relative group"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-fuchsia-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative p-3 rounded-lg border border-purple-500/10 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-purple-300/80">
            conversation {conversation.id}
          </span>
          <UpvoteButton conversationId={conversation.id} />
        </div>

        <div className="cursor-pointer" onClick={onClick}>
          {conversation.subject && (
            <p className="text-sm text-white/70 mb-3 line-clamp-1">
              {conversation.subject}
            </p>
          )}

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {participants.map((oracle) => (
                <span
                  key={oracle}
                  className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 text-purple-300/80 uppercase"
                >
                  {oracle}
                </span>
              ))}
            </div>
            <span className="text-sm text-purple-300/60">
              {formattedDate}
            </span>
          </div>
        </div>

        {/* Mystical corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-purple-500/30" />
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-purple-500/30" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-purple-500/30" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-purple-500/30" />
      </div>
    </motion.div>
  );
}