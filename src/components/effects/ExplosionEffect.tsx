import { motion } from 'framer-motion';

interface ExplosionEffectProps {
  onComplete: () => void;
}

export function ExplosionEffect({ onComplete }: ExplosionEffectProps) {
  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onComplete}
    >
      {/* Central burst */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, 20],
          opacity: [0.8, 0]
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut"
        }}
      >
        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-900/30 via-fuchsia-900/30 to-purple-900/30 blur-xl" />
      </motion.div>

      {/* Energy particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-2 h-2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            x: Math.cos(i * 30 * (Math.PI / 180)) * 1000,
            y: Math.sin(i * 30 * (Math.PI / 180)) * 1000,
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut"
          }}
        >
          <div className="w-full h-full rounded-full bg-purple-500/50 blur-sm" />
        </motion.div>
      ))}
    </motion.div>
  );
}