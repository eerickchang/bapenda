import React from "react";
import {Gap, Sidebar } from "../../../KasubagComponent";
import styles from "./hapusRenaksi.module.css";
import sidebarStyles from "../../../KasubagComponent/Sidebar/sidebar.module.css";
import { CHapusRenaksi } from "../../../KasubagComponent/CHapusRenaksi";
export default function HapusRenaksi() {
  return (
    <div className={styles.container}>
      <Sidebar kotakHapusRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CHapusRenaksi/>
    </div>
  );
}
