import React from "react";
import { ContentDetailCaKin, Gap, SidebarStaff } from "../../../components";
import styles from "./detailCaKin.module.css";
import sidebarStyles from "../../../components/SidebarStaff/sidebar.module.css";

export default function DetailCaKin() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakProfil={sidebarStyles.kotakAktif} />
      <Gap height={0} width={140} />
      <ContentDetailCaKin />
    </div>
  );
}
