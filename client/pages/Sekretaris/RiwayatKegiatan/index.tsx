import React from "react";
import { Gap, Sidebar } from "../../../componentSekretaris";
import styles from "./riwayatKegiatan.module.css";
import sidebarStyles from "../../../componentSekretaris/Sidebar/sidebar.module.css";
import { ContentRiwayatKegiatan } from "../../../componentSekretaris/ContentRiwayatKegiatan";
export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <Sidebar kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={180} height={0} />
      <ContentRiwayatKegiatan/>
    </div>
  );
}
