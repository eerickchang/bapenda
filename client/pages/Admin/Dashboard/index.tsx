import React, { useState, useEffect } from "react";
import Axios from "axios";
import { SidebarAdmin } from "../../../components";
import sidebarStyles from "../../../components/SidebarAdmin/sidebar.module.css";
import styles from './dashboard.module.css'
Axios.defaults.withCredentials = true;

export default function Dashboard() {
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/masuk").then((response) => {
  //     console.log(response.data.user[0].nama);
  //     setNama(response.data.user[0].nama);
  //   });
  // });

  // const [nama, setNama] = useState("");

  return (
    <div className={styles.container}>
      <SidebarAdmin kotakHome={sidebarStyles.kotakAktif} />
    </div>
  );
}
