import React from "react";
import {
  Gap,
  SidebarAdmin,
} from "../../../KabanComponent";
import styles from "./riwayatKegiatan.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
import { CRiwayatKegiatanSubid } from "../../../KabanComponent/CRiwayatKegiatanSubid";
export default function RiwayatKegiatanSubid() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CRiwayatKegiatanSubid/>
    </div>
  );
}
