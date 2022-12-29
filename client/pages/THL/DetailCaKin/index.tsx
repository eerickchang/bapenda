import React from "react";
import { ContentDetailCaKin, Gap, SidebarStaff } from "../../../componentsTHL";
import styles from "./detailCaKin.module.css";
import sidebarStyles from "../../../componentsTHL/SidebarStaff/sidebar.module.css";

export default function DetailCaKin() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakProfil={sidebarStyles.kotakAktif} />
      <Gap height={0} width={140} />
      <ContentDetailCaKin />
    </div>
  );
}
