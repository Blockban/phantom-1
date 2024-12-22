import React from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary';
}

export function Button({ 
  children, 
  className = '', 
  variant = 'primary',
  ...props 
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative group
        px-12 py-4
        bg-transparent
        overflow-hidden
        text-sm 
        tracking-[0.3em]
        font-light
        text-white/80
        transition-all
        duration-700
        hover:text-white
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {/* Mystical glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-purple-500/10 blur-2xl" />
      </div>

      {/* Ethereal background layers */}
      <div className="absolute inset-0 bg-purple-900/10 backdrop-blur-sm" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-purple-900/20 via-fuchsia-900/20 to-purple-900/20" />
      
      {/* Animated portal lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-[1px]">
          <div className="h-full w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-portal-open" />
          </div>
        </div>
        
        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px]">
          <div className="h-full w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-portal-open" />
          </div>
        </div>
        
        {/* Left line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px]">
          <div className="w-full h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-portal-open" />
          </div>
        </div>
        
        {/* Right line */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px]">
          <div className="w-full h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-portal-open" />
          </div>
        </div>
      </div>

      {/* Inner border with pulse effect */}
      <div className="absolute inset-[1px] border border-purple-500/20 group-hover:border-purple-500/40 transition-colors duration-700 pointer-events-none">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-px bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-purple-500/10 animate-pulse" />
        </div>
      </div>

      {/* Mystical corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}