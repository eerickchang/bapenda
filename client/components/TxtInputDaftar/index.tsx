import React from "react";
import styles from "./txtinputdaftar.module.css";
import Image from "next/image";
import Gap from "../Gap";

interface TxtInputDaftarProps {
  image: string;
  title: string;
  placeholder: string;
  width: number;
  height: number;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TxtInputDaftar(props: TxtInputDaftarProps) {
  const {
    onChange,
    image = "/namaPenggunaUmum.svg",
    title = "Nama Pengguna",
    placeholder = "Masukkan Nama",
    width = 20,
    height = 25,
    type = "text",
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.iconText}>
        <Gap height={0} width={19} />
        <Image src={image} width={width} height={height} />
        <Gap height={0} width={25} />
        <p>{title}</p>
      </div>
      <input type={type} placeholder={placeholder} onChange={onChange}></input>
    </div>
  );
}
