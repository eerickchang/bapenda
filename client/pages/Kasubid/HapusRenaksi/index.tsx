import React from "react";
import {Gap, Sidebar } from "../../../KasubidComponent";
import styles from "./hapusRenaksi.module.css";
import sidebarStyles from "../../../KasubidComponent/Sidebar/sidebar.module.css";
import { CHapusRenaksi } from "../../../KasubidComponent/CHapusRenaksi";
export default function HapusRenaksi() {
  return (
    <div className={styles.container}>
      <Sidebar kotakHapusRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CHapusRenaksi/>
    </div>
  );
}
