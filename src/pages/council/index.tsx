import { CouncilHeader } from '../../components/council/CouncilHeader';
import { ChatInterface } from '../../components/council/ChatInterface';
import { CosmicBackground } from '../../components/effects/CosmicBackground';
import { CosmicParticles } from '../../components/effects/CosmicParticles';
import { RunicPortal } from '../../components/effects/RunicPortal';
import { PageTransition } from '../../components/transitions/PageTransition';

export function Council() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black overflow-hidden">
        {/* Background Effects */}
        <CosmicBackground />
        <CosmicParticles show={true} />
        <RunicPortal />
        
        {/* Main Content */}
        <div className="flex flex-col min-h-screen">
          <div className="container mx-auto px-4 relative z-10">
            <CouncilHeader />
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-4">
              <ChatInterface />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}