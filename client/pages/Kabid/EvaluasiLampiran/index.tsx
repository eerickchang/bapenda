import React from "react";
import { CEvaluasiLampiran, Gap, Sidebar } from "../../../KabidComponent";
import styles from "./evaluasiLampiran.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";
export default function EvaluasiLampiran() {
  return (
    <div className={styles.container}>
      <Sidebar kotakEvaluasiLampiran={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CEvaluasiLampiran />
    </div>
  );
}
