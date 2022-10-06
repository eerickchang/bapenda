import React from "react";
import {Gap, SidebarAdmin } from "../../../AdminComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
import { CHapusRenaksi } from "../../../AdminComponent/CHapusRenaksi";
export default function TinjauRenaksi() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakHapusRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CHapusRenaksi/>
    </div>
  );
}
