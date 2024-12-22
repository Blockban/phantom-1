import { motion } from 'framer-motion';

interface CosmicExplosionProps {
  show: boolean;
  onComplete: () => void;
}

export function CosmicExplosion({ show, onComplete }: CosmicExplosionProps) {
  if (!show) return null;

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
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
          duration: 2,
          ease: "easeOut",
          times: [0, 1]
        }}
      >
        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-900/30 via-fuchsia-900/30 to-purple-900/30 blur-xl" />
      </motion.div>

      {/* Radiating waves */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 15],
          opacity: [1, 0]
        }}
        transition={{
          duration: 2.5,
          ease: "easeOut",
          times: [0, 1]
        }}
      >
        <div className="w-60 h-60 rounded-full border border-purple-500/20 blur-sm" />
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
            duration: 2,
            ease: "easeOut",
            times: [0, 0.5, 1]
          }}
        >
          <div className="w-full h-full rounded-full bg-purple-500/50 blur-sm" />
        </motion.div>
      ))}
    </motion.div>
  );
}