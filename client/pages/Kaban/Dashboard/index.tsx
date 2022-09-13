import React, { useState, useEffect } from "react";
import Axios from "axios";

Axios.defaults.withCredentials = true;

export default function Dashboard() {
  useEffect(() => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      console.log(response.data.user[0].nama);
      setNama(response.data.user[0].nama);
    });
  });

  const [nama, setNama] = useState("");

  return <div>Dashboard Kaban {nama} </div>;
}
