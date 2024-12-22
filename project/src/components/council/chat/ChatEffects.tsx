import { motion } from 'framer-motion';

export function ChatEffects() {
  return (
    <>
      {/* Mystical energy lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-[1px] h-full overflow-hidden opacity-30">
          <motion.div 
            className="w-full h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"
            animate={{ 
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>
        <div className="absolute right-0 top-0 w-[1px] h-full overflow-hidden opacity-30">
          <motion.div 
            className="w-full h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"
            animate={{ 
              y: ['100%', '-100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-purple-900/5" />
      </div>
    </>
  );
}