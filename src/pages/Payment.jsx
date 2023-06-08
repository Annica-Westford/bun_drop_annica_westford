import React, { useEffect, useState } from "react";
import MyOrder from "../components/MyOrder";
import { localStorageManager } from "../services/localStorageManager";
import PersonalInfoForm from "../components/PersonalInfoForm";
import PaymentForm from "../components/PaymentForm";
import { useNavigate, Link } from "react-router-dom";

function Payment() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isValidPersonalInfoForm, setIsValidPersonalInfoForm] = useState(false);
  const [isValidPaymentForm, setIsValidPaymentForm] = useState(false);
  const [isAllFormsValid, setIsAllFormsValid] = useState(false);

  const navigate = useNavigate();

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
      setIsAllFormsValid(true);
    }
  }, [isValidPersonalInfoForm, isValidPaymentForm]);

  useEffect(() => {
    if (isAllFormsValid) {
      navigate("/confirmation", { state: { propKey: isAllFormsValid } });
    }
  }, [isAllFormsValid, navigate]);

  function handleValidSubmitPersonalInfoForm() {
    setIsValidPersonalInfoForm(true);
  }

  function handleValidSubmitPaymentForm() {
    setIsValidPaymentForm(true);
  }

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
