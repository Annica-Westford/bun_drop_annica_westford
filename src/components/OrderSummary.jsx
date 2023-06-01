import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import OrderSummaryItem from "./OrderSummaryItem";

//TODO - måste fixa så att ordersummery uppdateras dynamiskt när det sker förändringar i localstorage
//TODO - måste fixa plus och minus-symboler till ordersummaryitem
//TODO - måste fixa ett sätt att klumpa ihop samma items så att de bara displayas en gång och med rätt antal
function OrderSummary() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  //   let cartItems = localStorage.getItem("cartItems");
  //   cartItems = JSON.parse(cartItems);

  if (cartItems !== null) {
    return (
      <div className="my-order-container">
        <h2 style={{ paddingBottom: "20px" }}>Min Beställning</h2>
        <div
          className="order-menu-container-list-scroll"
          style={{ height: "450px" }}
        >
          {cartItems?.map((c) => (
            <OrderSummaryItem key={c.id} item={c} />
          ))}
        </div>
        <Link to="/payment">
          <button>Gå till kassan</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="my-order-container">
        <h2 style={{ paddingBottom: "20px" }}>Min Beställning</h2>
        <div
          className="order-menu-container-list-scroll"
          style={{ height: "450px" }}
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

export default OrderSummary;
