import { usePersonalInfoForm } from "../hooks/usePersonalInfoForm";

function PersonalInfoForm({ onValidSubmit }) {
  const { errorMessages, handleCustomerInput, handleSubmit } =
    usePersonalInfoForm(onValidSubmit);

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
