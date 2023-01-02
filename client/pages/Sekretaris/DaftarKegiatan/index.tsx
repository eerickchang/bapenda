import React from "react";
import { ContentDaftarKegiatan, Gap, Sidebar } from "../../../componentSekretaris";
import styles from "./daftarKegiatan.module.css";
import sidebarStyles from "../../../componentSekretaris/Sidebar/sidebar.module.css";

export default function DaftarKegiatan() {
  return (
    <div className={styles.container}>
      <Sidebar kotakDaftarKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={120} height={0} />
      <ContentDaftarKegiatan/>
    </div>
  );
}
