import React from "react";
import Items from "./Items";

const PackageList = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((i) => (
          <Items item={i} key={i.id} />
        ))}
      </ul>
      <div>
        <select name="sort" id="sort">
          <option value="description">Sorted</option>
          <option value="quantity">Quantity</option>
          <option value="packed">Packed</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
};

export default PackageList;
