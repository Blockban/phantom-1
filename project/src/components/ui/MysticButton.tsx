import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';

interface MysticButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function MysticButton({ 
  children, 
  className = '', 
  variant = 'primary',
  size = 'md',
  ...props 
}: MysticButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative group z-50
        ${size === 'sm' ? 'px-6 py-2 text-xs' : size === 'md' ? 'px-8 py-3 text-sm' : 'px-12 py-4 text-base'}
        tracking-[0.2em]
        font-light
        text-white/80
        transition-all
        duration-500
        hover:text-white
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {/* Mystical energy field */}
      <div className="absolute inset-0 -m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-purple-500/20 blur-xl rounded-full"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Button background */}
      <div className="absolute inset-0 bg-transparent backdrop-blur-sm" />
      
      {/* Animated borders */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.2), transparent)',
              'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.4), transparent)',
              'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.2), transparent)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Border container */}
        <div className="absolute inset-0 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors duration-500">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        {/* Mystical runes */}
        <motion.span
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-purple-400/50"
        >
          ᚛
        </motion.span>
        {children}
        <motion.span
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-purple-400/50"
        >
          ᚜
        </motion.span>
      </div>
    </motion.button>
  );
}