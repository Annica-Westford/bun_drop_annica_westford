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
          <h3 className="header-link">Hem</h3>
        </NavLink>
        <NavLink to="/menu" activeclassname="active">
          <h3 className="header-link">Meny</h3>
        </NavLink>
        <NavLink to="/order" activeclassname="active">
          <div className="header-link flex-container">
            <h3>Beställ</h3>
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
