import { UpvoteRepository } from '../repositories/upvoteRepository';
import { generateUserId } from '../../utils/user';

export class UpvoteService {
  constructor(private repository: UpvoteRepository) {}

  async upvoteConversation(conversationId: string): Promise<boolean> {
    const userId = generateUserId();
    return this.repository.addUpvote(conversationId, userId);
  }

  // Add method for seeding with specific user ID
  async upvoteConversationWithUserId(conversationId: string, userId: string): Promise<boolean> {
    return this.repository.addUpvote(conversationId, userId);
  }

  async getUpvoteCount(conversationId: string): Promise<number> {
    return this.repository.getUpvoteCount(conversationId);
  }

  async hasUserUpvoted(conversationId: string): Promise<boolean> {
    const userId = generateUserId();
    return this.repository.hasUserUpvoted(conversationId, userId);
  }

  async clearAllUpvotes(): Promise<void> {
    return this.repository.clearAllUpvotes();
  }
}