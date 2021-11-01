import { useEffect, useRef, useState } from 'react';

const Clock = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('November 21, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = `0${Math.floor(distance / (1000 * 60 * 60 * 24))}`.slice(-2);
      const hours = `0${Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))}`.slice(-2);
      const minutes = `0${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
      const seconds = `0${Math.floor((distance % (1000 * 60)) / 1000)}`.slice(-2);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div>
      <div>

        {timerDays}
        :
        {timerHours}
        :
        {timerMinutes}
        :
        {timerSeconds}

      </div>
    </div>
  );
};
export default Clock;
