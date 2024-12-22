import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

interface LogoContainerProps {
  onComplete: () => void;
}

export function LogoContainer({ children, onComplete }: PropsWithChildren<LogoContainerProps>) {
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
      className="w-[400px] h-[400px] flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}