import { useState, useEffect, useCallback } from 'react';

export function useTypingEffect(text: string, speed: number = 20) {
  const [displayedText, setDisplayedText] = useState(text);
  const [isTyping, setIsTyping] = useState(false);

  const typeText = useCallback(() => {
    // For user messages, show immediately
    if (speed === 0) {
      setDisplayedText(text);
      setIsTyping(false);
      return () => {};
    }

    // For oracle messages, type quickly
    setDisplayedText('');
    setIsTyping(true);

    const chunks = text.match(/.{1,25}|.+/g) || [];
    let currentChunk = 0;

    const typingInterval = setInterval(() => {
      if (currentChunk < chunks.length) {
        setDisplayedText(prev => prev + chunks[currentChunk]);
        currentChunk++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  useEffect(() => {
    const cleanup = typeText();
    return cleanup;
  }, [typeText]);

  return { displayedText, isTyping };
}