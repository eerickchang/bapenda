import React from "react";
import {
  CRiwayatKegiatanAdm,
  Gap,
  SidebarAdmin,
} from "../../../KabanComponent";
import styles from "./riwayatKegiatan.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CRiwayatKegiatanAdm />
    </div>
  );
}
