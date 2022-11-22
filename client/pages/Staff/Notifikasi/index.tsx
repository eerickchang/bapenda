import React from "react";
import { ContentNotifikasi, Gap, SidebarStaff } from "../../../components";
import styles from "./notifikasi.module.css";
import sidebarStyles from "../../../components/SidebarStaff/sidebar.module.css";

export default function Notifikasi() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakNotif={sidebarStyles.kotakAktif} />
      <Gap width={180} height={0} />
      <ContentNotifikasi />
    </div>
  );
}
