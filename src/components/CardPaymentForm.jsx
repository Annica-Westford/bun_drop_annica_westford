import React, { useState } from "react";

function CardPaymentForm({ onValidSubmit }) {
  const [paymentInfo, setPaymentInfo] = useState({});
  const [errorMessages, setErrorMessages] = useState([
    {
      name: "cardNumber",
      errorMessage: "Kortnumret får endast innehålla siffror",
    },
    {
      name: "expirationDate",
      errorMessage: "Utgångsdatumet måste matcha formatet: YYMM",
    },
    {
      name: "cvc",
      errorMessage: "CVC måste vara ett tre- eller fyrsiffrigt nummer",
    },
  ]);

  function handlePaymentInput(e, propertyName) {
    setPaymentInfo({ ...paymentInfo, [propertyName]: e.target.value });
    validateInput(e.target.value, propertyName);
  }

  function validateInput(input, propertyName) {
    const updatedErrorMessages = [...errorMessages];
    const errorIndex = updatedErrorMessages.findIndex(
      (e) => e.name === propertyName
    );

    switch (propertyName) {
      case "cardNumber": {
        if (input.trim().length === 0 || !/^\d*$/.test(input.trim())) {
          // Add error message if it doesn't exist
          if (errorIndex === -1) {
            updatedErrorMessages.push({
              name: propertyName,
              errorMessage: "Kortnumret får endast innehålla siffror",
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

      case "expirationDate": {
        if (
          input.trim().length === 0 ||
          !/^(\d{2})(0[1-9]|1[0-2])$/.test(input.trim())
        ) {
          // Add error message if it doesn't exist
          if (errorIndex === -1) {
            updatedErrorMessages.push({
              name: propertyName,
              errorMessage: "Utgångsdatumet måste matcha formatet: YYMM",
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
      case "cvc": {
        if (
          input.trim().length === 0 ||
          !/^\d{3}$|^\d{4}$/.test(input.trim())
        ) {
          // Add error message if it doesn't exist
          if (errorIndex === -1) {
            updatedErrorMessages.push({
              name: propertyName,
              errorMessage: "CVC måste vara ett tre- eller fyrsiffrigt nummer",
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
