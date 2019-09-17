import React, { useState, useEffect } from "react";

const Ticks = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setSeconds(prevSeconds => prevSeconds + 1);
  }

  return <div>Seconds: {seconds}</div>;
};

export default Ticks;
