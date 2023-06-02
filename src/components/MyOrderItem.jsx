import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { localStorageManager } from "../services/localStorageManager";

function MyOrderItem({ item, localStorageUpdated }) {
  function handleMinusClick() {
    localStorageManager.handleMinusClick(item);
    localStorageUpdated();
  }

  function handlePlusClick() {
    localStorageManager.handlePlusClick(item);
    localStorageUpdated();
  }

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
              className="lightest-color order-summary-icon"
              style={{ marginRight: "5px" }}
              onClick={handleMinusClick}
            />
          </span>
          <span>{item.quantity}</span>
          <span>
            <FontAwesomeIcon
              icon={faPlus}
              className="lightest-color order-summary-icon"
              style={{ marginLeft: "5px" }}
              onClick={handlePlusClick}
            />
          </span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <p>{item.totalPrice} kr</p>
      </div>
    </div>
  );
}

export default MyOrderItem;
