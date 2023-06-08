import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { localStorageManager } from "../services/localStorageManager";
import MyOrderItem from "../components/MyOrderItem";

//rensa localstorage
function Confirmation() {
  //get random time in minutes and multiply with 60 to get the total number of seconds
  const [timeLeft, setTimeLeft] = useState(Math.floor(Math.random() * 31) * 60);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const location = useLocation();
  const isAllFormsValid = location.state && location.state.propKey;

  useEffect(() => {
    setCartItems(localStorageManager.getLocalStorage());
  }, []);

  useEffect(() => {
    localStorage.clear();
  }, [cartItems]);

  useEffect(() => {
    if (cartItems) {
      const sum = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
      setTotalPrice(sum);
    }
  }, [cartItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (isAllFormsValid === true) {
    return (
      <div className="flex-container-whole-page">
        <div className="confirmation-container">
          {timeLeft > 0 ? (
            <h2 style={{ marginBottom: "20px" }}>
              Woho! Din beställning är genomförd. <br /> Drönaren är framme med
              din mat om{" "}
              {minutes > 0
                ? `${minutes}:${seconds < 10 ? `0${seconds}` : seconds} minuter`
                : `${seconds} sekunder`}
            </h2>
          ) : (
            <h2 style={{ marginBottom: "20px" }}>
              Woho! Din beställning är genomförd. <br /> Drönaren är framme med
              din mat nu!
            </h2>
          )}
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
