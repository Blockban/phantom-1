import { motion } from 'framer-motion';

export function LogoImage() {
  return (
    <motion.div
      className="relative z-10 w-full h-full"
      animate={{
        scale: [1, 1.02, 1],
        opacity: [0.9, 1, 0.9]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <img 
        src="/assets/logo-hero.png"
        alt="Mystic Council"
        className="w-full h-full object-contain"
        style={{ 
          filter: 'brightness(1.1) contrast(1.1)',
          mixBlendMode: 'lighten'
        }}
      />
    </motion.div>
  );
}