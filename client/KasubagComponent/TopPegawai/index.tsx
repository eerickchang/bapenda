import React, { useState, useEffect, useRef } from "react";
import styles from "./toppegawai.module.css";
import Image from "next/image";
import Gap from "../Gap";
import Axios from "axios";
import moment from "moment";

Axios.defaults.withCredentials = true;

interface TopPegawaiProps {
  bulan: string;
  title: string;
}

export default function TopPegawai(props: TopPegawaiProps) {
  const { bulan, title } = props;
  const [topPegawai, setTopPegawai] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/topPegawai", {
          params: {
            bulan: moment().subtract(1, "month").format("YYYY-MM-01"),
            subid: masuk.data.user[0].sub_bidang,
          },
        }).then((ambilPegawai) => {
          ambilPegawai.data.map((pegawai) => {
            // console.log(pegawai);
            setTopPegawai((nextData) => {
              return [...nextData, pegawai];
            });
          });
        });
      });
    }
  });

  const [dataPegawai, setDataPegawai] = useState([
    {
      id: 1,
      image: <Image src="/User1.svg" width={65} height={65} />,
      nama: "George Olaf",
      subBidang: "Pengembangan Teknologi",
    },
    {
      id: 2,
      image: <Image src="/User2.svg" width={65} height={65} />,
      nama: "Erick Chang",
      subBidang: "Pengembangan Teknologi",
    },
    {
      id: 3,
      image: <Image src="/User3.svg" width={65} height={65} />,
      nama: "Andre Waani",
      subBidang: "Pengembangan Teknologi",
    },
    {
      id: 4,
      image: <Image src="/User4.svg" width={65} height={65} />,
      nama: "Ryan Mamitoho",
      subBidang: "Pengembangan Teknologi",
    },
    {
      id: 5,
      image: <Image src="/User5.svg" width={65} height={65} />,
      nama: "Ferren Kalalo",
      subBidang: "Pengembangan Teknologi",
    },
  ]);

  return (
    <div className={styles.container}>
      <h1 className={styles.txtHeader}>
        {title}, {bulan}
      </h1>
      <Gap height={20} width={0} />
      {topPegawai.map((item) => (
        <div className={styles.profile} key={item.nip}>
          {item.foto != "" ? (
            <Image
              src={item.foto}
              width={65}
              height={65}
              style={{ borderRadius: 65 }}
            />
          ) : (
            <Image src="/User4.svg" width={65} height={65} />
          )}

          <div className={styles.txtWrapper}>
            <p className={styles.txtNama}>{item.nama}</p>
            <p className={styles.txtSubid}>{item.sub_bidang}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
