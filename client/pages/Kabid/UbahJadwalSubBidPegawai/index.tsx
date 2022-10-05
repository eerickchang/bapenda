import React from "react";
import { CUbahJadwalRenaksi, Gap, Sidebar } from "../../../KabidComponent";
import styles from "./ubahJadwalRenaksi.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";
import { CUbahJadwalSubBidPegawai } from "../../../KabidComponent/CUbahJadwalSubBidPegawai";
export default function UbahJadwalSubBidPegawai() {
  return (
    <div className={styles.container}>
      <Sidebar kotakUbahJadwal={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CUbahJadwalSubBidPegawai/>
    </div>
  );
}
