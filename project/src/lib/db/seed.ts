import { database } from './client';

const TEST_USERS = {
  user1: 'test-user-1-abc123',
  user2: 'test-user-2-def456',
  user3: 'test-user-3-ghi789',
  user4: 'test-user-4-jkl012'
} as const;

export async function seedTestUpvotes() {
  try {
    // Clear existing upvotes first
    await database.upvoteService.clearAllUpvotes();

    // Seed test upvotes for both conversations
    const testData = [
      {
        conversationId: "e9c276fa-9d84-4cf8-b391-e462f97c31a2", // Latest conversation
        users: [TEST_USERS.user1, TEST_USERS.user2] // 2 upvotes
      },
      {
        conversationId: "3a1b7d4c-e892-4f15-9c64-2e45f8d0b3e9", // Previous conversation
        users: [TEST_USERS.user1, TEST_USERS.user2] // 2 upvotes
      }
    ];

    for (const data of testData) {
      for (const userId of data.users) {
        await database.upvoteService.upvoteConversationWithUserId(
          data.conversationId,
          userId
        );
      }
    }

    console.log('Test upvotes seeded successfully');
  } catch (error) {
    console.error('Failed to seed test upvotes:', error);
    throw error;
  }
}