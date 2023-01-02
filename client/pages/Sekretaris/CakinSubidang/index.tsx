import React from "react";
import {Gap, Sidebar } from "../../../componentSekretaris";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../componentSekretaris/Sidebar/sidebar.module.css";
import CCaKinSubidang from "../../../componentSekretaris/CCakinSubidang";

export default function CakinSubidang() {
  return (
    <div className={styles.container}>
      <Sidebar kotakProfil={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CCaKinSubidang/>
    </div>
  );
}
