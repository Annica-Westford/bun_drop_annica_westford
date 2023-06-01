import React from "react";
function OrderMenuList({ title, items }) {
  return (
    <>
      <h2>{title}</h2>
      <div className="order-items-container">
        {items?.map((m) => (
          <p>{m.name}</p>
        ))}
      </div>
    </>
  );
}

export default OrderMenuList;
