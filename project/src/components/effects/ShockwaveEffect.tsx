import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Shockwave {
  id: number;
  x: number;
  y: number;
}

export function ShockwaveEffect() {
  const [shockwaves, setShockwaves] = useState<Shockwave[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newShockwave: Shockwave = {
        id: counter,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      
      setShockwaves(prev => [...prev, newShockwave]);
      setCounter(prev => prev + 1);

      setTimeout(() => {
        setShockwaves(prev => prev.filter(s => s.id !== newShockwave.id));
      }, 2000);
    }, 8000);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <AnimatePresence>
        {shockwaves.map(shockwave => (
          <motion.div
            key={shockwave.id}
            className="absolute"
            style={{
              left: shockwave.x,
              top: shockwave.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            {/* Shockwave rings */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 2.5],
                opacity: [0.7, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-40 h-40"
            >
              <div className="absolute inset-0 rounded-full border border-purple-500/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-fuchsia-500/5 to-purple-500/5 rounded-full blur-xl" />
            </motion.div>

            {/* Energy particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  x: Math.cos(i * 45 * (Math.PI / 180)) * 100,
                  y: Math.sin(i * 45 * (Math.PI / 180)) * 100,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="w-full h-full rounded-full bg-purple-500/30 blur-sm" />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}