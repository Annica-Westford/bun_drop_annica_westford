import React from "react";
function OrderSummaryItem({ item }) {
  return (
    <div
      className="menu-item-parent-container"
      style={{ flexDirection: "column" }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ marginBottom: "0px" }} className="lightest-color">
          {item.name}
        </h3>
        <div style={{ display: "flex" }}>
          <span>-</span>
          <span> </span>
          <span>1</span>
          <span> </span>
          <span>+</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <p>{item.price} kr</p>
      </div>
    </div>
  );
}

export default OrderSummaryItem;
