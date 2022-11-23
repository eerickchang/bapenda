import React, { useState, useEffect } from "react";

export default function cobaPromise() {
  const [arr, setArr] = useState([]);
  // const coba = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve("selesai");
  //   }, 2000);
  // });
  // coba.then(() => console.log(coba));
  function tesPromise() {
    return new Promise((resolve, reject) => {
      resolve("oke");
    });
  }

  // const coba = tesPromise();
  // coba.then(() => console.log(coba)).catch(() => console.log(coba));

  async function cobaAsync() {
    try {
      const coba = await tesPromise();
      console.log(coba);
    } catch (err) {
      console.log(err);
    }
  }

  cobaAsync();

  return <div>Oke</div>;
}
