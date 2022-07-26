import React from "react";
import styles from "./txtinputlogin.module.css";
import Image from "next/image";
import Gap from "../Gap";

export default function TxtInput({
  image = "/Nip.svg",
  alt = "Nip",
  title = "NIP / NPNP",
  placeholder = "Masukkan NIP / NPNP",
}) {
  return (
    <div className={styles.container}>
      <div className={styles.logoTxt}>
        <Gap width={63} height={0} />
        <Image
          src={image}
          width={25}
          height={30}
          alt={alt}
          className={styles.image}
        />
        <Gap height={0} width={10} />
        <p>{title}</p>
      </div>
      <Gap height={20} width={0} />
      <input placeholder={placeholder} />
    </div>
  );
}
