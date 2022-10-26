import React, { useEffect, useState } from "react";
import styles from "./ctnlogin.module.css";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";
import Gap from "../Gap";
import TxtInput from "../TxtInput";
import { useRouter } from "next/router";
import Axios from "axios";

import Modal from "react-modal";
import Image from "next/image";

export default function CtnLogin() {
  const router = useRouter();

  const [nip, setNip] = useState("");
  const [sandi, setSandi] = useState("");
  let [message, setMessage] = useState("");

  // const handleClick = () => {
  //   router.push("/Umum/LupaSandi");
  // };

  const btnDaftar = () => {
    router.push("/Umum/Daftar");
  };

  Axios.defaults.withCredentials = true;

  const btnMasuk = () => {
    Axios.post("http://localhost:3001/masuk", {
      nip: nip,
      sandi: sandi,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        setMessage(response.data.message);
        setIsOpenModal(true);
        setTimeout(() => {
          setIsOpenModal(false);
        }, 3500);
      } else if (response.data[0].jabatan === "Kepala Badan") {
        router.push("/Kaban/Dashboard");
      } else if (response.data[0].jabatan === "Staff") {
        router.push("/Staff/Dashboard");
      } else if (response.data[0].jabatan === "Admin") {
        router.push("/Admin/Dashboard");
      } else if (response.data[0].jabatan === "Kasubid") {
        router.push("Kasubid/Dashboard");
      } else if (response.data[0].jabatan === "Kabid") {
        router.push("Kabid/Dashboard");
      }
    });
  };

  const custom = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 491,
      height: 219,
      borderRadius: 20,
      paddingTop: 20,
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overlay: "#112350",
      backgroundColor: "white",
      zIndex: 1001,
      scroll: false,
    },
    overlay: {
      position: "fixed",
      marginTop: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(17, 35, 80, 0.5)",
      zIndex: 1000,
    },
  };

  const [modalIsOpen, setIsOpenModal] = useState(false);

  function openModal() {}

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpenModal(false);
  }

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
          type="number"
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
        <Gap height={100} width={0} />
        <p onClick={openModal} className={styles.txtLupa}>
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
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={custom}
          contentLabel="Example Modal"
          className={styles.modal}
        >
          <div className={styles.dialog}>
            <Image src={"/Warning.svg"} width={30} height={30} />
            <p>{message}</p>
          </div>
          <div onClick={() => setIsOpenModal(false)} className={styles.coba}>
            Coba Lagi
          </div>
        </Modal>
      </div>
    </div>
  );
}
