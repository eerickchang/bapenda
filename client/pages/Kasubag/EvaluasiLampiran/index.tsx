import React from "react";
import {Gap, Sidebar } from "../../../KasubagComponent";
import styles from "./evaluasiLampiran.module.css";
import sidebarStyles from "../../../KasubagComponent/Sidebar/sidebar.module.css";
import { CEvaluasiLampiran } from "../../../KasubagComponent/CEvaluasiLampiran";
export default function EvaluasiLampiran() {
  return (
    <div className={styles.container}>
      <Sidebar kotakEvaluasiLampiran={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CEvaluasiLampiran/>
    </div>
  );
}
