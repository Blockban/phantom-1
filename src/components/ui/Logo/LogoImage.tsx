import { motion } from 'framer-motion';

interface LogoImageProps {
  variant: 'header' | 'hero';
}

export function LogoImage({ variant }: LogoImageProps) {
  const imagePath = variant === 'header' ? '/assets/logo-144.png' : '/assets/logo-hero.png';
  
  return (
    <motion.div
      className="absolute inset-0 z-10"
      initial={false}
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
        src={imagePath}
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