import React from "react";
import { Gap, SidebarAdmin } from "../../../KabanComponent";
import styles from "./evaluasiLampiran.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
import { CEvaluasiSubagSubid } from "../../../KabanComponent/CEvaluasiSubagSubid";
export default function EvaluasiLampiran() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakEvaluasiLampiran={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CEvaluasiSubagSubid/>
    </div>
  );
}
