import React from "react";
import {Gap, SidebarAdmin } from "../../../AdminComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
import { CHapusRenaksi } from "../../../AdminComponent/CHapusRenaksi";
import { CHapusRenaksiSubagSubid } from "../../../AdminComponent/CHapusRenaksiSubagSubid";
export default function TinjauRenaksi() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakHapusRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CHapusRenaksiSubagSubid/>
    </div>
  );
}
