import React, { useState, useEffect } from "react";

export default function Coba() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    setItems([...items, text]);
  };

  const handleClick2 = () => {
    console.log(items);
  };
  return (
    <div>
      Coba
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>Ganti Isi Text</button>
      <button onClick={handleClick2}>Tampilkan Isi Text</button>
      <p>okeasdasdasdasdasdasdasdasdasdasdasdadasdasdasdasdasdasdasasa</p>;
      <ul>
        {items.map((data) => (
          <li>{data}</li>
        ))}
      </ul>
    </div>
  );
}
