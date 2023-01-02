import React from "react";
import { CUbahJadwalRenaksi, Gap, Sidebar } from "../../../componentSekretaris";
import styles from "./ubahJadwalRenaksi.module.css";
import sidebarStyles from "../../../componentSekretaris/Sidebar/sidebar.module.css";
import { CUbahJadwalSubBidPegawai } from "../../../componentSekretaris/CUbahJadwalSubBidPegawai";
export default function UbahJadwalSubBidPegawai() {
  return (
    <div className={styles.container}>
      <Sidebar kotakUbahJadwal={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CUbahJadwalSubBidPegawai/>
    </div>
  );
}
