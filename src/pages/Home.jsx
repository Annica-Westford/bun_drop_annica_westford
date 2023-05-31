import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container flex-container">
      <div>
        <h1
          style={{ fontSize: "60px", borderRadius: "80px 80px 10px 10px" }}
          className="lightest-salmon-color brown-background-home-container"
        >
          BUN DROP
        </h1>
      </div>
      <div>
        <Link to="/menu">
          <button style={{ marginRight: "5px" }}>Meny</button>
        </Link>
        <Link to="/order">
          <button style={{ marginLeft: "5px" }}>Beställ</button>
        </Link>
      </div>
      <div>
        <h2
          style={{ borderRadius: "10px 10px 50px 50px" }}
          className="lightest-salmon-color brown-background-home-container"
        >
          DROP IT LIKE IT'S HOT!
        </h2>
      </div>
    </div>
  );
}

export default Home;
