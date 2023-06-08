import React from "react";
import catImage from "../images/cat_eating_burger.jpg";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="flex-container-whole-page"
      style={{ backgroundColor: "#2b2529" }}
    >
      <div
        className="flex-container"
        style={{ flexDirection: "column", gap: "10px" }}
      >
        <h1>Oops det här blev nog fel...</h1>
        <p>Här finns bara en gullig katt som äter en hamburgare</p>
        <Link to="/home">
          <button>Gå tillbaka till förstasidan</button>
        </Link>
      </div>
      <div>
        <img
          style={{ maxWidth: "550px" }}
          src={catImage}
          alt="Cat eating a burger"
        />
      </div>
    </div>
  );
}

export default NotFound;
