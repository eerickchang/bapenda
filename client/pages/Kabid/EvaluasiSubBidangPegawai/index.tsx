import React from "react";
import { Gap, Sidebar } from "../../../KabidComponent";
import styles from "./evaluasiLampiran.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";
import { CEvaluasiSubBidangPegawai } from "../../../KabidComponent/CEvaluasiSubBidangPegawai";
export default function EvaluasiSubBidangPegawai() {
  return (
    <div className={styles.container}>
      <Sidebar kotakEvaluasiLampiran={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CEvaluasiSubBidangPegawai />
    </div>
  );
}
