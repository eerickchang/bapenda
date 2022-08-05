import React from "react";
import { ContentNotifikasi, Gap, Sidebar } from "../../components";
import styles from "./notifikasi.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";

export default function Notifikasi() {
  return (
    <div className={styles.container}>
      <Sidebar kotakNotif={sidebarStyles.kotakAktif} />
      <Gap width={195} height={0}/>
      <ContentNotifikasi/>
    </div>
  );
}
