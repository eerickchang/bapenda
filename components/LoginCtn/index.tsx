import React from "react";
import Gap from "../Gap";
import TxtInputLogin from "../TxtInputLogin";
import styles from "./loginctn.module.css";

export default function LoginCtn() {
  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p>Daftar</p>
        <p>Masuk</p>
        <p>Sandi</p>
      </div>
      <Gap height={77} width={0} />
      <div className={styles.txtInput}>
        <TxtInputLogin />
        <Gap height={40} width={0} />
        <TxtInputLogin
          image="/Password.svg"
          title="Kata Sandi"
          placeholder="Masukkan Kata Sandi"
        />
        <Gap height={66} width={0} />
        <p>Lupa kata sandi ?</p>
      </div>
    </div>
  );
}
