
import React, { useState } from "react";

const AddItemForm = ({ handleAdd }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      handleAdd(newItem);
      setNewItem("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter an item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItemForm;
