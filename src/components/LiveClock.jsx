import { useState, useEffect } from 'react';

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: '1.5rem', fontFamily: 'Roboto, Arial, sans-serif', letterSpacing: '0.05em' }}>
      {time.toLocaleTimeString()}
    </div>
  );
}

export default LiveClock;
