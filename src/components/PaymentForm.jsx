import React, { useEffect, useState } from "react";

function PaymentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function handlePostalCodeChange(e) {
    setPostalCode(e.target.value);
  }

  function handlePaymentMethodChange(e) {
    setPaymentMethod(e.target.value);
  }

  function handleCardNumberChange(e) {
    setCardNumber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname-input">Förnamn</label>
        <input
          id="firstname-input"
          type="text"
          value={firstName}
          placeholder="Förnamn"
          onChange={handleFirstNameChange}
        />
        <label htmlFor="lastname-input">Efternamn</label>
        <input
          id="lastname-input"
          type="text"
          value={lastName}
          placeholder="Efternamn"
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <label htmlFor="address-input">Adress (gatuadress och husnummer)</label>
        <input
          id="address-input"
          type="text"
          value={address}
          placeholder="Adress (gatuadress och husnummer)"
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <label htmlFor="city-input">Ort</label>
        <input
          id="city-input"
          type="text"
          value={city}
          placeholder="Ort"
          onChange={handleCityChange}
        />
        <label htmlFor="postalcode-input">Postnummer (ex: 22736)</label>
        <input
          id="postalcode-input"
          type="number"
          value={postalCode || ""}
          placeholder="Postnummer (ex: 22736)"
          onChange={handlePostalCodeChange}
        />
      </div>
      <div>
        <input
          type="radio"
          id="card"
          name="paymentMethod"
          value="card"
          onChange={handlePaymentMethodChange}
        />
        <label htmlFor="card">Kort</label>
        <input
          type="radio"
          id="swish"
          name="paymentMethod"
          value="swish"
          onChange={handlePaymentMethodChange}
        />
        <label htmlFor="swish">Swish</label>
      </div>
      {paymentMethod === "card" && (
        <div>
          <div>
            <label htmlFor="cardnumber-input">Kortnummer</label>
            <input
              id="cardnumber-input"
              type="number"
              value={cardNumber !== null ? cardNumber : ""}
              placeholder="Kortnummer"
              onChange={handleCardNumberChange}
            />
          </div>
        </div>
      )}
    </form>
  );
}

export default PaymentForm;
