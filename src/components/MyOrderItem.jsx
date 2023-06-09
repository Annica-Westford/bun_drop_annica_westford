import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { localStorageManager } from "../services/localStorageManager";

function MyOrderItem({ item, localStorageUpdated, parentSource }) {
  function handleMinusClick() {
    localStorageManager.handleMinusClick(item);
    localStorageUpdated();
  }

  function handlePlusClick() {
    localStorageManager.handlePlusClick(item);
    localStorageUpdated();
  }

  if (parentSource.toLowerCase() === "order") {
    return (
      <div
        className="my-order-item-parent-container"
        style={{ flexDirection: "column" }}
      >
        <div className="my-order-item-child-container">
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
  } else {
    return (
      <div
        className="my-order-item-parent-container"
        style={{ flexDirection: "column" }}
      >
        <div className="my-order-item-child-container">
          <h3
            style={{ marginBottom: "0px", fontSize: "18px" }}
            className="lightest-color"
          >
            {item.name} x {item.quantity}
          </h3>
          {parentSource.toLowerCase() === "confirmation" ? (
            <p style={{ fontSize: "18px" }}>{item.totalPrice} kr</p>
          ) : (
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: "18px" }}>{item.totalPrice} kr</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MyOrderItem;
