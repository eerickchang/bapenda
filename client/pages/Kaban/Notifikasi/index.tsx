import React from "react";
import { CNotifAdm, Gap, SidebarAdmin } from "../../../KabanComponent";
import styles from "./notifikasi.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
export default function Notifikasi() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakNotif={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CNotifAdm />
    </div>
  );
}
