import React from "react";
import { Gap, SidebarAdmin } from "../../../KabanComponent";
import styles from "./ubahJadwal.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
import { CUbahJadwal } from "../../../KabanComponent/CUbahJadwal";
export default function UbahJadwal() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakUbahJadwal={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CUbahJadwal />
    </div>
  );
}
