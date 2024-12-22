import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import type { Oracle } from '../../types/oracle';
import { OracleImage } from '../ui/OracleImage';

interface OracleModalProps {
  isOpen: boolean;
  onClose: () => void;
  oracle: Oracle;
}

export function OracleModal({ isOpen, onClose, oracle }: OracleModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl mx-4"
          >
            <div className={`relative ${oracle.theme.background} border border-purple-500/20 rounded-lg p-8 backdrop-blur-xl`}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-r ${oracle.theme.gradient} blur-xl opacity-50`} />
                  <div className="relative h-full rounded-lg overflow-hidden">
                    <OracleImage
                      type={oracle.type}
                      alt={oracle.title}
                      className="w-full h-full"
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-light tracking-wider text-white/90 mb-3">
                  {oracle.title}
                </h2>
                <p className="text-purple-300/60 text-center mb-8">
                  {oracle.description}
                </p>

                <div className="w-full p-6 rounded-lg bg-purple-900/10 border border-purple-500/20 mb-8">
                  <p className="text-sm italic text-white/70">
                    "{oracle.quote}"
                  </p>
                </div>

                <div className="w-full p-6 rounded-lg bg-purple-900/10 border border-purple-500/20 mb-8">
                  <h3 className="text-sm font-semibold text-purple-300/80 mb-3">
                    Origin Story
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {oracle.personality}
                  </p>
                </div>

                <div className="w-full">
                  <h3 className="text-sm font-semibold text-purple-300/80 mb-4">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {oracle.expertise.map((skill, index) => (
                      <div
                        key={index}
                        className="px-3 py-1 rounded-full bg-purple-900/10 border border-purple-500/20 text-xs text-white/70"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}