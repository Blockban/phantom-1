import React from 'react';
import { motion } from 'framer-motion';
import type { PortalSection } from '../../types/portal';

interface PortalProps {
  section: PortalSection;
  onClick: () => void;
}

export function Portal({ section, onClick }: PortalProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
      
      <div className="glass-panel rounded-lg p-6 neo-brutalism relative z-10">
        <h3 className="text-xl font-bold mb-2 gradient-text">{section.title}</h3>
        <p className="text-gray-400">{section.description}</p>
        
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
      </div>
    </motion.div>
  );
}