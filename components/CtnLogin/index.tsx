import React from "react";
import styles from "./ctnlogin.module.css";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";
import Gap from "../Gap";
import TxtInput from "../TxtInput";
import { useRouter } from "next/router";

export default function CtnLogin() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/LupaSandi");
  };

  const btnDaftar = () => {
    router.push("/Daftar");
  };

  const btnMasuk = () => {
    router.push("/Dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p className={styles.txtNormal}>Daftar</p>
        <p className={styles.txtStyled}>Masuk</p>
        <p className={styles.txtNormal}>Sandi</p>
      </div>
      <div className={styles.txtInput}>
        <TxtInput type="number" />
        <Gap height={40} width={0} />
        <TxtInput
          image="/Password.svg"
          title="Kata Sandi"
          placeholder="Masukkan Kata Sandi"
          type="password"
        />
        <Gap height={106} width={0} />
        <p className={styles.txtLupa} onClick={handleClick}>
          Lupa kata sandi ?
        </p>
        <Gap height={45} width={0} />
        <Button
          className={`${btnStyles.container}`}
          title="Masuk"
          onClick={btnMasuk}
        />
        <Gap height={20} width={0} />
        <Button
          className={`${btnStyles.container} ${btnStyles.btnDaftar}`}
          title="Daftar"
          onClick={btnDaftar}
        />
      </div>
    </div>
  );
}
