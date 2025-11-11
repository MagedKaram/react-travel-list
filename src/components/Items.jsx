import React from "react";

const Items = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}-{item.description}
        <button>❌</button>
      </span>
    </li>
  );
};

export default Items;
