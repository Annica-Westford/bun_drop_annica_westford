import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import burger1 from "../images/burgers/burger1.png";
import burger2 from "../images/burgers/burger2.png";
import burger3 from "../images/burgers/burger3.png";
import burger4 from "../images/burgers/burger4.png";
import burger5 from "../images/burgers/burger5.png";
import burger6 from "../images/burgers/burger6.png";
import burger7 from "../images/burgers/burger7.png";
import burger8 from "../images/burgers/burger8.png";
import burger9 from "../images/burgers/burger9.png";
import side1 from "../images/sides/side1.png";
import side2 from "../images/sides/side2.png";
import drink1 from "../images/drinks/drink1.png";
import drink2 from "../images/drinks/drink2.png";
import drink3 from "../images/drinks/drink3.png";
import drink4 from "../images/drinks/drink4.png";
import drink5 from "../images/drinks/drink5.png";

function OrderMenuListItem({ item, burger }) {
  return (
    <div className="order-menu-list-item-container">
      <div className="flex-container">
        <img
          src={burger1}
          alt=""
          style={{
            width: "90px",
            borderRadius: "45px",
            marginTop: "5px",
            marginLeft: "5px",
          }}
        />
      </div>

      {/* {burger ? (
        <img src={burger.image} alt="item" />
      ) : (
        <img src={item.image} alt="item" />
      )} */}
      <div
        // className="flex-container"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          textAlign: "start",
          padding: "5px",
        }}
      >
        <h4>{item.name}</h4>
        {burger ? (
          <p style={{ fontSize: "14px" }}>{burger.description}</p>
        ) : (
          <p style={{ fontSize: "14px" }}>{item.description}</p>
        )}
        <p style={{ textAlign: "center" }}>{item.price} kr</p>
      </div>

      <div className="flex-container" style={{ paddingRight: "7px" }}>
        <FontAwesomeIcon icon={faCirclePlus} style={{ fontSize: "28px" }} />
      </div>
    </div>
  );
}

export default OrderMenuListItem;
