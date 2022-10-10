import React from "react";
import {Gap, Sidebar } from "../../../KabidComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";
import CCaKinSubidang from "../../../KabidComponent/CCakinSubidang";

export default function CakinSubidang() {
  return (
    <div className={styles.container}>
      <Sidebar kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CCaKinSubidang/>
    </div>
  );
}
