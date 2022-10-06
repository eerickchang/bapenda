import React from "react";
import { Gap, SidebarAdmin } from "../../../KabanComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
import { CTinjauRenaksi } from "../../../KabanComponent/CTinjauRenaksi";
export default function TinjauRenaksi() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CTinjauRenaksi/>
    </div>
  );
}
