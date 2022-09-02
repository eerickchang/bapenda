import React, { useEffect, useState } from "react";
import styles from "./ctnlogin.module.css";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";
import Gap from "../Gap";
import TxtInput from "../TxtInput";
import { useRouter } from "next/router";
import Axios from "axios";

export default function CtnLogin() {
  const router = useRouter();

  const [nip, setNip] = useState("");
  const [sandi, setSandi] = useState("");

  const handleClick = () => {
    router.push("/LupaSandi");
  };

  const btnDaftar = () => {
    router.push("/Daftar");
  };

  Axios.defaults.withCredentials = true;

  const btnMasuk = () => {
    Axios.post("http://localhost:3001/masuk", {
      nip: nip,
      sandi: sandi,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
      } else {
        // console.log(response.data[0].nama);
        router.push("/Staff/Dashboard");
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      console.log(response.data);
      if (response.data.loggedIn == true) {
        // router.push("/Dashboard");
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p className={styles.txtNormal}>Daftar</p>
        <p className={styles.txtStyled}>Masuk</p>
        <p className={styles.txtNormal}>Sandi</p>
      </div>
      <div className={styles.txtInput}>
        <TxtInput
          image="/Nip.svg"
          alt="Nip"
          title="NIP / NPNP"
          placeholder="Masukkan NIP / NPNP"
          width={25}
          height={30}
          type="text"
          onChange={(e) => setNip(e.target.value)}
        />
        <Gap height={40} width={0} />
        <TxtInput
          image="/Password.svg"
          alt="Password"
          title="Kata Sandi"
          placeholder="Masukkan Kata Sandi"
          type="password"
          width={25}
          height={30}
          onChange={(e) => setSandi(e.target.value)}
        />
        <Gap height={106} width={0} />
        <p className={styles.txtLupa} onClick={handleClick}>
          Lupa kata sandi?
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
