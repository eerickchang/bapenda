import React, { useState, useEffect } from "react";
import styles from "./dashboardheader.module.css";
import Image from "next/future/image";

interface DashboardHeaderProps {
  blnSkrg: string;
  jumlahKegiatan: string;
  lampiranDisubmit: string;
  belumDisubmit: string;
}

export default function DashboardHeader(props: DashboardHeaderProps) {
  const { blnSkrg, jumlahKegiatan, lampiranDisubmit, belumDisubmit } = props;
  // let [blnSkrg, setBlnSkrg] = useState();
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/cakin").then((response) => {
  //     Axios.get("http://localhost:3001/pegawai");
  //   });
  //   // setBlnSkrg(moment().format("MMMM"));
  // }, []);

  // const [cakin, setCakin] = useState();
  return (
    <div className={styles.container}>
      <h1 className={styles.head1}>{blnSkrg}</h1>
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
            <p className={styles.txtBold}>{jumlahKegiatan}</p>
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
            <p className={styles.txtBold}>{lampiranDisubmit}</p>
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
            <p className={styles.txtBold}>{belumDisubmit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
