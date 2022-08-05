import React from "react";
import { ContentDaftarKegiatan, Gap, Sidebar } from "../../components";
import styles from "./daftarkegiatan.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";

export default function DaftarKegiatan() {
  return (
    <div className={styles.container}>
      <Sidebar kotakDaftarKegiatan={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <ContentDaftarKegiatan />
    </div>
  );
}
