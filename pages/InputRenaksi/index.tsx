import React from "react";
import { ContentInputRenaksiP, Gap, Sidebar } from "../../components";
import styles from "./InputRenaksi.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";

export default function InputRenaksi() {
  return (
    <div className={styles.container}>
      <Sidebar kotakInput={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141}/>
      <ContentInputRenaksiP />
    </div>
  );
}
