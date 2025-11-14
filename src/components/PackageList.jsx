import React, { useState } from "react";
import Items from "./Items";

const PackageList = ({ items, onDeleteditem, onTogglePacked }) => {
  const [sortBy, setSortBy] = useState("input");

  let copyItems;

  if (sortBy === "input") {
    copyItems = items;
  }
  if (sortBy === "description") {
    copyItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    copyItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  return (
    <div className="list">
      <ul>
        {copyItems.map((i) => (
          <Items
            item={i}
            key={i.id}
            onDeleteditem={onDeleteditem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed items </option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
};

export default PackageList;
