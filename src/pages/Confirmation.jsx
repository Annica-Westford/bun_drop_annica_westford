import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { localStorageManager } from "../services/localStorageManager";
import MyOrderItem from "../components/MyOrderItem";
import Countdown from "../components/Countdown";

function Confirmation() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const location = useLocation();
  const isAllFormsValid = location.state && location.state.propKey;

  useEffect(() => {
    setCartItems(localStorageManager.getLocalStorage());
    setTotalPrice(localStorageManager.getCartItemsSum());
  }, []);

  useEffect(() => {
    if (isAllFormsValid) {
      localStorage.clear();
    }
  }, [cartItems, isAllFormsValid]);

  if (isAllFormsValid === true) {
    return (
      <div className="flex-container-whole-page">
        <div className="confirmation-container">
          <Countdown />
          <div>
            <h3 style={{ color: "#ffe8d2", fontSize: "22px" }}>
              Ordersammanfattning
            </h3>
            <div style={{ maxHeight: "200px", overflow: "auto" }}>
              {cartItems?.map((c, index) => (
                <MyOrderItem
                  key={index}
                  item={c}
                  parentSource={"Confirmation"}
                />
              ))}
            </div>
            <div className="total-price-container">
              <p style={{ fontSize: "18px" }}>Total: {totalPrice} kr</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    //the user tried to access the confirmation page without having paid
    return <Navigate to="/home" />;
  }
}

export default Confirmation;
