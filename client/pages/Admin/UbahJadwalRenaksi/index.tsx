import React from "react";
import { Gap, SidebarAdmin } from "../../../AdminComponent";
import styles from "./ubahJadwal.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
import { CUbahJadwalRenaksi } from "../../../AdminComponent/CUbahJadwalRenaksi";
export default function UbahJadwalRenaksi() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakUbahJadwal={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CUbahJadwalRenaksi />
    </div>
  );
}
