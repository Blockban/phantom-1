import { Database } from '@libsql/client';
import { SCHEMA } from './schema';

export async function runMigrations(db: Database) {
  try {
    await db.execute(SCHEMA.UPVOTES);
    console.log('Database migrations completed successfully');
  } catch (error) {
    console.error('Failed to run migrations:', error);
    throw error;
  }
}