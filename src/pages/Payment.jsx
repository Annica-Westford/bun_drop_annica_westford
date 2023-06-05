import React, { useEffect, useState } from "react";
import MyOrder from "../components/MyOrder";
import { localStorageManager } from "../services/localStorageManager";
import PersonalInfoForm from "../components/PersonalInfoForm";

function Payment() {
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

  return (
    <div className="flex-container-whole-page">
      <div className="page-container">
        <div className="payment-parent-container">
          <div>
            <div>
              <PersonalInfoForm />
            </div>
          </div>
          <div>
            <MyOrder
              cartItems={cartItems}
              totalPrice={totalPrice}
              parentSource="Payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
