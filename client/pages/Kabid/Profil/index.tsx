import React from "react";
import { CProfilAdm, Gap, Sidebar } from "../../../KabidComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";

export default function Profil() {
  return (
    <div className={styles.container}>
      <Sidebar kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={7} height={0} />
      <CProfilAdm />
    </div>
  );
}
