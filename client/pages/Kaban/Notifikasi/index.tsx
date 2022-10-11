import React from "react";
import { Gap, SidebarAdmin } from "../../../KabanComponent";
import styles from "./notifikasi.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
import ContentNotifikasi from "../../../KabanComponent/ContentNotifikasi";
export default function Notifikasi() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakNotif={sidebarStyles.kotakAktif} />
      <Gap width={195} height={0} />
      <ContentNotifikasi/>
    </div>
  );
}
