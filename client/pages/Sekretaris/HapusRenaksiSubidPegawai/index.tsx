import React from "react";
import { Gap, Sidebar } from "../../../componentSekretaris";
import styles from "./ubahJadwalRenaksi.module.css";
import sidebarStyles from "../../../componentSekretaris/Sidebar/sidebar.module.css";
import { CHapusRenaksiSubidPegawai } from "../../../componentSekretaris/CHapusRenaksiSubidPegawai";
export default function HapusRenaksiSubidPegawai() {
  return (
    <div className={styles.container}>
      <Sidebar kotakHapusRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CHapusRenaksiSubidPegawai />
    </div>
  );
}
