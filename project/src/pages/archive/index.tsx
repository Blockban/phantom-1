import { useState, useCallback } from 'react';
import { CosmicBackground } from '../../components/effects/CosmicBackground';
import { CosmicParticles } from '../../components/effects/CosmicParticles';
import { Navigation } from '../../components/layout/Navigation';
import { PageTransition } from '../../components/transitions/PageTransition';
import { ArchiveHeader } from '../../components/archive/ArchiveHeader';
import { ConversationList } from '../../components/archive/ConversationList';
import { ConversationDialog } from '../../components/archive/ConversationDialog';
import { conversations } from '../../data/conversations';
import type { Conversation } from '../../types/archive';

export function Archive() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

  const handleSelectConversation = useCallback((id: string) => {
    const conversation = conversations.find(conv => conv.id === id);
    setSelectedConversation(conversation || null);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-black">
        <CosmicBackground />
        <CosmicParticles show={true} />
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          <Navigation />
          
          <div className="max-w-4xl mx-auto mt-24">
            <ArchiveHeader />
            
            <ConversationList
              conversations={conversations}
              onSelectConversation={handleSelectConversation}
            />
          </div>
        </div>

        <ConversationDialog
          conversation={selectedConversation}
          onClose={() => setSelectedConversation(null)}
        />
      </div>
    </PageTransition>
  );
}