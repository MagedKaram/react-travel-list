import { lazy, useEffect, useState } from "react";
import AddForm from "./components/AddForm";
import PackageList from "./components/PackageList";
import Stats from "./components/Stats";
import Items from "./components/Items";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Bags", quantity: 18, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const hundelAddItems = (item) => {
    console.log(item);
    setItems((items) => [...items, item]);
  };

  const hundelDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const hundlePacked = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const hundleClearList = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <h1>🏝️ far away🛍️</h1>
      <AddForm onAddItem={hundelAddItems} />
      <PackageList
        items={items}
        onDeleteditem={hundelDelete}
        onTogglePacked={hundlePacked}
        onClearList={hundleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
