import React from "react";
import { Sidebar } from "../../components";
import styles from "./riwayatkegiatan.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";

export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <Sidebar kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
    </div>
  );
}
