import { motion } from 'framer-motion';

export function LogoGlow() {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{
        opacity: [0.2, 0.4, 0.2],
        scale: [0.95, 1.05, 0.95],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="absolute inset-0 bg-purple-900/10 blur-3xl rounded-full" />
    </motion.div>
  );
}