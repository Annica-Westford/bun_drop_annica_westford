import React from "react";
function Input({ id, label, type, value, errorMessage, onChange }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={label}
        onChange={onChange}
      ></input>
      <span style={{ fontSize: "12px", color: "#ffc8a3" }}>{errorMessage}</span>
    </div>
  );
}

export default Input;
