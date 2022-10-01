import React, { useState } from "react";

export default function UpdateState() {
  const [cart, setCart] = useState(["Erick", "Jessica"]);
  const [isi, setIsi] = useState("");

  const btnTambah = () => {
    setCart([...cart, isi]);
  };
  return (
    <div>
      <input type="text" onChange={(e) => setIsi(e.target.value)} value={isi} />
      <button onClick={btnTambah}>Tambah</button>
      <button onClick={() => console.log(cart)}>Console</button>
      <div>{cart}</div>
    </div>
  );
}
