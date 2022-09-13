import React from "react";
import { ContentDaftarKegiatan, Gap, SidebarStaff } from "../../../components";
import styles from "./daftarkegiatan.module.css";
import sidebarStyles from "../../../components/SidebarStaff/sidebar.module.css";
import TableMUI from "../../../components/TableMUI";

export default function DaftarKegiatan() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakDaftarKegiatan={sidebarStyles.kotakAktif} />
      <Gap height={0} width={140} />
      {/* <ContentDaftarKegiatan /> */}
      <TableMUI/>
    </div>
  );
}
