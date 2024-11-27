
import React from "react";
import Item from "./Item";

const ItemList = ({ items, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item item={item} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ItemList;
