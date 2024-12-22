import { motion } from 'framer-motion';
import { Logo } from '../ui/Logo';

interface LoadingSequenceProps {
  onComplete: () => void;
}

export function LoadingSequence({ onComplete }: LoadingSequenceProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: [0.8, 1, 1.2, 20, 1],
        opacity: [0, 1, 1, 0, 1],
      }}
      transition={{
        duration: 3,
        times: [0, 0.2, 0.4, 0.6, 1],
        ease: "easeInOut",
        onComplete
      }}
      className="relative"
    >
      <Logo variant="hero" className="w-[500px] h-[500px]" />
    </motion.div>
  );
}