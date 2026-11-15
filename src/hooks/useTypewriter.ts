import { useEffect, useState } from 'react';

export function useTypewriter(words: readonly string[], typeMs = 60, deleteMs = 32, pauseMs = 1600): string {
  const [text, setText] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0] ?? '');
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const word = words[wordIndex] ?? '';

      if (!deleting) {
        charIndex += 1;
        setText(word.slice(0, charIndex));
        if (charIndex >= word.length) {
          deleting = true;
          timer = window.setTimeout(tick, pauseMs);
          return;
        }
        timer = window.setTimeout(tick, typeMs);
      } else {
        charIndex -= 1;
        setText(word.slice(0, charIndex));
        if (charIndex <= 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = window.setTimeout(tick, 350);
          return;
        }
        timer = window.setTimeout(tick, deleteMs);
      }
    };

    timer = window.setTimeout(tick, 500);
    return () => window.clearTimeout(timer);
  }, [words, typeMs, deleteMs, pauseMs]);

  return text;
}