import React from "react";
import Button from "../Button";
import Gap from "../Gap";
import TxtInput from "../TxtInput";
import styles from "./ctnSandiSukses.module.css";
import btnStyles from "../Button/button.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CtnSandiSukses() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p className={styles.txtNormal}>Daftar</p>
        <p className={styles.txtNormal}>Masuk</p>
        {/* <p className={styles.txtStyled}>Sandi</p> */}
      </div>
      <Image src="/Successmark.svg" width={220} height={220} />
      <p className={styles.txtSukses}>Sukses Mengatur Ulang Kata Sandi</p>
      <Button
        className={`${btnStyles.container} ${btnStyles.btnSandi}`}
        title="Kembali Masuk"
        onClick={handleClick}
      />
    </div>
  );
}
