import React from "react";
import {Gap, Sidebar } from "../../../componentSekretaris";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../componentSekretaris/Sidebar/sidebar.module.css";
import CTinjauRenaksiSubidangFeedback from "../../../componentSekretaris/CTinjauRenaksiSubidang/feedback";
export default function TinjauRenaksiSubidang() {
  return (
    <div className={styles.container}>
      <Sidebar kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CTinjauRenaksiSubidangFeedback/>
    </div>
  );
}
