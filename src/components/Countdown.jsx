import React from "react";
import { useState, useEffect } from "react";

function Countdown() {
  //get random time in minutes and multiply with 60 to get the total number of seconds
  const [timeLeft, setTimeLeft] = useState(Math.floor(Math.random() * 31) * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      {timeLeft > 0 ? (
        <h2 style={{ marginBottom: "20px" }}>
          Woho! Din beställning är genomförd. <br /> Drönaren är framme med din
          mat om{" "}
          {minutes > 0
            ? `${minutes}:${seconds < 10 ? `0${seconds}` : seconds} minuter`
            : `${seconds} sekunder`}
        </h2>
      ) : (
        <h2 style={{ marginBottom: "20px" }}>
          Woho! Din beställning är genomförd. <br /> Drönaren är framme med din
          mat nu!
        </h2>
      )}
    </>
  );
}

export default Countdown;
