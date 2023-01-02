import React from "react";
import { Gap, Sidebar } from "../../../KabidComponent";
import styles from "./daftarKegiatan.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";
import ContentDaftarKegiatanSubid from "../../../KabidComponent/ContentDaftarKegiatanSubid";

export default function DaftarKegiatan() {
  return (
    <div className={styles.container}>
      <Sidebar kotakDaftarKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={120} height={0} />
      <ContentDaftarKegiatanSubid />
    </div>
  );
}
