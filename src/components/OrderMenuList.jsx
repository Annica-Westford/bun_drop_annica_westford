import React from "react";
import OrderMenuListItem from "./OrderMenuListItem";

function OrderMenuList({ title, items, burgers }) {
  function findBurger(burgerId) {
    const burger = burgers.find((b) => b.id === burgerId);
    return burger ? burger : null;
  }

  console.log(items);
  console.log(burgers);
  return (
    <>
      <h2>{title}</h2>
      <div className="order-items-container">
        {items?.map((i) => (
          <OrderMenuListItem
            key={i.id}
            item={i}
            burger={burgers ? findBurger(i.burgerId) : undefined}
          />
        ))}
      </div>
    </>
  );
}

export default OrderMenuList;
