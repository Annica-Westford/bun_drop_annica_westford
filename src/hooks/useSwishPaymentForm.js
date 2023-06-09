import { useState } from "react";

export function useSwishPaymentForm(onValidSubmit) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(
    "Mobilnummer är obligatoriskt får bara innehålla siffror"
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

  return {
    phoneNumberError,
    handlePhoneNumberChange,
    handleSubmit,
  };
}
