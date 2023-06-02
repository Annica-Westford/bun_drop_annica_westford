import React from "react";
import MenuListItem from "./MenuListItem";

function MenuList({ title, items }) {
  return (
    <>
      <h2>{title}</h2>
      {items?.map((i) => (
        <MenuListItem key={i.id} item={i} />
      ))}
    </>
  );
}

export default MenuList;
