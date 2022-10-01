import React from "react";
import { ContentDaftarKegiatan, Gap, Sidebar } from "../../../KasubidComponent";
import styles from "./daftarKegiatan.module.css";
import sidebarStyles from "../../../KasubidComponent/Sidebar/sidebar.module.css";

export default function DaftarKegiatan() {
  return (
    <div className={styles.container}>
      <Sidebar kotakDaftarKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <ContentDaftarKegiatan/>
    </div>
  );
}
