import { useEffect, useRef } from 'react';
export function useInactivityTimer({
  timeout = 60000,
  onInactive,
  events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll']
}) {
  const timerRef = useRef(null);
  useEffect(() => {
    const resetTimer = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(onInactive, timeout);
    };
    events.forEach(event => window.addEventListener(event, resetTimer, {
      passive: true
    }));
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      events.forEach(event => window.removeEventListener(event, resetTimer));
    };
  }, [timeout, onInactive, events]);
}