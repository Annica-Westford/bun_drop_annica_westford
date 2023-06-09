import React from "react";
import { useCardPaymentForm } from "../hooks/useCardPaymentForm";

function CardPaymentForm({ onValidSubmit }) {
  const { errorMessages, handlePaymentInput, handleSubmit } =
    useCardPaymentForm(onValidSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="column">
          <div className="input-container">
            <label htmlFor="cardnumber-input">Kortnummer*</label>
            <input
              id="cardnumber-input"
              type="text"
              placeholder="Kortnummer*"
              onChange={(e) => {
                handlePaymentInput(e, "cardNumber");
              }}
            ></input>
            <span style={{ fontSize: "12px", color: "#ffc8a3" }}>
              {errorMessages.find((e) => e.name === "cardNumber")
                ?.errorMessage || ""}
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="input-container">
            <label htmlFor="expirationdate-input">Utgångsdatum (YYMM)*</label>
            <input
              id="expirationdate-input"
              type="text"
              placeholder="Utgångsdatum (YYMM)*"
              onChange={(e) => {
                handlePaymentInput(e, "expirationDate");
              }}
            ></input>
            <span style={{ fontSize: "12px", color: "#ffc8a3" }}>
              {errorMessages.find((e) => e.name === "expirationDate")
                ?.errorMessage || ""}
            </span>
          </div>
        </div>
        <div className="column">
          <div className="input-container">
            <label htmlFor="cvc-input">CVC*</label>
            <input
              id="cvc-input"
              type="text"
              placeholder="CVC*"
              onChange={(e) => {
                handlePaymentInput(e, "cvc");
              }}
            ></input>
            <span style={{ fontSize: "12px", color: "#ffc8a3" }}>
              {errorMessages.find((e) => e.name === "cvc")?.errorMessage || ""}
            </span>
          </div>
        </div>
      </div>
      <div>
        <button style={{ marginTop: "10px" }} type="submit">
          Gå vidare
        </button>
      </div>
    </form>
  );
}

export default CardPaymentForm;
