import React from "react";
import Button from "../Button";
import Gap from "../Gap";
import TxtInput from "../TxtInput";
import styles from "./ctnLupaSandi.module.css";
import btnStyles from "../Button/button.module.css";
import {useRouter} from 'next/router';

export default function CtnLupaSandi() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/LupaSandiOTP");
  };
  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p className={styles.txtNormal}>Daftar</p>
        <p className={styles.txtNormal}>Masuk</p>
        <p className={styles.txtStyled}>Sandi</p>
      </div>
      {/* <Gap height={55} width={0} /> */}
      <TxtInput image="/IconNamaP.svg" alt="iconNamaP" width={25} height={30} />
      <Gap height={40} width={20} />
      <TxtInput
        image="/IconPhone.svg"
        alt="iconPhone"
        title="No. Hp"
        placeholder="Masukkan No. HP"
        width={32}
        height={32}
      />
      <Button
        className={`${btnStyles.container} ${btnStyles.btnSandi}`}
        title="Kirim Kode"
        onClick={handleClick}
      />
    </div>
  );
}
