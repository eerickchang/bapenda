import React from "react";
import styles from "./profilekanan.module.css";
import Image from "next/image";

export default function ProfileKanan() {
  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <Image src="/User5.svg" width={150} height={150} alt="User 2" />
        <div className={styles.imgEditProfile}>
          <Image
            src="/EditProfile.svg"
            width={35}
            height={35}
            alt="Edit Profile"
          />
        </div>
        <p className={styles.nama}>Ferren Hilarry Kalalo</p>
        <p className={styles.jabatan}>ASN</p>
      </div>
    </div>
  );
}
