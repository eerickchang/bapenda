import React from "react";
import { CLihatSemuaRenaksi,  Gap, Sidebar } from "../../../KasubidComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../KasubidComponent/Sidebar/sidebar.module.css";
export default function TinjauRenaksiLihatRenaksi() {
  return (
    <div className={styles.container}>
      <Sidebar kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CLihatSemuaRenaksi/>
    </div>
  );
}
