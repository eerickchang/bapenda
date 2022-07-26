import React from "react";
import { CProfilAdm, Gap, SidebarAdmin } from "../../../KabanComponent";
import styles from "./profil.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
export default function Profil() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakProfil={sidebarStyles.kotakAktif} />
      <Gap width={100} height={80} />
      <CProfilAdm />
    </div>
  );
}
