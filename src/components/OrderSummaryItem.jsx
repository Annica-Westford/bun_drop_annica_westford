import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

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
          <span>
            <FontAwesomeIcon
              icon={faMinus}
              className="lightest-color"
              style={{ marginRight: "5px" }}
            />
          </span>
          <span>{item.quantity}</span>
          <span>
            <FontAwesomeIcon
              icon={faPlus}
              className="lightest-color"
              style={{ marginLeft: "5px" }}
            />
          </span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <p>{item.price} kr</p>
      </div>
    </div>
  );
}

export default OrderSummaryItem;
