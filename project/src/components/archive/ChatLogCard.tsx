import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import type { ChatLog } from '../../types/archive';
import { useOracleTheme } from '../../hooks/oracle/useOracleTheme';

interface ChatLogCardProps {
  log: ChatLog;
  onClick: () => void;
}

export function ChatLogCard({ log, onClick }: ChatLogCardProps) {
  const { theme } = useOracleTheme();
  const firstOracle = log.participants[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative p-6 rounded-lg border border-purple-500/10 bg-black/20 backdrop-blur-sm">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-light text-white/90 group-hover:text-white transition-colors">
            {log.title}
          </h3>
          <span className="text-xs text-purple-300/50">
            {formatDistanceToNow(new Date(log.date), { addSuffix: true })}
          </span>
        </div>

        <p className="text-sm text-purple-300/60 mb-4">
          {log.preview}
        </p>

        <div className="flex flex-wrap gap-2">
          {log.participants.map((participant) => (
            <span
              key={participant}
              className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300/80"
            >
              {participant}
            </span>
          ))}
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