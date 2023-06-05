import React, { useEffect, useState } from "react";
import Input from "./Input";

function PersonalInfoForm() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");

  const [postalCode, setPostalCode] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");

  const [isValidForm, setIsValidForm] = useState(false);

  function validateFirstName(input) {
    if (input.trim().length < 2 || !/^[a-zA-Z]+$/.test(input.trim())) {
      setFirstNameError("Förnamn måste vara minst två bokstäver.");
    } else {
      setFirstNameError("");
    }
  }

  function validateLastName(input) {
    if (input.trim().length < 2 || !/^[a-zA-Z]+$/.test(input.trim())) {
      setLastNameError("Efternamn måste vara minst två bokstäver.");
    } else {
      setLastNameError("");
    }
  }

  function validateAddress(input) {
    //check so that input contains at least one letter and a 5 digit postal code
    if (input.trim().length === 0) {
      setAddressError("Adress är obligatoriskt");
    } else if (!/[a-zA-Z]+/.test(input) || !/\d{5}/.test(input)) {
      setAddressError("Adressen måste innehålla både gatuadress och husnummer");
    } else {
      setAddressError("");
    }
  }

  function validateCity(input) {
    if (input.trim().length < 2 || !/^[a-zA-Z]+$/.test(input.trim())) {
      setCityError("Ort måste vara minst två bokstäver.");
    } else {
      setCityError("");
    }
  }

  function validatePostalCode(input) {
    if (input.trim().length === 0) {
      setPostalCodeError("Postnummer är obligatoriskt");
    } else if (!/^\d{5}$/.test(input)) {
      setPostalCodeError("Postnumret måste vara ett femsiffrigt nummer");
    } else {
      setPostalCodeError("");
    }
  }

  function handleFirstNameChange(e) {
    const input = e.target.value;
    setFirstName(input);
    validateFirstName(input);
  }

  function handleLastNameChange(e) {
    const input = e.target.value;
    setLastName(input);
    validateLastName(input);
  }

  function handleAddressChange(e) {
    const input = e.target.value;
    setAddress(input);
    validateAddress(input);
  }

  function handleCityChange(e) {
    const input = e.target.value;
    setCity(input);
    validateCity(input);
  }

  function handlePostalCodeChange(e) {
    const input = e.target.value;
    setPostalCode(input);
    validatePostalCode(input);
  }

  function handleSubmit(e) {
    e.preventDefault();

    validateFirstName(firstName);
    validateLastName(lastName);
    validateAddress(address);
    validateCity(city);
    validatePostalCode(postalCode);

    if (
      !firstNameError &&
      !lastNameError &&
      !addressError &&
      !cityError &&
      !postalCodeError
    ) {
      //om där inte finns några felmeddelanden så är allt ok
      //enabla knappen "Gå vidare"
      //innebär att jag måste disabla den som default
      //behöver förmodligen skicka en bool till parentkomponenten så att den vet att betalningsinfon ska displayas
      //Typ isValidForm är true
      setIsValidForm(true);
    }
  }

  return (
    <div className="form-container">
      <h1>BETALNING</h1>
      <h2>Personuppgifter</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <Input
              id="firstname-input"
              label="Förnamn*"
              type="text"
              value={firstName}
              errorMessage={firstNameError}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="column">
            <Input
              id="lastname-input"
              label="Efternamn*"
              type="text"
              value={lastName}
              errorMessage={lastNameError}
              onChange={handleLastNameChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Input
              id="address-input"
              label="Adress (gatuadress och husnummer)*"
              type="text"
              value={address}
              errorMessage={addressError}
              onChange={handleAddressChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <Input
              id="city-input"
              label="Ort*"
              type="text"
              value={city}
              errorMessage={cityError}
              onChange={handleCityChange}
            />
          </div>
          <div className="column">
            <Input
              id="postalcode-input"
              label="Postnummer (ex: 22736)*"
              type="number"
              value={postalCode || ""}
              errorMessage={postalCodeError}
              onChange={handlePostalCodeChange}
            />
          </div>
        </div>

        <div>
          <button type="submit">Gå vidare</button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
