import React, { ReactNode, useState } from "react";
import Gap from "../Gap";
import styles from "./ctnumum.module.css";

interface CtnUmumProps {
  children: ReactNode;
}

export default function CtnUmum(props: CtnUmumProps) {
  const [txtMasuk, setTxtMasuk] = useState(styles.txtNormal);
  const [txtDaftar, setTxtDaftar] = useState(styles.txtNormal);
  const [txtSandi, setTxtSandi] = useState(styles.txtNormal);
  const { children } = props;
  const [isToogleMasuk, setIsToogleMasuk] = useState(true);
  const [isToogleDaftar, setIsToogleDaftar] = useState(true);
  const [isToogleSandi, setIsToogleSandi] = useState(true);

  const handleClickMasuk = () => {
    {
      setIsToogleMasuk(!isToogleMasuk);
      isToogleMasuk
        ? setTxtMasuk(styles.txtMasukStyled)
        : setTxtMasuk(styles.txtNormal);
      console.log(isToogleMasuk);
    }
  };

  const handleClickDaftar = () => {
    {
      setIsToogleDaftar(!isToogleDaftar);
      isToogleDaftar
        ? setTxtDaftar(styles.txtDaftarStyled)
        : setTxtDaftar(styles.txtNormal);
      console.log(isToogleDaftar);
    }
  };

  const handleClickSandi = () => {
    {
      setIsToogleSandi(!isToogleSandi);
      isToogleSandi
        ? setTxtSandi(styles.txtSandiStyled)
        : setTxtSandi(styles.txtNormal);
      console.log(isToogleSandi);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p className={txtDaftar} onClick={handleClickDaftar}>
          Daftar
        </p>
        <p className={txtMasuk} onClick={handleClickMasuk}>
          Masuk
        </p>
        <p className={txtSandi} onClick={handleClickSandi}>
          Sandi
        </p>
      </div>
      <Gap height={55} width={0} />
      <div> {children} </div>
    </div>
  );
}
