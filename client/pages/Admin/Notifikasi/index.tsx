import React from "react";
import { Gap, SidebarAdmin } from "../../../AdminComponent";
import styles from "./notifikasi.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
import ContentNotifikasi from "../../../AdminComponent/ContentNotifikasi";
export default function Notifikasi() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakNotif={sidebarStyles.kotakAktif} />
      <Gap width={180} height={0} />
      <ContentNotifikasi />
    </div>
  );
}
