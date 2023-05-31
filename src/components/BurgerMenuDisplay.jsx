import React from "react";

function BurgerMenuDisplay({ burger, mealprice }) {
  return (
    <div>
      <h3>{burger.name}</h3>
      <p>{burger.description}</p>
      <p>
        Singel {burger.price} kr/ Meal {mealprice} kr
      </p>
    </div>
  );
}

export default BurgerMenuDisplay;
