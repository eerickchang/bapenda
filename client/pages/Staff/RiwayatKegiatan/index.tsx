import React from "react";
import { Gap, SidebarStaff } from "../../../components";
import styles from "./riwayatkegiatan.module.css";
import sidebarStyles from "../../../components/SidebarStaff/sidebar.module.css";
import { ContentRiwayatKegiatan } from "../../../components/ContentRiwayatKegiatan";

import TableMUI from "../../../components/TableMUI";

export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={140} height={0}/>
      <TableMUI/>
    </div>
  );
}
