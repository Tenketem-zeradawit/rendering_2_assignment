

import React from "react";

const Item = ({ item, handleDelete }) => {
  return (
    <li>
      {item}{" "}
      <button onClick={() => handleDelete(item)}>Delete</button>
    </li>
  );
};

export default Item;
