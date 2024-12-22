import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'hero';
}

export function Logo({ className = '', variant = 'hero' }: LogoProps) {
  const imagePath = variant === 'header' ? '/assets/logo-144.png' : '/assets/logo-hero.png';
  
  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-purple-900/10 blur-3xl rounded-full"
      />
      
      <motion.img 
        src={imagePath}
        alt="Mystic Council"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.9, 1, 0.9]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 w-full h-full object-contain"
        style={{ 
          filter: 'brightness(1.1) contrast(1.1)',
          mixBlendMode: 'lighten'
        }}
      />
    </div>
  );
}