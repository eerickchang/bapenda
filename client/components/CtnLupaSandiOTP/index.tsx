import React from "react";
import Button from "../Button";
import Gap from "../Gap";
import TxtInput from "../TxtInput";
import styles from "./ctnLupaSandiOTP.module.css";
import btnStyles from "../Button/button.module.css";
import { useRouter } from "next/router";

export default function CtnLupaSandiOTP() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/Umum/SandiBaru");
  };
  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p className={styles.txtNormal}>Daftar</p>
        <p className={styles.txtNormal}>Masuk</p>
        {/* <p className={styles.txtStyled}>Sandi</p> */}
      </div>
      <p className={styles.txtVerif}>Verifikasi OTP</p>
      <Gap height={38} width={0} />
      <TxtInput
        title="Masukkan Kode OTP"
        image="/iconKey.svg"
        placeholder="Masukkan kode OTP dari SMS yang diterima"
        width={30}
        height={30}
        type="number"
      />
      <Button
        title="Verifikasi"
        className={`${btnStyles.container} ${btnStyles.btnSandi}`}
        onClick={handleClick}
      />
    </div>
  );
}
