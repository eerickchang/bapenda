import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Gap from "../Gap";
import { useRouter } from "next/router";
import Axios from "axios";

Axios.defaults.withCredentials = true;
import Modal from "react-modal";

export default function Sidebar({
  kotakHome = styles.kotak,
  kotakDaftarKegiatan = styles.kotak,
  kotakTinjauRenaksi = styles.kotak,
  kotakUbahJadwal = styles.kotak,
  kotakEvaluasiLampiran = styles.kotak,
  kotakHapusRenaksi = styles.kotak,
  kotakRiwayatKegiatan = styles.kotak,
  kotakProfil = styles.kotak,
  kotakNotif = styles.kotak,
  kotakLogOut = styles.kotakLogOut,
}) {
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/masuk").then((response) => {
  //     setImage(response.data.user[0].foto);
  //   });
  // }, []);

  const [image, setImage] = useState(null);
  const router = useRouter();
  const clickHome = () => {
    router.push("/Admin/Dashboard");
  };

  const clickDaftarKegiatan = () => {
    router.push("/Admin/DaftarKegiatan");
  };

  const clickTinjauRenaksi = () => {
    router.push("/Admin/TinjauRenaksi");
  };

  const clickUbahJadwal = () => {
    router.push("/Admin/UbahJadwalRenaksi");
  };

  const clickEvaluasiLampiran = () => {
    router.push("/Admin/EvaluasiLampiran");
  };

  const clickHapusRenaksi = () => {
    router.push("/Admin/HapusRenaksi");
  };
  const clickRiwayatKegiatan = () => {
    router.push("/Admin/RiwayatKegiatan");
  };

  const clickProfil = () => {
    router.push("/Admin/Profil");
  };

  const clickNotif = () => {
    router.push("/Admin/Notifikasi");
  };
  // const clickLogOut = () => {
  //   router.push("/Staff/LogOut");
  // };

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

  function openModal() {
    setIsOpenModal(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.image}>
          {!image ? (
            <Image src="/SidebarProfile.svg" width={90} height={90} />
          ) : (
            <Image
              src={image}
              width={90}
              height={90}
              style={{ borderRadius: 90 }}
            />
          )}
        </div>
        <div className={styles.contentAtas}>
          <button className={kotakHome} onClick={clickHome}>
            <Image src="/Home.svg" width={30} height={30} />
            <div className={styles.hoverKeterangan}>Beranda</div>
          </button>
          <Gap height={10} width={0} />
          <button className={kotakDaftarKegiatan} onClick={clickDaftarKegiatan}>
            <Image src="/DaftarKegiatan.svg" width={30} height={30} />
            <div
              className={`${styles.hoverKeterangan} ${styles.hoverKeteranganKegiatan}`}
            >
              Daftar Kegiatan
            </div>
          </button>
          <Gap height={10} width={0} />
          <button className={kotakTinjauRenaksi} onClick={clickTinjauRenaksi}>
            <Image src="/TinjauRenaksi.svg" width={30} height={30} />
            <div
              className={`${styles.hoverKeterangan} ${styles.hoverKeteranganKegiatan}`}
            >
              Tinjau Renaksi
            </div>
          </button>
          <Gap height={10} width={0} />
          <button className={kotakUbahJadwal} onClick={clickUbahJadwal}>
            <Image src="/UbahJadwal.svg" width={30} height={30} />
            <div
              className={`${styles.hoverKeterangan} ${styles.hoverKeteranganKegiatan}`}
            >
              Ubah Jadwal
            </div>
          </button>
          <Gap height={10} width={0} />
          <button
            className={kotakEvaluasiLampiran}
            onClick={clickEvaluasiLampiran}
          >
            <Image src="/EvaluasiLampiran.svg" width={30} height={30} />
            <div
              className={`${styles.hoverKeterangan} ${styles.hoverKeteranganKegiatan}`}
            >
              Evaluasi Lampiran
            </div>
          </button>
          <Gap height={10} width={0} />
          <button className={kotakHapusRenaksi} onClick={clickHapusRenaksi}>
            <Image src="/HapusRenaksi.svg" width={30} height={30} />
            <div
              className={`${styles.hoverKeterangan} ${styles.hoverKeteranganKegiatan}`}
            >
              Hapus Renaksi
            </div>
          </button>
          <Gap height={10} width={0} />
          <button
            className={kotakRiwayatKegiatan}
            onClick={clickRiwayatKegiatan}
          >
            <Image src="/RiwayatKegiatan.svg" width={30} height={30} />
            <div
              className={`${styles.hoverKeterangan} ${styles.hoverKeteranganKegiatan}`}
            >
              Riwayat Kegiatan
            </div>
          </button>
        </div>
        <Gap height={30} width={0} />
        <div className={styles.contentBawah}>
          <button className={kotakProfil} onClick={clickProfil}>
            <Image src="/Profile.svg" width={30} height={30} />
            <div className={`${styles.hoverKeterangan}`}>Profil</div>
          </button>
          {/* <Gap height={10} width={0} />
          <button className={kotakNotif} onClick={clickNotif}>
            <Image src="/NotifPutih.svg" width={30} height={30} />
            <div className={`${styles.hoverKeterangan}`}>Notifikasi</div>
          </button> */}
          <Gap height={10} width={0} />
          <button
            className={kotakLogOut}
            onClick={() => {
              openModal();
            }}
          >
            <Image src="/LogOut.svg" width={30} height={30} />
            <div className={`${styles.hoverKeterangan}`}>Keluar</div>
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={custom}
            contentLabel="Example Modal"
            className={styles.modal}
          >
            <h2 className={styles.headerTxtModal}>Log Out</h2>
            <h2 className={styles.dialog}>Apakah anda yakin ingin keluar?</h2>
            <Gap height={20} width={0} />
            <div className={styles.wrapperBtnModal}>
              {/* <Gap width={193} height={0} /> */}
              <button
                onClick={() => {
                  closeModal();
                  router.push("/");
                }}
                className={styles.btnYa}
              >
                <p className={styles.txt}>Ya</p>
              </button>
              {/* <Gap width={24} height={0} /> */}
              <button onClick={closeModal} className={styles.btnTidak}>
                <p>Tidak</p>
              </button>
            </div>
          </Modal>
        </div>
      </nav>
    </>
  );
}
