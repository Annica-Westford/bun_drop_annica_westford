import React from "react";

function MenuItem({ product, mealprice }) {
  return (
    <div className="menu-item-parent-container">
      <div style={{ flex: "1", textAlign: "start" }}>
        <h3 style={{ marginBottom: "0px" }} className="lightest-color">
          {product.name}
        </h3>
        <p style={{ marginTop: "0px" }} className="lightest-color">
          {product.description}
        </p>
      </div>
      <div>
        {mealprice ? (
          <p style={{ marginBottom: "0px" }} className="lightest-color">
            Singel {product.price} kr/ Meal {mealprice} kr
          </p>
        ) : (
          <p style={{ marginBottom: "0px" }} className="lightest-color">
            {product.price} kr
          </p>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
