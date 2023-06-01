import React from "react";

function MenuItem({ item, mealprice }) {
  return (
    <div className="menu-item-parent-container">
      <div style={{ flex: "1", textAlign: "start" }}>
        <h3 style={{ marginBottom: "0px" }} className="lightest-color">
          {item.name}
        </h3>
        <p style={{ marginTop: "0px" }} className="lightest-color">
          {item.description}
        </p>
      </div>
      <div>
        {mealprice ? (
          <p
            style={{ marginBottom: "0px", marginTop: "5px" }}
            className="lightest-color"
          >
            Singel {item.price} kr/ Meal {mealprice} kr
          </p>
        ) : (
          <p
            style={{ marginBottom: "0px", marginTop: "5px" }}
            className="lightest-color"
          >
            {item.price} kr
          </p>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
