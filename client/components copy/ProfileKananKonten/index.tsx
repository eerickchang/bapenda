import React from "react";
import styles from "./profilekanankonten.module.css";
import Image from "next/image";

interface ProfileKananKontenProps {
  title: string;
  subTitle: string;
  icon: string;
}

export default function ProfileKananKonten(props: ProfileKananKontenProps) {
  const {
    title = "Bidang",
    subTitle = "Perencanaan dan pengembangan",
    icon = "/orgBidang.svg",
  } = props;

  return (
    <div className={styles.container}>
      <Image src={icon} width={50} height={50} alt="Org Bidang" />
      <div className={styles.txtWrapper}>
        <p className={styles.txtTitle}>{title}</p>
        <p className={styles.txtSubTitle}>{subTitle}</p>
      </div>
    </div>
  );
}
