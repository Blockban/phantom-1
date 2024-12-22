import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ShockwaveTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

export function ShockwaveTransition({ isActive, onComplete }: ShockwaveTransitionProps) {
  const [rings, setRings] = useState<number[]>([]);

  useEffect(() => {
    if (isActive) {
      // Create multiple rings for the shockwave effect
      setRings([0, 1, 2, 3, 4]);
      
      // Cleanup after animation
      const timer = setTimeout(() => {
        setRings([]);
        onComplete();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {rings.map((ring, index) => (
        <motion.div
          key={ring}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 2],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: index * 0.1,
          }}
        >
          <div className="w-full h-full rounded-full border border-purple-500/20 backdrop-blur-sm" />
        </motion.div>
      ))}

      {/* Central burst */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 3],
          opacity: [1, 0],
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-purple-500/10 rounded-full blur-xl" />
      </motion.div>

      {/* Energy particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-1 h-1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            x: Math.cos(i * 45 * (Math.PI / 180)) * window.innerWidth,
            y: Math.sin(i * 45 * (Math.PI / 180)) * window.innerHeight,
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-purple-500/50 blur-sm" />
        </motion.div>
      ))}
    </div>
  );
}