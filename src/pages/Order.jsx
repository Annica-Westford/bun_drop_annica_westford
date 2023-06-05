import React, { useState, useEffect } from "react";
import { useItems } from "../hooks/useItems";
import OrderMenuList from "../components/OrderMenuList";
import MyOrder from "../components/MyOrder";
import { localStorageManager } from "../services/localStorageManager";

function Order() {
  const { burgers, sides, drinks } = useItems();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartItems(localStorageManager.getLocalStorage());
  }, []);

  useEffect(() => {
    if (cartItems) {
      const sum = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
      setTotalPrice(sum);
    }
  }, [cartItems]);

  function localStorageUpdated() {
    setCartItems(localStorageManager.getLocalStorage());
  }

  return (
    <div className="flex-container-whole-page">
      <div className="page-container">
        <div className="order-parent-container">
          <div>
            <h1 style={{ paddingBottom: "20px" }}>BESTÄLL</h1>
            <div
              className="order-menu-container-list-scroll"
              style={{ height: "500px" }}
            >
              <OrderMenuList
                title="Burgare"
                items={burgers}
                localStorageUpdated={localStorageUpdated}
              />
              <OrderMenuList
                title="Sides"
                items={sides}
                localStorageUpdated={localStorageUpdated}
              />
              <OrderMenuList
                title="Dryck"
                items={drinks}
                localStorageUpdated={localStorageUpdated}
              />
            </div>
          </div>
          <MyOrder
            cartItems={cartItems}
            totalPrice={totalPrice}
            localStorageUpdated={localStorageUpdated}
            parentSource="Order"
          />
        </div>
      </div>
    </div>
  );
}

export default Order;
