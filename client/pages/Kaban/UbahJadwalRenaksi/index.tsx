import React from "react";
import { Gap, SidebarAdmin } from "../../../KabanComponent";
import styles from "./ubahJadwal.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
import { CUbahJadwalRenaksi } from "../../../KabanComponent/CUbahJadwalRenaksi";
export default function UbahJadwalRenaksi() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakUbahJadwal={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CUbahJadwalRenaksi />
    </div>
  );
}
