import React, { useEffect, useState } from "react";
function Timer() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`01/26/2021`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
        HRS: Math.floor((difference / (1000 * 60 * 60)) % 24),
        MINS: Math.floor((difference / 1000 / 60) % 60),
        SECS: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default Timer;
