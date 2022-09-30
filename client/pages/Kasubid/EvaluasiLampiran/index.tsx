import React from "react";
import { CEvaluasiLampiran, Gap, Sidebar } from "../../../KasubidComponent";
import styles from "./evaluasiLampiran.module.css";
import sidebarStyles from "../../../KasubidComponent/Sidebar/sidebar.module.css";
export default function EvaluasiLampiran() {
  return (
    <div className={styles.container}>
      <Sidebar kotakUbahJadwal={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CEvaluasiLampiran />
    </div>
  );
}
