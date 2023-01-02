import React from "react";
import { Gap, Sidebar } from "../../../componentSekretaris";
import styles from "./evaluasiLampiran.module.css";
import sidebarStyles from "../../../componentSekretaris/Sidebar/sidebar.module.css";
import { CEvaluasiSubBidangPegawai } from "../../../componentSekretaris/CEvaluasiSubBidangPegawai";
export default function EvaluasiSubBidangPegawai() {
  return (
    <div className={styles.container}>
      <Sidebar kotakEvaluasiLampiran={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CEvaluasiSubBidangPegawai />
    </div>
  );
}
