import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CobaPromise2() {
  useEffect(() => {
    async function getStoreData() {
      const response = await axios.get("http://localhost:3001/pegawai");
      console.log(response);
    }

    getStoreData();
  });

  return <div>CobaPromise2</div>;
}
