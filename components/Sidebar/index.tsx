import React from "react";
import styles from "./sidebar.module.css";
import Image from "next/image";
import Gap from "../Gap";
import { useRouter } from "next/router";

export default function Sidebar({
  kotakHome = styles.kotak,
  kotakInput = styles.kotak,
}) {
  const router = useRouter();
  const clickHome = () => {
    router.push("/Dashboard");
  };

  const clickInput = () => {
    router.push("/InputRenaksi");
  };

  return (
    <div className={styles.container}>
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
            className={`${styles.hoverKeterangan} ${styles.hoverKeterangan2}`}
          >
            Input Kegiatan
          </div>
        </button>
      </div>
    </div>
  );
}
