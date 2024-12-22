import { motion } from 'framer-motion';

export function LogoGlow() {
  return (
    <>
      {/* Primary glow layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-fuchsia-900/40 to-purple-900/30 blur-[100px]" />
      </motion.div>

      {/* Secondary pulsing layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-fuchsia-600/30 to-purple-600/20 blur-[60px]" />
      </motion.div>

      {/* Core intense glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-fuchsia-500/40 to-purple-500/30 blur-[40px]" />
      </motion.div>

      {/* Ambient light rays */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 origin-center"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 origin-center"
              style={{
                transform: `rotate(${i * 60}deg)`,
              }}
            >
              <div className="absolute top-1/2 left-1/2 w-1 h-[200%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-transparent via-purple-500/20 to-transparent blur-sm" />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}