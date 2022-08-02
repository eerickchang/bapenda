import React from "react";
import { ProfileKanan, Sidebar } from "../../components";
import styles from "./profil.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";
import Image from "next/image";

export default function Profil() {
  return (
    <div className={styles.container}>
      <Sidebar kotakProfil={sidebarStyles.kotakAktif} />
      <div className={styles.contentKiri}>
        <div className={styles.header}>
          <div>
            <Image src="/Capaian.svg" width={50} height={50} alt="Capaian" />
          </div>
          <p className={styles.txtHeader}>CAPAIAN KINERJA TAHUN 2022</p>
        </div>
        <div className={styles.content}></div>
      </div>
      <div className={styles.contentKanan}>
        <ProfileKanan />
      </div>
    </div>
  );
}
