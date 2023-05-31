import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo color.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div className="header-container">
      <Link to="/">
        <img style={{ maxWidth: "120px" }} src={logo} alt="bun drop logo" />
      </Link>
      <div className="header-links-container">
        <NavLink to="/" activeclassname="active">
          <p className="header-link">Hem</p>
        </NavLink>
        <NavLink to="/menu" activeclassname="active">
          <p className="header-link">Meny</p>
        </NavLink>
        <NavLink to="/order" activeclassname="active">
          <div className="header-link flex-container">
            <p>Beställ</p>
            <div className="header-link">
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
