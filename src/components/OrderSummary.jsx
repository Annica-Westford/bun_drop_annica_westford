import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import OrderSummaryItem from "./OrderSummaryItem";

//TODO - måste fixa ett sätt att klumpa ihop samma items så att de bara displayas en gång och med rätt antal
function OrderSummary({ cartItems, totalPrice }) {
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   getLocalStorage();
  // }, []);

  // function getLocalStorage() {
  //   const storedCartItems = localStorage.getItem("cartItems");
  //   if (storedCartItems) {
  //     setCartItems(JSON.parse(storedCartItems));
  //   }
  // }
  //   let cartItems = localStorage.getItem("cartItems");
  //   cartItems = JSON.parse(cartItems);

  if (cartItems.length > 0) {
    return (
      <div className="my-order-container">
        <h2 style={{ paddingBottom: "20px" }}>Min Beställning</h2>
        <div
          className="order-menu-container-list-scroll"
          style={{ height: "400px" }}
        >
          {cartItems?.map((c, index) => (
            <OrderSummaryItem key={index} item={c} />
          ))}
        </div>
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 30px 5px 20px",
          }}
        >
          <p style={{ fontSize: "18px" }}>Total:</p>
          <p style={{ fontSize: "18px" }}>{totalPrice} kr</p>
        </div>

        <Link to="/payment">
          <button style={{ marginTop: "15px" }}>Gå till kassan</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="my-order-container">
        <h2 style={{ paddingBottom: "20px" }}>Min Beställning</h2>
        <div
          className="order-menu-container-list-scroll"
          style={{ height: "400px" }}
        >
          <p>Varukorgen är tom!</p>
        </div>
        <Link to="/payment" className="disabled-link">
          <button style={{ marginTop: "15px" }}>Gå till kassan</button>
        </Link>
      </div>
    );
  }
}

export default OrderSummary;
