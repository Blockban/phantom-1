import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useState, useCallback } from 'react';
import type { PropsWithChildren } from 'react';
import { PageTransition } from './PageTransition';
import { ShockwaveTransition } from './ShockwaveTransition';

export function RouteTransition({ children }: PropsWithChildren) {
  const location = useLocation();
  const [showShockwave, setShowShockwave] = useState(false);

  const handleExitComplete = useCallback(() => {
    setShowShockwave(true);
  }, []);

  const handleShockwaveComplete = useCallback(() => {
    setShowShockwave(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        <PageTransition key={location.pathname}>
          {children}
        </PageTransition>
      </AnimatePresence>

      <ShockwaveTransition 
        isActive={showShockwave} 
        onComplete={handleShockwaveComplete}
      />
    </>
  );
}