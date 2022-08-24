import React, { useState, useEffect } from "react";
import {
  BoxNotification,
  DashboardHeader,
  Gap,
  Sidebar,
  TopPegawai,
} from "../../components";
import styles from "./dashboard.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";
import Axios from "axios";

export default function Dashboard() {
  useEffect(() => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      console.log(response.data.user[0]);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar kotakHome={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <div className={styles.contentKiri}>
        <DashboardHeader />
      </div>
      <div className={styles.contentKanan}>
        <TopPegawai />
        <BoxNotification />
      </div>
    </div>
  );
}
