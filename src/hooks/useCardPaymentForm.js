import { useState } from "react";

export function useCardPaymentForm(onValidSubmit) {
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

  return {
    errorMessages,
    handlePaymentInput,
    handleSubmit,
  };
}
