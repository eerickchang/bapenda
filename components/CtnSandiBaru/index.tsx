import React from 'react'
import Button from '../Button';
import Gap from '../Gap';
import TxtInput from '../TxtInput';
import styles from './ctnSandiBaru.module.css'
import btnStyles from "../Button/button.module.css";
import {useRouter} from 'next/router'

export default function CtnSandiBaru() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/SandiSukses");
  };
  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p className={styles.txtNormal}>Daftar</p>
        <p className={styles.txtNormal}>Masuk</p>
        <p className={styles.txtStyled}>Sandi</p>
      </div>
      <p className={styles.txtVerif}>Kata Sandi Baru</p>
      <Gap height={38} width={0} />
      {/* <Gap height={55} width={0} /> */}
      <TxtInput
        title="Kata Sandi Baru"
        image="/Password.svg"
        alt="iconNamaP"
        placeholder="Masukkan Kata Sandi Baru"
        width={25}
        height={30}
      />
      <Gap height={40} width={20} />
      <TxtInput
        image="/Key.svg"
        alt="iconPhone"
        title="Konfirmasi Kata Sandi"
        placeholder="Konfirmasi Kata Sandi"
        width={33}
        height={19}
      />
      <Button
        className={`${btnStyles.container} ${btnStyles.btnSandi}`}
        title="Atur Ulang"
        onClick={handleClick}
      />
    </div>
  );
}
