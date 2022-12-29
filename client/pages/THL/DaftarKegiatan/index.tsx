import React from "react";
import { ContentDaftarKegiatan, Gap, SidebarStaff } from "../../../componentsTHL";
import styles from "./daftarkegiatan.module.css";
import sidebarStyles from "../../../componentsTHL/SidebarStaff/sidebar.module.css";
import TableMUI from "../../../components/TableMUI";

export default function DaftarKegiatan() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakDaftarKegiatan={sidebarStyles.kotakAktif} />
      {/* <Gap height={0} width={100} /> */}
      <ContentDaftarKegiatan />
      {/* <TableMUI/> */}
    </div>
  );
}
