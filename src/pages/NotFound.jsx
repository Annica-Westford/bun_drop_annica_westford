import React from "react";
import catImage from "../images/cat_eating_burger.jpg";

function NotFound() {
  return (
    <div>
      <h1>Sidan kunde inte hittas...</h1>
      <p>Men här är en gullig katt som äter en hamburgare!</p>
      <img
        style={{ maxWidth: "600px" }}
        src={catImage}
        alt="Cat eating a burger"
      />
    </div>
  );
}

export default NotFound;
