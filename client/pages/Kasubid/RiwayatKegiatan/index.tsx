import React from "react";
import { Gap, Sidebar } from "../../../KasubidComponent";
import styles from "./riwayatKegiatan.module.css";
import sidebarStyles from "../../../KasubidComponent/Sidebar/sidebar.module.css";
import { ContentRiwayatKegiatan } from "../../../KasubidComponent/ContentRiwayatKegiatan";
export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <Sidebar kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={180} height={80} />
      <ContentRiwayatKegiatan/>
    </div>
  );
}
