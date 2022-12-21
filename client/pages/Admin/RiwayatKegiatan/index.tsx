import React from "react";
import {
  CRiwayatKegiatanAdm,
  Gap,
  SidebarAdmin,
} from "../../../AdminComponent";
import styles from "./riwayatKegiatan.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={175} height={0} />
      <CRiwayatKegiatanAdm />
    </div>
  );
}
