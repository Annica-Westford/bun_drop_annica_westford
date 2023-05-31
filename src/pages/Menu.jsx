import React from "react";
import { useProducts } from "../hooks/useProducts";
import ProductMenuDisplay from "../components/ProductMenuDisplay";

function Menu() {
  const { burgers, sides, drinks } = useProducts();

  return (
    <div className="flex-container-whole-page">
      <div className="menu-container">
        <h1>MENY</h1>
        <div className="menu-items-container">
          <div className="grid-item-border">
            <h2>Burgare</h2>
            {burgers?.map((b) => (
              <ProductMenuDisplay key={b.id} product={b} />
            ))}
          </div>
          <div className="grid-item-border">
            <h2>Sides</h2>
            {sides?.map((s) => (
              <p key={s.id}>{s.name}</p>
            ))}
          </div>
          <div>
            <h2>Dryck</h2>
            {drinks?.map((d) => (
              <p key={d.id}>{d.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
