import React, { useState, useEffect } from "react";
import CardPaymentForm from "./CardPaymentForm";
import SwishPaymentForm from "./SwishPaymentForm";

function PaymentForm({ onValidSubmit }) {
  //TODO - lägg in loggor för swish och kort

  //måste ha en gå tillbaka till personuppgifter-knapp här
  const [paymentMethod, setPaymentMethod] = useState("");

  function handlePaymentMethodChange(e) {
    setPaymentMethod(e.target.value);
  }

  return (
    <>
      <h2>Betalningsuppgifter</h2>
      <div>
        <div className="row">
          <div className="column">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="card">Kort</label>
          </div>
          <div className="column">
            <input
              type="radio"
              id="swish"
              name="paymentMethod"
              value="swish"
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="swish">Swish</label>
          </div>
        </div>
        {paymentMethod === "card" && (
          <CardPaymentForm onValidSubmit={onValidSubmit} />
        )}
        {paymentMethod === "swish" && (
          <SwishPaymentForm onValidSubmit={onValidSubmit} />
        )}
      </div>
    </>
  );
}

export default PaymentForm;
