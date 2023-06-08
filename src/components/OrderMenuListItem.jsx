import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { localStorageManager } from "../services/localStorageManager";

function OrderMenuListItem({ item, localStorageUpdated }) {
  function addToLocalStorage() {
    localStorageManager.addToLocalStorage(item);
    localStorageUpdated();
  }

  return (
    <div className="order-menu-list-item-container">
      <div className="flex-container">
        <img src={`/images/${item.image}`} alt="" className="item-image" />
      </div>
      <div className="order-menu-list-item-child-container">
        <h4>{item.name}</h4>
        <p style={{ fontSize: "14px" }}>{item.description}</p>
        <p style={{ textAlign: "center" }}>{item.price} kr</p>
      </div>

      <div className="flex-container" style={{ paddingRight: "7px" }}>
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="add-symbol"
          onClick={addToLocalStorage}
        />
      </div>
    </div>
  );
}

export default OrderMenuListItem;
