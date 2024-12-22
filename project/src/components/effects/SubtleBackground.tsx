import React from 'react';
import { motion } from 'framer-motion';

export function SubtleBackground() {
  return (
    <>
      <div className="fixed inset-0 bg-black" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="fixed inset-0"
      >
        {/* Vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent" />
        
        {/* Radial gradient centered on the logo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      </motion.div>
    </>
  );
}