import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { localStorageManager } from "../services/localStorageManager";

function OrderMenuListItem({ item, itemIsMeal, localStorageUpdated }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

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
        {itemIsMeal ? <h4>{item.name} Meal</h4> : <h4>{item.name}</h4>}
        <p style={{ fontSize: "14px" }}>{item.description}</p>
        {itemIsMeal ? (
          <p style={{ textAlign: "center" }}>{item.mealprice} kr</p>
        ) : (
          <p style={{ textAlign: "center" }}>{item.price} kr</p>
        )}
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
