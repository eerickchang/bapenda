import React from "react";
import { Gap, Sidebar } from "../../../KabidComponent";
import styles from "./ubahJadwalRenaksi.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";
import { CHapusRenaksiSubidPegawai } from "../../../KabidComponent/CHapusRenaksiSubidPegawai";
export default function HapusRenaksiSubidPegawai() {
  return (
    <div className={styles.container}>
      <Sidebar kotakHapusRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CHapusRenaksiSubidPegawai />
    </div>
  );
}
