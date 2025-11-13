import React from "react";

const Items = ({ item, onDeleteditem, onTogglePacked }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          onTogglePacked(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}-{item.description}
        <button
          onClick={() => {
            onDeleteditem(item.id);
          }}
        >
          ❌
        </button>
      </span>
    </li>
  );
};

export default Items;
