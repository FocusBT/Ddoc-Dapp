import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const calculateTimeLeft = () => {
    const launchDate = new Date("March 2, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="timer">
      <div className="time-left">Time left until launch:</div>
      <div className="countdown">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </div>
    </div>
  );
};

export default Timer;
