import React from "react";
import styles from "./txtumum.module.css";
import Image from "next/image";

export default function TxtUmum() {
  return (
    <div className={styles.container}>
      <h1>Selamat Datang di Sistem Kepatuhan </h1>
      <p>
        Melihat capaian kegiatanmu apakah telah sesuai dengan <b>RENAKSI</b>
      </p>
      <Image src="/LogoBesar.svg" width={637} height={198} alt="LogoBesar" />
    </div>
  );
}
