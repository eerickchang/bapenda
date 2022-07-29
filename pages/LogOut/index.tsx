import React from "react";
import { Sidebar } from "../../components";
import styles from "./logout.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";

export default function Notifikasi() {
  return (
    <div className={styles.container}>
      <Sidebar kotakLogOut={sidebarStyles.kotakAktif} />
    </div>
  );
}
