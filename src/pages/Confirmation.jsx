import React from "react";
import { useLocation, Navigate } from "react-router-dom";

//TODO - Displaya beställningen
//rensa localstorage
function Confirmation() {
  const randomTimeInterval = Math.floor(Math.random() * 31);
  const location = useLocation();
  const isAllFormsValid = location.state && location.state.propKey;

  console.log(isAllFormsValid);

  if (isAllFormsValid === true) {
    return (
      <div className="flex-container-whole-page">
        <div className="confirmation-container">
          <p style={{ fontSize: "20px", marginBottom: "20px" }}>
            Woho! Din beställning är genomförd. <br /> Drönaren är framme med
            din mat om cirka {randomTimeInterval} minuter
          </p>
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
