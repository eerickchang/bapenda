import React, { useState } from "react";
import styles from "./toppegawai.module.css";
import Image from "next/image";
import Gap from "../Gap";

export default function TopPegawai() {
  const [dataPegawai, setDataPegawai] = useState([
    {
      id: 1,
      image: <Image src="/User1.svg" width={65} height={65} />,
      nama: "George Olaf",
      subBidang: "Pajak Daerah",
    },
    {
      id: 2,
      image: <Image src="/User2.svg" width={65} height={65} />,
      nama: "Erick Chang",
      subBidang: "Pajak Daerah",
    },
    {
      id: 3,
      image: <Image src="/User3.svg" width={65} height={65} />,
      nama: "Andre Waani",
      subBidang: "Retribusi dan lain-lain Pendapatan",
    },
    {
      id: 4,
      image: <Image src="/User4.svg" width={65} height={65} />,
      nama: "Ryan Mamitoho",
      subBidang: "Retribusi dan lain-lain Pendapatan",
    },
    {
      id: 5,
      image: <Image src="/User5.svg" width={65} height={65} />,
      nama: "Ferren Kalalo",
      subBidang: "Perencanaan & Pengembangan",
    },
  ]);

  return (
    <div className={styles.container}>
      <h1 className={styles.txtHeader}>Top Pegawai per Bidang, Juli 2022</h1>
      <Gap height={20} width={0} />
      {dataPegawai.map((item) => (
        <div className={styles.profile} key={item.id}>
          {item.image}
          <div className={styles.txtWrapper}>
            <p className={styles.txtBold}>{item.nama}</p>
            <p className={styles.txtNormal}>{item.subBidang}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
