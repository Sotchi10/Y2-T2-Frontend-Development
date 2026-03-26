import React from "react";

export default function StuffForm({onAdd}) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAdd(name, price);
    setName("");
    setPrice("");
  }

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input
        type="search"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input
        type="search"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}
