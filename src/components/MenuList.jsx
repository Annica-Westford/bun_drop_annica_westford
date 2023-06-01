import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ title, items, meals }) {
  function findMealPrice(burgerId) {
    const meal = meals.find((m) => m.burgerId === burgerId);
    return meal ? meal.price : null;
  }

  return (
    <>
      <h2>{title}</h2>
      {items?.map((i) => (
        <MenuItem
          key={i.id}
          item={i}
          mealprice={meals ? findMealPrice(i.id) : undefined}
        />
      ))}
    </>
  );
}

export default MenuList;
