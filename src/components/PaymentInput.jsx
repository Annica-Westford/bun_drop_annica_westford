import React from "react";
import Input from "./Input";
function PaymentInput({
  paymentMethod,
  cardNumber,
  expirationDate,
  cvc,
  phoneNumber,
  onPaymentMethodChange,
  onCardNumberChange,
  onExpirationDateChange,
  onCvcChange,
  onPhoneNumberChange,
}) {
  return (
    <div>
      <div>
        <input
          type="radio"
          id="card"
          name="paymentMethod"
          value="card"
          onChange={onPaymentMethodChange}
        />
        <label htmlFor="card">Kort</label>
        <input
          type="radio"
          id="swish"
          name="paymentMethod"
          value="swish"
          onChange={onPaymentMethodChange}
        />
        <label htmlFor="swish">Swish</label>
      </div>
      {paymentMethod === "card" && (
        <div>
          <div>
            <Input
              id="cardnumber-input"
              label="Kortnummer"
              type="number"
              value={cardNumber || ""}
              onChange={onCardNumberChange}
            />
          </div>
          <div>
            <Input
              id="expirationdate-input"
              label="Utgångsdatum (YYMM)"
              type="number"
              value={expirationDate || ""}
              onChange={onExpirationDateChange}
            />
            <Input
              id="cvc-input"
              label="CVC"
              type="number"
              value={cvc || ""}
              onChange={onCvcChange}
            />
          </div>
        </div>
      )}
      {paymentMethod === "swish" && (
        <div>
          <Input
            id="phonenumber-input"
            label="Mobilnummer"
            type="number"
            value={phoneNumber || ""}
            onChange={onPhoneNumberChange}
          />
        </div>
      )}
    </div>
  );
}

export default PaymentInput;
