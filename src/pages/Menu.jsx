import React from "react";
import { useItems } from "../hooks/useItems";
import MenuList from "../components/MenuList";

function Menu() {
  const { burgers, sides, drinks, errorMessage } = useItems();

  if (errorMessage) {
    return (
      <div
        className="flex-container-whole-page"
        style={{ alignItems: "flex-start" }}
      >
        <h1 style={{ paddingTop: "20px" }} className="lightest-color">
          {errorMessage}
        </h1>
      </div>
    );
  } else {
    return (
      <div className="flex-container-whole-page">
        <div className="page-container">
          <h1 style={{ paddingBottom: "20px" }}>MENY</h1>
          <div className="menu-items-container">
            <div className="grid-item-border">
              <MenuList title="Burgare" items={burgers} />
            </div>
            <div className="grid-item-border">
              <MenuList title="Sides" items={sides} />
            </div>
            <div>
              <MenuList title="Dryck" items={drinks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
