import React from "react";
import styles from "./dashboardheader.module.css";
import Image from "next/image";

export default function DashboardHeader() {
  return (
    <div className={styles.container}>
      <h1 className={styles.head1}>Agustus</h1>
      <div className={styles.iconWrapper}>
        <div className={styles.jumlahKegiatan}>
          <Image
            src="/JumlahKegiatan.svg"
            width={80}
            height={80}
            alt="Jumlah Kegiatan"
          />
          <div className={styles.txtWrapper}>
            <p className={styles.txtNormal}>Jumlah Kegiatan</p>
            <p className={styles.txtBold}>12 Kegiatan</p>
          </div>
        </div>

        <div className={styles.jumlahKegiatan}>
          <Image
            src="/LampiranDisubmit.svg"
            width={80}
            height={80}
            alt="LampiranDisubmit"
          />
          <div className={styles.txtWrapper}>
            <p className={styles.txtNormal}>Lampiran Disubmit</p>
            <p className={styles.txtBold}>8 Kegiatan</p>
          </div>
        </div>

        <div className={styles.jumlahKegiatan}>
          <Image
            src="/BelumDisubmit.svg"
            width={80}
            height={80}
            alt="BelumDisubmit"
          />
          <div className={styles.txtWrapper}>
            <p className={styles.txtNormal}>Belum Disubmit</p>
            <p className={styles.txtBold}>4 Kegiatan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
