import React, { useState } from "react";
import CardPaymentForm from "./CardPaymentForm";
import SwishPaymentForm from "./SwishPaymentForm";

function PaymentForm({ onValidSubmit }) {
  const [paymentMethod, setPaymentMethod] = useState("");

  function handlePaymentMethodChange(e) {
    setPaymentMethod(e.target.value);
  }

  return (
    <>
      <h2>Betalningsuppgifter</h2>
      <div style={{ padding: "10px" }}>
        <div className="row">
          <div
            className="column flex-container"
            style={{
              justifyContent: "center",
            }}
          >
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="card" style={{ fontSize: "18px" }}>
              Kort
            </label>
            <img
              src="/images/card-logo.png"
              alt="visa mastercard"
              style={{ height: "30px" }}
            />
          </div>
          <div
            className="column"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="radio"
              id="swish"
              name="paymentMethod"
              value="swish"
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="swish" style={{ fontSize: "18px" }}>
              Swish
            </label>
            <img
              src="/images/swish-logo.png"
              alt="visa mastercard"
              style={{ height: "30px" }}
            />
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
