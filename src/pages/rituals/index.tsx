import { CosmicBackground } from '../../components/effects/CosmicBackground';
import { CosmicParticles } from '../../components/effects/CosmicParticles';
import { Navigation } from '../../components/layout/Navigation';
import { PageTransition } from '../../components/transitions/PageTransition';

export function Rituals() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black">
        <CosmicBackground />
        <CosmicParticles show={true} />
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          <Navigation />
          <div className="max-w-6xl mx-auto mt-24">
            <h1 className="text-3xl font-light tracking-wider text-white/90 mb-6">
              Ancient Rituals
            </h1>
            <p className="text-gray-400">
              The ancient ceremonies are being prepared...
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}