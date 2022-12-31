import React from "react";
import { Gap, Sidebar } from "../../../KasubidComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../KasubidComponent/Sidebar/sidebar.module.css";
import CTinjauRenaksiPegawaiFeedback from "../../../KasubidComponent/CTinjauRenaksiPegawai/feedback";

export default function TinjauRenaksiPegawaiFeedback() {
  return (
    <div className={styles.container}>
      <Sidebar kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CTinjauRenaksiPegawaiFeedback/>
    </div>
  );
}
