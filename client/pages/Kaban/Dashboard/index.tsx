import React, { useState, useEffect } from "react";
import Axios from "axios";
import moment from "moment";

Axios.defaults.withCredentials = true;

export default function Dashboard() {
  const [dateMoment, setDateMoment] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      console.log(response.data.user[0].nama);
      setNama(response.data.user[0].nama);
    });

    var dateMoment = moment().format("ddd MMMM YYYY");
    setDateMoment(dateMoment);
  });

  const [nama, setNama] = useState("");

  return <div>Dashboard Kaban {`${dateMoment}`}</div>;
}
