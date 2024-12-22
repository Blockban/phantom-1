import { useState } from 'react';

export function useLoadingState() {
  const [isLoading, setIsLoading] = useState(true);
  const [showExplosion, setShowExplosion] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowExplosion(true);
    // Show content sooner while explosion is happening
    setTimeout(() => {
      setShowContent(true);
    }, 200); // Reduced from 300ms
  };

  const handleExplosionComplete = () => {
    setShowParticles(true);
    setTimeout(() => {
      setShowExplosion(false);
    }, 1500);
  };

  return {
    isLoading,
    showExplosion,
    showContent,
    showParticles,
    handleLoadingComplete,
    handleExplosionComplete
  };
}