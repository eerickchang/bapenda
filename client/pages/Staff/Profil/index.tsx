import React from "react";
import { Gap, ProfileKanan, SidebarStaff } from "../../../components";
import styles from "./profil.module.css";
import sidebarStyles from "../../../components/SidebarStaff/sidebar.module.css";
import Image from "next/image";

export default function Profil() {
  return (
    <div className={styles.container}>
      <SidebarStaff kotakProfil={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
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
