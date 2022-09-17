import React from "react";
import styles from "./profilekanan.module.css";
import Image from "next/image";
import ProfileKananKonten from "../ProfileKananKonten";
import Gap from "../Gap";

interface ProfileKananProps {
  nama: string;
  bidang: string;
  subBidang: string;
  jabatan: string;
  noHp: string;
}

export default function ProfileKanan(props: ProfileKananProps) {
  const { nama, bidang, subBidang, jabatan, noHp } = props;
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
        <p className={styles.nama}>{nama}</p>
        <p className={styles.jabatan}>ASN</p>
        <div className={styles.content}>
          <Gap height={50} width={0} />
          <ProfileKananKonten
            title="Bidang"
            subTitle={bidang}
            icon="/orgBidang.svg"
          />
          <Gap height={45} width={0} />
          <ProfileKananKonten
            title="Sub Bidang"
            subTitle={subBidang}
            icon="/orgSubBidang.svg"
          />
          <Gap height={45} width={0} />
          <ProfileKananKonten
            title="Jabatan"
            subTitle={jabatan}
            icon="/orgJabatan.svg"
          />
          <Gap height={45} width={0} />
          <ProfileKananKonten
            title="Nomor HP"
            subTitle={noHp}
            icon="/orgNoHp.svg"
          />
        </div>
      </div>
    </div>
  );
}
