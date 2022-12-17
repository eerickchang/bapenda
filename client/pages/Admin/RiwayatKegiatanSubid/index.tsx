import React from "react";
import {
  Gap,
  SidebarAdmin,
} from "../../../AdminComponent";
import styles from "./riwayatKegiatan.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
import { CRiwayatKegiatanSubid } from "../../../AdminComponent/CRiwayatKegiatanSubid";
export default function RiwayatKegiatanSubid() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CRiwayatKegiatanSubid/>
    </div>
  );
}
