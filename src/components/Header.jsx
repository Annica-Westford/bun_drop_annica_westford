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
        <NavLink exact to="/" activeClassName="active">
          <p className="header-link">Hem</p>
        </NavLink>
        <NavLink exact to="/menu" activeClassName="active">
          <p className="header-link">Meny</p>
        </NavLink>
        <NavLink exact to="/order" activeClassName="active">
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
