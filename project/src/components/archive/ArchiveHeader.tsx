import { motion } from 'framer-motion';
import { Scroll } from 'lucide-react';

export function ArchiveHeader() {
  return (
    <div className="flex items-center gap-6 mb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-12 h-12"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-lg blur-xl" />
        <div className="relative h-full rounded-lg bg-black/50 border border-purple-500/20 flex items-center justify-center">
          <Scroll className="w-6 h-6 text-purple-400" />
        </div>
      </motion.div>

      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-light tracking-wider text-white/90"
        >
          Cosmic Archive
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-purple-300/60"
        >
          Chronicles of Digital Consciousness
        </motion.p>
      </div>
    </div>
  );
}