import { Link } from "react-router-dom";
import MyOrderItem from "./MyOrderItem";

function MyOrder({ cartItems, totalPrice, localStorageUpdated, parentSource }) {
  const hasItemsInCart = cartItems && cartItems.length > 0;

  return (
    <div className="my-order-container">
      <h2 style={{ paddingBottom: "20px", paddingTop: "50px" }}>
        Min Beställning
      </h2>
      <div
        className="order-menu-container-list-scroll"
        style={{ height: "400px" }}
      >
        {hasItemsInCart ? (
          cartItems?.map((c, index) => (
            <MyOrderItem
              key={index}
              item={c}
              localStorageUpdated={() => {
                localStorageUpdated();
              }}
              parentSource={parentSource}
            />
          ))
        ) : (
          <p>Varukorgen är tom!</p>
        )}
      </div>
      {hasItemsInCart && (
        <div className="total-price-container">
          <p style={{ fontSize: "18px" }}>Total: {totalPrice} kr</p>
        </div>
      )}
      {parentSource.toLowerCase() === "order" ? (
        <Link to="/payment">
          <button>Gå till kassan</button>
        </Link>
      ) : (
        <Link to="/order">
          <button>Ändra beställning</button>
        </Link>
      )}
    </div>
  );
}

export default MyOrder;
