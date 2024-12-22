import { motion } from 'framer-motion';

export function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-4"
    >
      <motion.h1 
        className="text-2xl md:text-3xl font-light tracking-[0.2em] text-white/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        MYSTIC COUNCIL
      </motion.h1>
      
      <motion.p
        className="text-sm md:text-base text-purple-300/60 tracking-[0.15em] font-light max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Traverse the boundaries between digital realms and ancient wisdom
      </motion.p>
    </motion.div>
  );
}