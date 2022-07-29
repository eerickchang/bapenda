import React from "react";
import { Sidebar } from "../../components";
import styles from "./profil.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";

export default function Profil() {
  return (
    <div className={styles.container}>
      <Sidebar kotakProfil={sidebarStyles.kotakAktif} />
    </div>
  );
}
