import { useEffect, useState } from 'react';
export const useCountdown = targetDate => {
  const countDownDate = new Date(targetDate).getTime();
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)), 0);
    const minutes = Math.max(Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)), 0);
    const seconds = Math.max(Math.floor(distance % (1000 * 60) / 1000), 0);
    return {
      days,
      hours,
      minutes,
      seconds
    };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  return timeLeft;
};