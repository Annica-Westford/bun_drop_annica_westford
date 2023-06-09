import React, { useEffect, useState } from "react";
import MyOrder from "../components/MyOrder";
import { localStorageManager } from "../services/localStorageManager";
import PersonalInfoForm from "../components/PersonalInfoForm";
import PaymentForm from "../components/PaymentForm";
import { Link } from "react-router-dom";
import { usePayment } from "../hooks/usePayment";

function Payment() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    isValidPersonalInfoForm,
    handleValidSubmitPersonalInfoForm,
    handleValidSubmitPaymentForm,
  } = usePayment();

  useEffect(() => {
    setCartItems(localStorageManager.getLocalStorage());
    setTotalPrice(localStorageManager.getCartItemsSum());
  }, []);

  return (
    <div className="flex-container-whole-page">
      <div className="page-container">
        <div className="payment-parent-container">
          <div className="form-container grid-item-border">
            <Link to="/order">
              <button className="go-back-btn">Gå tillbaka</button>
            </Link>
            <h1>BETALNING</h1>
            {!isValidPersonalInfoForm ? (
              <PersonalInfoForm
                onValidSubmit={handleValidSubmitPersonalInfoForm}
              />
            ) : (
              <PaymentForm onValidSubmit={handleValidSubmitPaymentForm} />
            )}
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
