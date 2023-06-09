import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function usePayment() {
  const [isValidPersonalInfoForm, setIsValidPersonalInfoForm] = useState(false);
  const [isValidPaymentForm, setIsValidPaymentForm] = useState(false);
  const [isAllFormsValid, setIsAllFormsValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isValidPersonalInfoForm && isValidPaymentForm) {
      setIsAllFormsValid(true);
    } else {
      setIsAllFormsValid(false);
    }
  }, [isValidPersonalInfoForm, isValidPaymentForm]);

  useEffect(() => {
    if (isAllFormsValid) {
      navigate("/confirmation", { state: { propKey: isAllFormsValid } });
    }
  }, [isAllFormsValid, navigate]);

  function handleValidSubmitPersonalInfoForm() {
    setIsValidPersonalInfoForm(true);
  }

  function handleValidSubmitPaymentForm() {
    setIsValidPaymentForm(true);
  }

  return {
    isValidPersonalInfoForm,
    handleValidSubmitPersonalInfoForm,
    handleValidSubmitPaymentForm,
  };
}
