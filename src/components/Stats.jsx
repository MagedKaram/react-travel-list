import React from "react";

const Stats = ({ items }) => {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding some items to your list</em>
      </footer>
    );

  const numberItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const presentage = Math.round((packedItems / numberItems) * 100);

  return (
    <footer className="stats">
      {presentage === 100 ? (
        <em>You are already to go✈️ bye bye</em>
      ) : (
        <em>
          💼 You have {numberItems} items on your list, and you already packed{" "}
          {packedItems} ({presentage}%)`
        </em>
      )}
    </footer>
  );
};

export default Stats;
