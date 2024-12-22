import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef } from 'react';

interface PortalButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
}

export function PortalButton({ 
  children, 
  className = '', 
  variant = 'primary',
  ...props 
}: PortalButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative group z-50
        px-8 py-2
        tracking-[0.2em]
        font-light
        text-sm
        text-white/80
        transition-all
        duration-500
        hover:text-white
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {/* Portal lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
          <div className="h-full w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-portal-open" />
          </div>
        </div>
        
        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
          <div className="h-full w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-portal-open" />
          </div>
        </div>
        
        {/* Left line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] overflow-hidden">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-portal-open" />
          </div>
        </div>
        
        {/* Right line */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] overflow-hidden">
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-portal-open" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        <motion.span
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-purple-400/50"
        >
          ᚛
        </motion.span>
        <motion.span
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {children}
        </motion.span>
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