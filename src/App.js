import { useState } from "react";
import AddForm from "./components/AddForm";
import PackageList from "./components/PackageList";
import Stats from "./components/Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Bags", quantity: 18, packed: false },
];

function App() {
  const [itemsNumber, setItemsNumber] = useState(3);
  return (
    <div className="app">
      <h1>🏝️ far away🛍️</h1>
      <AddForm items={initialItems} />
      <PackageList items={initialItems} />
      <Stats />
    </div>
  );
}

export default App;
