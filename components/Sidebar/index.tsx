import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Gap from "../Gap";
import { useRouter } from "next/router";

export default function Sidebar({
  kotakHome = styles.kotak,
  kotakInput = styles.kotak,
  kotakDaftarKegiatan = styles.kotak,
  kotakRiwayatKegiatan = styles.kotak,
  kotakProfil = styles.kotak,
  kotakNotif = styles.kotak,
  kotakLogOut = styles.kotak,
}) {
  const router = useRouter();
  const clickHome = () => {
    router.push("/Dashboard");
  };

  const clickInput = () => {
    router.push("/InputRenaksi");
  };

  const clickDaftarKegiatan = () => {
    router.push("/DaftarKegiatan");
  };

  const clickRiwayatKegiatan = () => {
    router.push("/RiwayatKegiatan");
  };

  const clickProfil = () => {
    router.push("/Profil");
  };

  const clickNotif = () => {
    router.push("/Notifikasi");
  };

  const clickLogOut = () => {
    router.push("/LogOut");
  };

  return (
    <nav className={styles.container}>
      <div className={styles.image}>
        <Image src="/SidebarProfile.svg" width={90} height={90} />
      </div>
      <div className={styles.contentAtas}>
        <button className={kotakHome} onClick={clickHome}>
          <Image src="/Home.svg" width={40} height={40} />
          <div className={styles.hoverKeterangan}>Beranda</div>
        </button>
        <Gap height={20} width={0} />
        <button className={kotakInput} onClick={clickInput}>
          <Image src="/Input.svg" width={40} height={40} />
          <div
            className={`${styles.hoverKeterangan} ${styles.hoverKeteranganKegiatan}`}
          >
            Input Kegiatan
          </div>
        </button>
        <Gap height={20} width={0} />
        <button className={kotakDaftarKegiatan} onClick={clickDaftarKegiatan}>
          <Image src="/DaftarKegiatan.svg" width={40} height={40} />
          <div
            className={`${styles.hoverKeterangan} ${styles.hoverKeteranganKegiatan}`}
          >
            Daftar Kegiatan
          </div>
        </button>
        <Gap height={20} width={0} />
        <button className={kotakRiwayatKegiatan} onClick={clickRiwayatKegiatan}>
          <Image src="/RiwayatKegiatan.svg" width={40} height={40} />
          <div
            className={`${styles.hoverKeterangan} ${styles.hoverKeteranganKegiatan}`}
          >
            Riwayat Kegiatan
          </div>
        </button>
      </div>
      <div className={styles.contentBawah}>
        <button className={kotakProfil} onClick={clickProfil}>
          <Image src="/Profile.svg" width={25} height={30} />
          <div className={`${styles.hoverKeterangan}`}>Profil</div>
        </button>
        <Gap height={20} width={0} />
        <button className={kotakNotif} onClick={clickNotif}>
          <Image src="/NotifPutih.svg" width={40} height={40} />
          <div className={`${styles.hoverKeterangan}`}>Notifikasi</div>
        </button>
        <Gap height={20} width={0} />
        <button className={kotakLogOut} onClick={clickLogOut}>
          <Image src="/LogOut.svg" width={40} height={40} />
          <div className={`${styles.hoverKeterangan}`}>Keluar</div>
        </button>
      </div>
    </nav>
  );
}
