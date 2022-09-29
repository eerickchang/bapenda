import React from 'react'
import { CTinjauRenaksi, Gap, SidebarAdmin } from "../../../AdminComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
export default function TinjauRenaksi() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CTinjauRenaksi />
    </div>
  );
}
