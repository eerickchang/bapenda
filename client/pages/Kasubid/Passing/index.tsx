import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Passing() {
  useEffect(() => {
    console.log("Passing");
  }, []);

  return (
    <div>
      <h1>PASSING</h1>
    </div>
  );
}
