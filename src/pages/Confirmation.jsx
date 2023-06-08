import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

//TODO - Displaya beställningen
//rensa localstorage
function Confirmation() {
  //get random time in minutes and multiply with 60 to get the total number of seconds
  const [timeLeft, setTimeLeft] = useState(Math.floor(Math.random() * 31) * 60);

  const location = useLocation();
  const isAllFormsValid = location.state && location.state.propKey;

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

  if (isAllFormsValid === true) {
    return (
      <div className="flex-container-whole-page">
        <div className="confirmation-container">
          {timeLeft > 0 ? (
            <p style={{ fontSize: "20px", marginBottom: "20px" }}>
              Woho! Din beställning är genomförd. <br /> Drönaren är framme med
              din mat om{" "}
              {minutes > 0
                ? `${minutes}:${seconds < 10 ? `0${seconds}` : seconds} minuter`
                : `${seconds} sekunder`}
            </p>
          ) : (
            <p style={{ fontSize: "20px", marginBottom: "20px" }}>
              Woho! Din beställning är genomförd. <br /> Drönaren är framme med
              din mat nu!
            </p>
          )}

          <h2>DROP IT LIKE IT'S HOT!</h2>
        </div>
      </div>
    );
  } else {
    //the user tried to access the confirmation page without having paid
    return <Navigate to="/home" />;
  }
}

export default Confirmation;
