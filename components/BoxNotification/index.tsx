import React from "react";
import styles from "./boxnotification.module.css";
import Image from "next/image";

export default function BoxNotification() {
  return (
    <div className={styles.container}>
      <div className={styles.notifHeader}>
        <p className={styles.txtHeader}>Notifikasi</p>
        <Image
          src="/NotifBiru.svg"
          width={30}
          height={30}
          alt="Notifikasi Biru"
        />
      </div>
      <div className={styles.isiNotif}>
        <Image src="/NotifBiru.svg" width={25} height={25} alt="Notif Biru" />
        <div>
          <p className={styles.txtBold}>Diterima</p>
          <p className={styles.txtNormal}>
            Renaksi tahun 2023 telah di-approve
          </p>
        </div>
      </div>
    </div>
  );
}
