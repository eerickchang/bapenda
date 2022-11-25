import React, { useState, useEffect } from "react";

export default function cobaPromise() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  function function1() {
    return new Promise((resolve, reject) => {
      resolve("ke 1");
    });
  }

  function function2() {
    return new Promise((resolve, reject) => {
      resolve("ke 2");
    });
  }

  async function cobaAsync() {
    try {
      let result = await Promise.all([function2(), function1()]);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  cobaAsync();

  return <div>Oke</div>;
}
