import React from "react";
import { Gap, Sidebar } from "../../../KasubagComponent";
import styles from "./ubahJadwalRenaksi.module.css";
import sidebarStyles from "../../../KasubagComponent/Sidebar/sidebar.module.css";
import { CUbahJadwalRenaksi } from "../../../KasubagComponent/CUbahJadwalRenaksi";
export default function UbahJadwalRenaksi() {
  return (
    <div className={styles.container}>
      <Sidebar kotakUbahJadwal={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CUbahJadwalRenaksi/>
    </div>
  );
}
