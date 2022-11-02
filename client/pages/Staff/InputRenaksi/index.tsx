import React, { useState, useEffect } from "react";
import { ContentInputRenaksiP, Gap, SidebarStaff } from "../../../components";
import styles from "./InputRenaksi.module.css";
import sidebarStyles from "../../../components/SidebarStaff/sidebar.module.css";
import Axios from "axios";

export default function InputRenaksi() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakInput={sidebarStyles.kotakAktif} />
      <Gap height={0} width={140} />
      <ContentInputRenaksiP />
    </div>
  );
}
