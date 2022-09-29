import React from 'react'
import { CUbahJadwal, Gap, SidebarAdmin } from "../../../AdminComponent";
import styles from "./ubahJadwal.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
export default function UbahJadwal() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakUbahJadwal={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CUbahJadwal />
    </div>
  );
}
