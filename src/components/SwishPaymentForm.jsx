import React, { useState } from "react";
function SwishPaymentForm({ onValidSubmit }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(
    "Telefonnummer är obligatoriskt får bara innehålla siffror"
  );

  function validatePhoneNumber(input) {
    if (input.trim().length === 0 || !/^\d*$/.test(input.trim())) {
      setPhoneNumberError(
        "Mobilnummer är obligatoriskt och får bara innehålla siffror"
      );
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
