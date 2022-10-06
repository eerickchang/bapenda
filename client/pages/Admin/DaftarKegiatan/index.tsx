import React from "react";
import { CDaftarKegiatanAdm, Gap, SidebarAdmin } from "../../../AdminComponent";
import styles from "./daftarKegiatan.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";

export default function DaftarKegiatan() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakDaftarKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CDaftarKegiatanAdm />
    </div>
  );
}
