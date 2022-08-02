import React from "react";
import { ContentDaftarKegiatan, Sidebar } from "../../components";
import styles from "./daftarkegiatan.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";

export default function DaftarKegiatan() {
  return (
    <div className={styles.container}>
      <Sidebar kotakDaftarKegiatan={sidebarStyles.kotakAktif} />
      <ContentDaftarKegiatan/>
    </div>
  );
}
