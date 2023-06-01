import React from "react";
import { useItems } from "../hooks/useItems";
import OrderMenuList from "../components/OrderMenuList";

function Order() {
  const { burgers, sides, drinks, meals } = useItems();

  return (
    <div className="flex-container-whole-page">
      <div className="page-container">
        <div className="order-parent-container">
          <div className="order-menu-container grid-item-border">
            <h1 style={{ paddingBottom: "20px" }}>BESTÄLL</h1>
            <OrderMenuList title="Meals" items={meals} />
            <OrderMenuList title="Burgare" items={burgers} />
            <OrderMenuList title="Sides" items={sides} />
            <OrderMenuList title="Dryck" items={drinks} />
          </div>
          <div className="my-order-container">
            <h2 style={{ paddingBottom: "20px" }}>Min Beställning</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
