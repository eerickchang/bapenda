import Image from 'next/future/image';
import React from 'react'
import styles from './notifAdm.module.css'

export default function CNotifAdm() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleInputRenaksi}>
        <Image src={"/IconNotif.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>Notifikasi</p>
      </div>
    </div>
  );
}
