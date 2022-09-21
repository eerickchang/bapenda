import React from "react";
import { SidebarStaff } from "../../../components";
import styles from "./logout.module.css";
import sidebarStyles from "../../../components/SidebarStaff/sidebar.module.css";

export default function Notifikasi() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakLogOut={sidebarStyles.kotakAktifLogOut} />
    </div>
  );
}
