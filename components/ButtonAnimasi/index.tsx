import React from "react";
import styles from "./buttonAnimasi.module.css";
import Image from "next/image";

export default function ButtonAnimasi() {
  return (
    <button className={styles.button}>
      <span className={styles.title}>submit</span>
      <Image
        className={styles.icon}
        src={"/IconNamaP.svg"}
        width={35}
        height={35}
      />
    </button>
  );
}
