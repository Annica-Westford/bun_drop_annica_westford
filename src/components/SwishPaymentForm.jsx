import React, { useState } from "react";
import Input from "./Input";
function SwishPaymentForm({ onValidSubmit }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  function validatePhoneNumber(input) {
    if (input.trim().length === 0) {
      setPhoneNumberError("Mobilnummer är obligatoriskt");
    } else if (!/^\d*$/.test(input.trim())) {
      setPhoneNumberError("Telefonnumret får bara innehålla siffror");
    } else {
      setPhoneNumberError("");
    }
  }

  function handlePhoneNumberChange(e) {
    const input = e.target.value;
    setPhoneNumber(input);
    validatePhoneNumber(input);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validatePhoneNumber(phoneNumber);

    // if there are no error messages, ie all inputs are ok
    if (!phoneNumberError) {
      onValidSubmit(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="column">
          <Input
            id="phonenumber-input"
            label="Mobilnummer (ex: 0764523456)"
            type="text"
            value={phoneNumber || ""}
            errorMessage={phoneNumberError}
            onChange={handlePhoneNumberChange}
          />
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
