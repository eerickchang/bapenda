import React from "react";
import { ContentNotifikasi, Gap, Sidebar } from "../../../KabidComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";

export default function Profil() {
  return (
    <div className={styles.container}>
      <Sidebar kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={195} height={0} />
      <ContentNotifikasi/>
    </div>
  );
}
