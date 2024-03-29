import React from "react";
import { CTinjauRenaksi, Gap, Sidebar } from "../../../componentSekretaris";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../componentSekretaris/Sidebar/sidebar.module.css";

export default function TinjauRenaksi() {
  return (
    <div className={styles.container}>
      <Sidebar kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CTinjauRenaksi />
    </div>
  );
}
