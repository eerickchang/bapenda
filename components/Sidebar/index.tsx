import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Gap from "../Gap";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src="/SidebarProfile.svg" width={90} height={90} />
      </div>
      <div className={styles.contentAtas}>
        <div className={styles.hoverKotak}>
          <Image src="/Home.svg" width={40} height={40} />
          <div className={styles.hoverKeterangan}>Beranda</div>
        </div>
        <Gap height={20} width={0} />
        <div className={styles.hoverKotak}>
          <Image src="/Input.svg" width={40} height={40} />
          <div
            className={`${styles.hoverKeterangan} ${styles.hoverKeterangan2}`}
          >
            Input Kegiatan
          </div>
        </div>
      </div>
    </div>
  );
}
