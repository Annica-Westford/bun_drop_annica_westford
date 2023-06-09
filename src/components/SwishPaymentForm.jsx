import React from "react";
import { useSwishPaymentForm } from "../hooks/useSwishPaymentForm";

function SwishPaymentForm({ onValidSubmit }) {
  const { phoneNumberError, handlePhoneNumberChange, handleSubmit } =
    useSwishPaymentForm(onValidSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="column">
          <div className="input-container">
            <label htmlFor="phonenumber-input">Telefonnummer*</label>
            <input
              id="phonenumber-input"
              type="text"
              placeholder="Telefonnummer*"
              onChange={handlePhoneNumberChange}
            ></input>
            <span style={{ fontSize: "12px", color: "#ffc8a3" }}>
              {phoneNumberError || ""}
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

export default SwishPaymentForm;
