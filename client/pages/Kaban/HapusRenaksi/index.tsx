import React from "react";
import { CHapusRenaksi, Gap, SidebarAdmin } from "../../../KabanComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
export default function TinjauRenaksi() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakHapusRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CHapusRenaksi />
    </div>
  );
}
