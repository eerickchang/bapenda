import React from "react";
import { Gap, Sidebar, SidebarAdmin } from "../../../AdminComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
import CLihatSemuaRenaksi from "../../../AdminComponent/CLihatSemuaRenaksi";
export default function TinjauRenaksiLihatSemua() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakTinjauRenaksi={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80} />
      <CLihatSemuaRenaksi/>
    </div>
  );
}
