import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex-container-whole-page">
      <div className="home-container">
        <div>
          <h1
            style={{
              fontSize: "70px",
            }}
          >
            BUN DROP
          </h1>
        </div>
        <div>
          <h2
            style={{
              marginBottom: "20px",
            }}
            className="lightest-color"
          >
            DROP IT LIKE IT'S HOT!
          </h2>
        </div>
        <div>
          <Link to="/menu">
            <button style={{ marginRight: "8px" }}>Meny</button>
          </Link>
          <Link to="/order">
            <button style={{ marginLeft: "8px" }}>Beställ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
