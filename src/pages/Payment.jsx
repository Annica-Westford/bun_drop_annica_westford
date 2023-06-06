import React, { useEffect, useState } from "react";
import MyOrder from "../components/MyOrder";
import { localStorageManager } from "../services/localStorageManager";
import PersonalInfoForm from "../components/PersonalInfoForm";
import PaymentForm from "../components/PaymentForm";
import { Navigate } from "react-router-dom";

function Payment() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isValidPersonalInfoForm, setIsValidPersonalInfoForm] = useState(false);
  const [isValidPaymentForm, setIsValidPaymentForm] = useState(false);
  const [navigateToConfirmation, setNavigateToConfirmation] = useState(false);

  useEffect(() => {
    setCartItems(localStorageManager.getLocalStorage());
  }, []);

  useEffect(() => {
    if (cartItems) {
      const sum = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
      setTotalPrice(sum);
    }
  }, [cartItems]);

  useEffect(() => {
    if (isValidPersonalInfoForm && isValidPaymentForm) {
      setNavigateToConfirmation(true);
    }
  }, [isValidPersonalInfoForm, isValidPaymentForm]);

  function handleValidSubmitPersonalInfoForm() {
    setIsValidPersonalInfoForm(true);
  }

  function handleValidSubmitPaymentForm() {
    setIsValidPaymentForm(true);
  }

  if (navigateToConfirmation) {
    return <Navigate to="/confirmation" />;
  }

  // console.log(isValidPersonalInfoForm);
  // console.log(isValidPaymentForm);
  return (
    <div className="flex-container-whole-page">
      <div className="page-container">
        <div className="payment-parent-container">
          <div className="form-container">
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
