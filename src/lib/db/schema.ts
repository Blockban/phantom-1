export const SCHEMA = {
  UPVOTES: `
    CREATE TABLE IF NOT EXISTS upvotes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      conversation_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(conversation_id, user_id)
    )
  `
} as const;