import React from "react";
import { Gap, SidebarStaff } from "../../../components";
import styles from "./riwayatkegiatan.module.css";
import sidebarStyles from "../../../components/SidebarStaff/sidebar.module.css";

import TableMUI from "../../../components/TableMUI";
import { ContentRiwayatKegiatan } from "../../../components/ContentRiwayatKegiatan";

export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={180} height={0} />
      <ContentRiwayatKegiatan/>
      {/* <TableMUI /> */}
    </div>
  );
}
