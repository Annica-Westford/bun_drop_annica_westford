import { useState } from "react";

export function usePersonalInfoForm(onValidSubmit) {
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

  return {
    errorMessages,
    handleCustomerInput,
    handleSubmit,
  };
}
