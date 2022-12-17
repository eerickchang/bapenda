import React from "react";
import { Gap, Sidebar } from "../../../KabidComponent";
import styles from "./riwayatKegiatan.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";
import { ContentRiwayatKegiatan } from "../../../KabidComponent/ContentRiwayatKegiatan";
export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <Sidebar kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <ContentRiwayatKegiatan/>
    </div>
  );
}
