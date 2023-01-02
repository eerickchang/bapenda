import React from "react";
import { Gap, Sidebar } from "../../../componentSekretaris";
import styles from "./riwayatKegiatan.module.css";
import sidebarStyles from "../../../componentSekretaris/Sidebar/sidebar.module.css";
import ContentRiwayatKegiatanSubid from "../../../componentSekretaris/ContentRiwayatKegiatanSubid";
export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <Sidebar kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={180} height={0} />
      <ContentRiwayatKegiatanSubid/>
    </div>
  );
}
