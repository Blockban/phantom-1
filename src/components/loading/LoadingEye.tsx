import React from 'react';
import { motion } from 'framer-motion';

export function LoadingEye() {
  return (
    <div className="relative w-48 h-48">
      {/* Initial fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        {/* Eye opening animation */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <img 
            src="/assets/mystic-eye.svg"
            alt="Mystic Eye"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Pulsing glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.5, 0],
          scale: [0.8, 1.2, 1.5]
        }}
        transition={{
          duration: 2,
          times: [0, 0.5, 1],
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-fuchsia-900/20 to-purple-900/20 rounded-full blur-2xl"
      />
    </div>
  );
}