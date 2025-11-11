import React, { useState } from "react";

const AddForm = ({ items }) => {
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") return;
    const item = { quantity, description, packed: false, id: Date.now() };
    console.log(item);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your ❤️ trip? </h3>

      <select
        name="type"
        id="type"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item name"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default AddForm;
