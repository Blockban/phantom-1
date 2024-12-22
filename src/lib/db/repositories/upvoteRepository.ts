import type { Database } from '@libsql/client';

export class UpvoteRepository {
  constructor(private db: Database) {}

  async addUpvote(conversationId: string, userId: string): Promise<boolean> {
    try {
      await this.db.execute({
        sql: 'INSERT INTO upvotes (conversation_id, user_id) VALUES (?, ?)',
        args: [conversationId, userId]
      });
      return true;
    } catch (error) {
      if (error.message?.includes('UNIQUE constraint failed')) {
        return false;
      }
      throw error;
    }
  }

  async getUpvoteCount(conversationId: string): Promise<number> {
    const result = await this.db.execute({
      sql: 'SELECT COUNT(*) as count FROM upvotes WHERE conversation_id = ?',
      args: [conversationId]
    });
    
    return Number(result.rows[0].count);
  }

  async hasUserUpvoted(conversationId: string, userId: string): Promise<boolean> {
    const result = await this.db.execute({
      sql: 'SELECT 1 FROM upvotes WHERE conversation_id = ? AND user_id = ?',
      args: [conversationId, userId]
    });
    
    return result.rows.length > 0;
  }

  async clearAllUpvotes(): Promise<void> {
    await this.db.execute('DELETE FROM upvotes');
  }
}