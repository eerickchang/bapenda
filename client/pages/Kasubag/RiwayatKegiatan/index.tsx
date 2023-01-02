import React from "react";
import { Gap, Sidebar } from "../../../KasubagComponent";
import styles from "./riwayatKegiatan.module.css";
import sidebarStyles from "../../../KasubagComponent/Sidebar/sidebar.module.css";
import { ContentRiwayatKegiatan } from "../../../KasubagComponent/ContentRiwayatKegiatan";
export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <Sidebar kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={180} height={80} />
      <ContentRiwayatKegiatan/>
    </div>
  );
}
