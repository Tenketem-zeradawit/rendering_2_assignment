
import React, { useState } from "react";
import ItemList from "./ItemList";
import AddItemForm from "./AddItemForm";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAdd = (item) => {
    setItems([...items, item]);
  };

  const handleDelete = (itemToDelete) => {
    setItems(items.filter((item) => item !== itemToDelete));
  };
  
  return (
    <div>
      <h1>Item List</h1>
      <AddItemForm handleAdd={handleAdd} />
      <ItemList items={items} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
