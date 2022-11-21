import React from "react";
import { CCakinBidang, Gap, SidebarAdmin } from "../../../KabanComponent";
import styles from "./profil.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
export default function Profil() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakProfil={sidebarStyles.kotakAktif} />
      <Gap width={40} height={80} />
      <CCakinBidang/>
    </div>
  );
}
