import { createClient } from '@libsql/client';
import { runMigrations } from './migrations';
import { UpvoteRepository } from './repositories/upvoteRepository';
import { UpvoteService } from './services/upvoteService';

class Database {
  private static instance: Database;
  private initialized = false;
  private readonly db = createClient({ 
    url: 'file:mystic.db',
    syncUrl: 'file:mystic.db' // Ensure sync mode is enabled
  });
  
  private readonly upvoteRepository: UpvoteRepository;
  public readonly upvoteService: UpvoteService;

  private constructor() {
    this.upvoteRepository = new UpvoteRepository(this.db);
    this.upvoteService = new UpvoteService(this.upvoteRepository);
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  async initialize(): Promise<void> {
    if (this.initialized) return;

    try {
      await runMigrations(this.db);
      this.initialized = true;
      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Failed to initialize database:', error);
      throw error;
    }
  }

  isInitialized(): boolean {
    return this.initialized;
  }
}

export const database = Database.getInstance();