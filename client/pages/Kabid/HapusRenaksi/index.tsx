import React from "react";
import { CHapusRenaksi, Gap, Sidebar } from "../../../KabidComponent";
import styles from "./ubahJadwalRenaksi.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";
export default function HapusRenaksi() {
  return (
    <div className={styles.container}>
      <Sidebar kotakHapusRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CHapusRenaksi/>
    </div>
  );
}
