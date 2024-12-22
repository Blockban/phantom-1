import { db } from './client';
import { generateUserId } from '../utils/user';

export async function upvoteConversation(conversationId: string) {
  const userId = generateUserId();
  
  try {
    await db.execute({
      sql: 'INSERT INTO upvotes (conversation_id, user_id) VALUES (?, ?)',
      args: [conversationId, userId]
    });
    return true;
  } catch (error) {
    if (error.message.includes('UNIQUE constraint failed')) {
      return false; // User already upvoted
    }
    throw error;
  }
}

export async function getUpvoteCount(conversationId: string): Promise<number> {
  const result = await db.execute({
    sql: 'SELECT COUNT(*) as count FROM upvotes WHERE conversation_id = ?',
    args: [conversationId]
  });
  
  return result.rows[0].count as number;
}

export async function hasUserUpvoted(conversationId: string): Promise<boolean> {
  const userId = generateUserId();
  
  const result = await db.execute({
    sql: 'SELECT 1 FROM upvotes WHERE conversation_id = ? AND user_id = ?',
    args: [conversationId, userId]
  });
  
  return result.rows.length > 0;
}