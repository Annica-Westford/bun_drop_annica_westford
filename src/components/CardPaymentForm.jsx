import React, { useState } from "react";
import Input from "./Input";

function CardPaymentForm({ onValidSubmit }) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");

  const [expirationDate, setExpirationDate] = useState("");
  const [expirationDateError, setExpirationDateError] = useState("");

  const [cvc, setCvc] = useState("");
  const [cvcError, setCvcError] = useState("");

  function validateCardNumber(input) {
    if (input.trim().length === 0) {
      setCardNumberError("Kortnummer är obligatoriskt");
    } else if (!/^\d*$/.test(input.trim())) {
      setCardNumberError("Kortnumret får endast innehålla siffror");
    } else {
      setCardNumberError("");
    }
  }

  function validateExpirationDate(input) {
    if (input.trim().length === 0) {
      setExpirationDateError("Utgångsdatum är obligatoriskt");
    } else if (!/^(\d{2})(0[1-9]|1[0-2])$/.test(input.trim())) {
      setExpirationDateError("Utgångsdatumet måste matcha formatet: YYMM");
    } else {
      setExpirationDateError("");
    }
  }

  function validateCvc(input) {
    if (input.trim().length === 0) {
      setCvcError("CVC är obligatoriskt");
    } else if (!/^\d{3}$|^\d{4}$/.test(input.trim())) {
      setCvcError("CVC måste vara ett tre- eller fyrsiffrigt nummer");
    } else {
      setCvcError("");
    }
  }

  function handleCardNumberChange(e) {
    const input = e.target.value;
    setCardNumber(input);
    validateCardNumber(input);
  }

  function handleExpirationDateChange(e) {
    const input = e.target.value;
    setExpirationDate(input);
    validateExpirationDate(input);
  }

  function handleCvcChange(e) {
    const input = e.target.value;
    setCvc(input);
    validateCvc(input);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validateCardNumber(cardNumber);
    validateExpirationDate(expirationDate);
    validateCvc(cvc);

    // if there are no error messages, ie all inputs are ok
    if (!cardNumberError && !expirationDateError && !cvcError) {
      onValidSubmit(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="column">
          <Input
            id="cardnumber-input"
            label="Kortnummer"
            type="text"
            value={cardNumber || ""}
            errorMessage={cardNumberError}
            onChange={handleCardNumberChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <Input
            id="expirationdate-input"
            label="Utgångsdatum (YYMM)"
            type="text"
            value={expirationDate || ""}
            errorMessage={expirationDateError}
            onChange={handleExpirationDateChange}
          />
        </div>
        <div className="column">
          <Input
            id="cvc-input"
            label="CVC"
            type="text"
            value={cvc || ""}
            errorMessage={cvcError}
            onChange={handleCvcChange}
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

export default CardPaymentForm;
