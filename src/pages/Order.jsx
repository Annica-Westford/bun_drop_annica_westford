import React from "react";
import { useItems } from "../hooks/useItems";
import OrderMenuList from "../components/OrderMenuList";
import OrderSummary from "../components/OrderSummary";

function Order() {
  const { burgers, sides, drinks, meals } = useItems();

  return (
    <div className="flex-container-whole-page">
      <div className="page-container">
        <div className="order-parent-container">
          <div>
            <h1 style={{ paddingBottom: "20px" }}>BESTÄLL</h1>
            <div
              className="order-menu-container-list-scroll"
              style={{ height: "500px" }}
            >
              <OrderMenuList title="Meals" items={meals} burgers={burgers} />
              <OrderMenuList title="Burgare" items={burgers} />
              <OrderMenuList title="Sides" items={sides} />
              <OrderMenuList title="Dryck" items={drinks} />
            </div>
          </div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Order;
