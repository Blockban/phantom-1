import { motion } from 'framer-motion';
import { useState } from 'react';
import { ConversationCard } from './ConversationCard';
import { Pagination } from './Pagination';
import type { Conversation } from '../../types/archive';

interface ConversationListProps {
  conversations: Conversation[];
  onSelectConversation: (id: string) => void;
}

export function ConversationList({ conversations, onSelectConversation }: ConversationListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const conversationsPerPage = 5;
  
  const indexOfLastConversation = currentPage * conversationsPerPage;
  const indexOfFirstConversation = indexOfLastConversation - conversationsPerPage;
  const currentConversations = conversations.slice(indexOfFirstConversation, indexOfLastConversation);
  const totalPages = Math.ceil(conversations.length / conversationsPerPage);

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-3"
      >
        {currentConversations.map((conversation) => (
          <ConversationCard
            key={conversation.id}
            conversation={conversation}
            onClick={() => onSelectConversation(conversation.id)}
          />
        ))}
      </motion.div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}