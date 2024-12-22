import { motion } from 'framer-motion';
import { ChatLogCard } from './ChatLogCard';
import type { ArchiveSection as ArchiveSectionType } from '../../types/archive';

interface ArchiveSectionProps {
  section: ArchiveSectionType;
  onSelectLog: (id: string) => void;
}

export function ArchiveSection({ section, onSelectLog }: ArchiveSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <h2 className="text-xl font-light text-white/80 mb-6">
        {section.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {section.logs.map((log) => (
          <ChatLogCard
            key={log.id}
            log={log}
            onClick={() => onSelectLog(log.id)}
          />
        ))}
      </div>
    </motion.div>
  );
}