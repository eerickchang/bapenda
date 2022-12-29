import { Gap, SidebarStaff } from "../../../componentsTHL";
import sidebarStyles from "../../../componentsTHL/SidebarStaff/sidebar.module.css";
import styles from "./riwayatkegiatan.module.css";

import { ContentRiwayatKegiatan } from "../../../componentsTHL/ContentRiwayatKegiatan";

export default function RiwayatKegiatan() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakRiwayatKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={180} height={0} />
      <ContentRiwayatKegiatan />
      {/* <TableMUI /> */}
    </div>
  );
}
