import React from "react";
import styles from "./txtinputlogin.module.css";
import Image from "next/image";
import Gap from "../Gap";

interface TxtInputProps {
  image: string;
  alt: string;
  title: string;
  placeholder: string;
  width: number;
  height: number;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TxtInput(props: TxtInputProps) {
  const {
    onChange,
    image,
    alt,
    title,
    placeholder,
    width,
    height,
    type,
  } = props;

     
  return (
    <div className={styles.container}>
      <div className={styles.logoTxt}>
        <Gap width={33} height={0} />
        <Image
          src={image}
          width={width}
          height={height}
          alt={alt}
          className={styles.image}
        />
        <Gap height={0} width={10} />
        <p>{title}</p>
      </div>
      <Gap height={20} width={0} />
      <input type={type} placeholder={placeholder} onChange={onChange}/>
    </div>
  );
}
