import React from "react";
import { ContentInputRenaksiP, Sidebar } from "../../components";
import styles from "./InputRenaksi.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";

export default function InputRenaksi() {
  return (
    <div className={styles.container}>
      <Sidebar kotakInput={sidebarStyles.kotakAktif} />
      <ContentInputRenaksiP />
    </div>
  );
}
