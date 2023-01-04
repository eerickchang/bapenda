import React, { useState } from "react";
import styles from "./boxnotification.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function BoxNotification() {
  const [notif, setNotif] = useState([
    {
      id: 1,
      title: "Diterima",
      message: "Renaksi tahun 2023 telah diterima",
      image: (
        <Image src="/NotifBiru.svg" width={25} height={25} alt="Notif Biru" />
      ),
      classTitle: styles.txtTitleDiterima,
    },
    {
      id: 2,
      title: "Ditolak",
      message: "Permintaan penjadwalan ulang ditolak",
      image: (
        <Image src="/NotifMerah.svg" width={25} height={25} alt="Notif Merah" />
      ),
      classTitle: `${styles.txtTitleDiterima} ${styles.txtTitleDitolak} `,
    },
  ]);

  const router = useRouter();
  const handleClickNotif = () => {
    router.push("/Notifikasi");
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.notifHeader} onClick={handleClickNotif}>
        <p className={styles.txtHeader}>Notifikasi</p>
        <Image
          src="/NotifBiru.svg"
          width={30}
          height={30}
          alt="Notifikasi Biru"
        />
      </div>
      {notif.map((item) => (
        <div className={styles.isiNotif} key={item.id}>
          <div className={styles.image}>{item.image}</div>
          <div>
            <p className={item.classTitle}>{item.title}</p>
            <p className={styles.txtMessage}>{item.message}</p>
          </div>
        </div>
      ))} */}
    </div>
  );
}
