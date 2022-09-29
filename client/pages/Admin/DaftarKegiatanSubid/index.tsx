import React from 'react'
import {
  CDaftarKegiatanSubid,
  Gap,
  SidebarAdmin,
} from "../../../AdminComponent";
import styles from './daftarKegiatanSubid.module.css';
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";

export default function DaftarKegiatanSubid() {
  return (
    <div className={styles.container}>
      <SidebarAdmin kotakDaftarKegiatan={sidebarStyles.kotakAktif} />
      <Gap width={140} height={80}/>
      <CDaftarKegiatanSubid/>
    </div>
  );
}
