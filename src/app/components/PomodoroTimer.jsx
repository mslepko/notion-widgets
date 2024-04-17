import { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes default
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft !== 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggle = () => {
    setIsActive(!isActive)
  }

  const reset = () => {
    setTimeLeft(25 * 60);
    setIsActive(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="font-mono text-5xl mb-4">
        {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out"
        onClick={toggle}
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-300 ease-in-out"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default PomodoroTimer;
