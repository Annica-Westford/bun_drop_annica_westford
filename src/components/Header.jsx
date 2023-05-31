import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo color.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <img style={{ maxWidth: "120px" }} src={logo} alt="bun drop logo" />
      </Link>
      <div className="header-links-container">
        <Link to="/">Hem</Link>
        <Link to="/menu">Meny</Link>
        <Link to="/order">Beställ</Link>
        <Link to="/order">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
}

export default Header;
