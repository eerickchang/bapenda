import React from "react";
import Button from "../Button";
import Gap from "../Gap";
import TxtInput from "../TxtInput";
import styles from "./ctnLupaSandi.module.css";
import btnStyles from "../Button/button.module.css";

export default function CtnLupaSandi() {
  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p>Daftar</p>
        <p>Masuk</p>
        <p>Sandi</p>
      </div>
      <Gap height={55} width={0} />
      <TxtInput image="/IconNamaP.svg" alt="iconNamaP" />
      <Gap height={40} width={20} />
      <TxtInput
        image="/IconPhone.svg"
        alt="iconPhone"
        title="No. Hp"
        placeholder="Masukkan No. HP"
      />
      <Button
        className={`${btnStyles.container} ${btnStyles.btnSandi}`}
        title="Kirim Kode"
      />
    </div>
  );
}
