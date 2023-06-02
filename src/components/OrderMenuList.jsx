import React from "react";
import OrderMenuListItem from "./OrderMenuListItem";

function OrderMenuList({ title, items, localStorageUpdated }) {
  return (
    <>
      <h2>{title}</h2>
      <div className="order-items-container">
        {items?.map((i) => (
          <OrderMenuListItem
            key={i.id}
            item={i}
            localStorageUpdated={() => {
              localStorageUpdated();
            }}
          />
        ))}
      </div>
    </>
  );
}

export default OrderMenuList;
