// Generate a UUID v4 that works across all browsers
function generateUUID(): string {
  // Use crypto.randomUUID if available
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  // Fallback implementation for browsers without crypto.randomUUID
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Generate a persistent user ID stored in localStorage
export function generateUserId(): string {
  const storageKey = 'mystic_user_id';
  let userId = localStorage.getItem(storageKey);
  
  if (!userId) {
    userId = generateUUID();
    localStorage.setItem(storageKey, userId);
  }
  
  return userId;
}