import React, { ReactNode, useState, useEffect } from "react";
import Gap from "../Gap";
import TxtInputLogin from "../TxtInputLogin";
import styles from "./ctnumum.module.css";

interface CtnUmumProps {
  children: ReactNode;
}

export default function CtnUmum(props: CtnUmumProps) {
  const [txtMasuk, setTxtMasuk] = useState(styles.txtNormal);
  const [txtDaftar, setTxtDaftar] = useState(styles.txtNormal);
  const [txtSandi, setTxtSandi] = useState(styles.txtNormal);
  const { children } = props;
  const [isToogle, setIsToogle] = useState(false);

  const handleClickMasuk = () => {
    {
      setIsToogle(!isToogle);
      isToogle
        ? setTxtMasuk(styles.txtMasukStyled)
        : setTxtMasuk(styles.txtNormal);
      console.log(isToogle);
    }
  };

  const handleClickDaftar = () => {
    {
      setIsToogle(!isToogle);
      isToogle
        ? setTxtDaftar(styles.txtDaftarStyled)
        : setTxtDaftar(styles.txtNormal);
    }
  };

  const handleClickSandi = () => {
    {
      setIsToogle(!isToogle);
      isToogle
        ? setTxtSandi(styles.txtSandiStyled)
        : setTxtSandi(styles.txtNormal);
    }
  };

  // if (isToogle === true) {
  //   return (
  //     <div className={styles.container}>
  //       <div className={styles.headerTxt}>
  //         <p className={styles.txtNormal}>Daftar</p>
  //         <p className={txt} onClick={() => setIsToogle(!isToogle)}>
  //           Masuk
  //         </p>
  //         <p className={styles.txtNormal}>Sandi</p>
  //       </div>
  //       <Gap height={77} width={0} />
  //       <div> {children} </div>
  //     </div>
  //   );
  // } else {
  //   return <div>False</div>;
  // }

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
      <Gap height={77} width={0} />
      <div> {children} </div>
    </div>
  );
}
