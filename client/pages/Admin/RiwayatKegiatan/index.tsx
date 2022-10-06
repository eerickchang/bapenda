import React from "react";
import {
  CRiwayatKegiatanAdm,
  Gap,
  SidebarAdmin,
} from "../../../AdminComponent";
import styles from "./riwayatKegiatan.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
export default function TinjauRenaksi() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CRiwayatKegiatanAdm />
    </div>
  );
}
