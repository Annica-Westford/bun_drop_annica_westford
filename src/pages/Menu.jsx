import React from "react";
import { useProducts } from "../hooks/useProducts";
import BurgerMenuDisplay from "../components/BurgerMenuDisplay";

function Menu() {
  const { burgers, sides, drinks, meals } = useProducts();

  //TODO - lägg till felhantering här, ifall den inte hittar något
  function findMealPrice(burgerId) {
    const meal = meals.find((m) => m.burgerId === burgerId);
    return meal.price;
  }

  return (
    <div className="flex-container-whole-page">
      <div className="menu-container">
        <h1>MENY</h1>
        <div className="menu-items-container">
          <div className="grid-item-border">
            <h2>Burgare</h2>
            {burgers?.map((b) => (
              <BurgerMenuDisplay
                key={b.id}
                burger={b}
                mealprice={findMealPrice(b.id)}
              />
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
