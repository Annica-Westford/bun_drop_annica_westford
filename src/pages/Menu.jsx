import React from "react";
import { useProducts } from "../hooks/useProducts";
import MenuItem from "../components/MenuItem";

function Menu() {
  const { burgers, sides, drinks, meals } = useProducts();

  //TODO - lägg till felhantering här, ifall den inte hittar något
  function findMealPrice(burgerId) {
    const meal = meals.find((m) => m.burgerId === burgerId);
    return meal ? meal.price : null;
  }

  return (
    <div className="flex-container-whole-page">
      <div className="menu-container">
        <h1>MENY</h1>
        <div className="menu-items-container">
          <div className="grid-item-border">
            <h2>Burgare</h2>
            {burgers?.map((b) => (
              <MenuItem
                key={b.id}
                product={b}
                mealprice={findMealPrice(b.id)}
              />
            ))}
          </div>
          <div className="grid-item-border">
            <h2>Sides</h2>
            {sides?.map((s) => (
              <MenuItem key={s.id} product={s} />
            ))}
          </div>
          <div>
            <h2>Dryck</h2>
            {drinks?.map((d) => (
              <MenuItem key={d.id} product={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
