import React from "react";
function ProductMenuDisplay({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductMenuDisplay;
