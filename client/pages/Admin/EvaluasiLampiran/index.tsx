import React from 'react'
import {
  CEvaluasiLampiran,
  CTinjauRenaksi,
  Gap,
  SidebarAdmin,
} from "../../../AdminComponent";
import styles from "./evaluasiLampiran.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
export default function EvaluasiLampiran() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakEvaluasiLampiran={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CEvaluasiLampiran />
    </div>
  );
}
