import React, { useState, useEffect } from "react";
import { useItems } from "../hooks/useItems";
import OrderMenuList from "../components/OrderMenuList";
import OrderSummary from "../components/OrderSummary";

function Order() {
  const { burgers, sides, drinks } = useItems();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getLocalStorage();
  }, []);

  function localStorageUpdated() {
    getLocalStorage();
  }

  function getLocalStorage() {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    getTotalPrice();
  }

  function getTotalPrice() {
    if (cartItems) {
      const sum = cartItems.reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(sum);
    }
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
          <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
}

export default Order;
