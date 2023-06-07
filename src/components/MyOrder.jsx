import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyOrderItem from "./MyOrderItem";

function MyOrder({ cartItems, totalPrice, localStorageUpdated, parentSource }) {
  if (cartItems.length > 0) {
    return (
      <div className="my-order-container">
        <h2 style={{ paddingBottom: "20px", paddingTop: "50px" }}>
          Min Beställning
        </h2>
        <div
          className="order-menu-container-list-scroll"
          style={{ height: "370px" }}
        >
          {cartItems?.map((c, index) => (
            <MyOrderItem
              key={index}
              item={c}
              localStorageUpdated={() => {
                localStorageUpdated();
              }}
              parentSource={parentSource}
            />
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

        {parentSource.toLowerCase() === "order" ? (
          <Link to="/payment">
            <button>Gå till kassan</button>
          </Link>
        ) : (
          <Link to="/order">
            <button>Ändra beställning</button>
          </Link>
        )}
      </div>
    );
  } else {
    return (
      <div className="my-order-container">
        <h2 style={{ paddingBottom: "20px", paddingTop: "50px" }}>
          Min Beställning
        </h2>
        <div
          className="my-order-menu-container-list-scroll"
          style={{ height: "370px" }}
        >
          <p>Varukorgen är tom!</p>
        </div>
        <Link to="/payment" className="disabled-link">
          <button>Gå till kassan</button>
        </Link>
      </div>
    );
  }
}

export default MyOrder;
