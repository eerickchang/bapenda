import React from "react";
import {Gap, Sidebar } from "../../../KabidComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../KabidComponent/Sidebar/sidebar.module.css";
import CTinjauRenaksiSubidangFeedback from "../../../KabidComponent/CTinjauRenaksiSubidang/feedback";
export default function TinjauRenaksiSubidang() {
  return (
    <div className={styles.container}>
      <Sidebar kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CTinjauRenaksiSubidangFeedback/>
    </div>
  );
}
