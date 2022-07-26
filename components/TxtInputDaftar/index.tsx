import React from "react";
import styles from "./txtinputdaftar.module.css";
import Image from "next/image";
import Gap from "../Gap";

export default function TxtInputDaftar({
  image = "/namaPenggunaUmum.svg",
  title = "Nama Pengguna",
  placeholder = "Masukkan Nama",
  width = 20,
  height = 25,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.iconText}>
        <Gap height={0} width={19} />
        <Image src={image} width={width} height={height} />
        <Gap height={0} width={25} />
        <p>{title}</p>
      </div>
      <input placeholder={placeholder}></input>
    </div>
  );
}
