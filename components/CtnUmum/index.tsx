import React, { ReactNode } from "react";
import Gap from "../Gap";
import TxtInputLogin from "../TxtInputLogin";
import styles from "./ctnumum.module.css";

interface CtnUmumProps {
  children: ReactNode;
}

export default function CtnUmum(props: CtnUmumProps) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p>Daftar</p>
        <p>Masuk</p>
        <p>Sandi</p>
      </div>
      <Gap height={77} width={0} />
      <div> {children} </div>
    </div>
  );
}

{
  /* <div className={styles.txtInput}>
        <TxtInputLogin />
        <Gap height={40} width={0} />
        <TxtInputLogin
          image="/Password.svg"
          title="Kata Sandi"
          placeholder="Masukkan Kata Sandi"
        />
        <Gap height={66} width={0} />
        <p>Lupa kata sandi ?</p>
      </div> */
}
