import React from "react";
import { SidebarStaff } from "../../../components";
import styles from "./riwayatkegiatan.module.css";
import sidebarStyles from "../../../components/SidebarStaff/sidebar.module.css";

export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
    </div>
  );
}
