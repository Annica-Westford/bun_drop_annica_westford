import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  if (location.pathname === "/notfound") {
    return null;
  }
  return <footer>©2023 Bun Drop</footer>;
}

export default Footer;
