import React, { useState } from "react";
import { Link } from "react-router-dom";

function PersonalInfoForm({ onValidSubmit }) {
  const [customer, setCustomer] = useState({});
  const [errorMessages, setErrorMessages] = useState([
    {
      name: "firstName",
      errorMessage: "Måste vara minst två bokstäver",
    },
    {
      name: "lastName",
      errorMessage: "Måste vara minst två bokstäver",
    },
    {
      name: "city",
      errorMessage: "Måste vara minst två bokstäver",
    },
    {
      name: "address",
      errorMessage: "Måste innehålla både gatuadress och husnummer",
    },
    {
      name: "postalCode",
      errorMessage: "Måste vara ett femsiffrigt nummer",
    },
  ]);

  // const [isValidInputs, setIsValidInputs] = useState(false);

  function handleCustomerInput(e, propertyName) {
    setCustomer({ ...customer, [propertyName]: e.target.value });
    validateInput(e.target.value, propertyName);
  }

  function validateInput(input, propertyName) {
    const updatedErrorMessages = [...errorMessages];
    const errorIndex = updatedErrorMessages.findIndex(
      (e) => e.name === propertyName
    );

    switch (propertyName) {
      case "firstName":
      case "lastName":
      case "city": {
        if (input.trim().length < 2 || !/^[a-zA-Z]+$/.test(input.trim())) {
          // Add error message if it doesn't exist
          if (errorIndex === -1) {
            updatedErrorMessages.push({
              name: propertyName,
              errorMessage: "Måste vara minst två bokstäver",
            });
          }
        } else {
          // Remove error message if it exists
          if (errorIndex !== -1) {
            updatedErrorMessages.splice(errorIndex, 1);
          }
        }

        setErrorMessages(updatedErrorMessages);
        break;
      }
      case "address": {
        if (
          input.trim().length === 0 ||
          !/[a-zA-Z]+/.test(input.trim()) ||
          !/\d{5}/.test(input.trim())
        ) {
          // Add error message if it doesn't exist
          if (errorIndex === -1) {
            updatedErrorMessages.push({
              name: propertyName,
              errorMessage: "Måste innehålla både gatuadress och husnummer",
            });
          }
        } else {
          // Remove error message if it exists
          if (errorIndex !== -1) {
            updatedErrorMessages.splice(errorIndex, 1);
          }
        }

        setErrorMessages(updatedErrorMessages);
        break;
      }
      case "postalCode": {
        if (input.trim().length === 0 || !/^\d{5}$/.test(input.trim())) {
          // Add error message if it doesn't exist
          if (errorIndex === -1) {
            updatedErrorMessages.push({
              name: propertyName,
              errorMessage: "Måste vara ett femsiffrigt nummer",
            });
          }
        } else {
          // Remove error message if it exists
          if (errorIndex !== -1) {
            updatedErrorMessages.splice(errorIndex, 1);
          }
        }

        setErrorMessages(updatedErrorMessages);
        break;
      }
      default: {
        break;
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (errorMessages.length === 0) {
      onValidSubmit(true);
    }
  }

  console.table(errorMessages);
  return (
    <>
      <h2>Personuppgifter</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <div className="input-container">
              <label htmlFor="first-name-input">Förnamn*</label>
              <input
                id="first-name-input"
                type="text"
                placeholder="Förnamn*"
                onChange={(e) => {
                  handleCustomerInput(e, "firstName");
                }}
              ></input>
              <span style={{ fontSize: "12px", color: "#ffc8a3" }}>
                {errorMessages.find((e) => e.name === "firstName")
                  ?.errorMessage || ""}
              </span>
            </div>
          </div>
          <div className="column">
            <div className="input-container">
              <label htmlFor="lastname-input">Efternamn*</label>
              <input
                id="lastname-input"
                type="text"
                placeholder="Efternamn*"
                onChange={(e) => {
                  handleCustomerInput(e, "lastName");
                }}
              ></input>
              <span style={{ fontSize: "12px", color: "#ffc8a3" }}>
                {errorMessages.find((e) => e.name === "lastName")
                  ?.errorMessage || ""}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="input-container">
              <label htmlFor="lastname-input">
                Adress (gatunamn och husnummer)*
              </label>
              <input
                id="address-input"
                type="text"
                placeholder="Adress (gatunamn och husnummer)*"
                onChange={(e) => {
                  handleCustomerInput(e, "address");
                }}
              ></input>
              <span style={{ fontSize: "12px", color: "#ffc8a3" }}>
                {errorMessages.find((e) => e.name === "address")
                  ?.errorMessage || ""}
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="input-container">
              <label htmlFor="city-input">Ort*</label>
              <input
                id="city-input"
                type="text"
                placeholder="Ort*"
                onChange={(e) => {
                  handleCustomerInput(e, "city");
                }}
              ></input>
              <span style={{ fontSize: "12px", color: "#ffc8a3" }}>
                {errorMessages.find((e) => e.name === "city")?.errorMessage ||
                  ""}
              </span>
            </div>
          </div>
          <div className="column">
            <div className="input-container">
              <label htmlFor="postalcode-input">Postnummer (ex: 23412)*</label>
              <input
                id="postalcode-input"
                type="text"
                placeholder="Postnummer (ex: 23412)*"
                onChange={(e) => {
                  handleCustomerInput(e, "postalCode");
                }}
              ></input>
              <span style={{ fontSize: "12px", color: "#ffc8a3" }}>
                {errorMessages.find((e) => e.name === "postalCode")
                  ?.errorMessage || ""}
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
    </>
  );
}

export default PersonalInfoForm;
