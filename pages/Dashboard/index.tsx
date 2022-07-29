import React from "react";
import {
  BoxNotification,
  DashboardHeader,
  Sidebar,
  TopPegawai,
} from "../../components";
import styles from "./dashboard.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Sidebar kotakHome={sidebarStyles.kotakAktif} />
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
