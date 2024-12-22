import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function RippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRipple: Ripple = {
        id: counter,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      
      setRipples(prev => [...prev, newRipple]);
      setCounter(prev => prev + 1);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            className="absolute"
            style={{
              left: ripple.x,
              top: ripple.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            {/* Multiple rings for the ripple */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  scale: 0,
                  opacity: 0,
                }}
                animate={{ 
                  scale: [0, 1 + i * 0.3],
                  opacity: [0.5, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="w-32 h-32 rounded-full border border-purple-500/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-purple-500/10 rounded-full blur-md" />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}