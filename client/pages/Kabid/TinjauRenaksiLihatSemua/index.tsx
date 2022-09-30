import React from "react";
import { CLihatSemuaRenaksi, Gap, Sidebar } from "../../../KabidComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";
export default function TinjauRenaksiLihatSemua() {
  return (
    <div className={styles.container}>
      <Sidebar kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CLihatSemuaRenaksi />
    </div>
  );
}
