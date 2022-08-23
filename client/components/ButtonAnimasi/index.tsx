import React from "react";
import styles from "./buttonAnimasi.module.css";
import Image from "next/image";

export default function ButtonAnimasi() {
  return (
    // <div className={styles.container}>
      <button className={styles.button}>
        <span className={styles.title}>submit</span>
        <Image
          className={styles.icon}
          src={"/Home.svg"}
          width={35}
          height={35}
        />
      </button>
    // </div>
  );
}
