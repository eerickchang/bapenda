import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";
import styles from './ctnDaftarSukses.module.css'

export default function CtnDaftarSukses() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p className={styles.txtStyled}>Daftar</p>
        <p className={styles.txtNormal}>Masuk</p>
        <p className={styles.txtNormal}>Sandi</p>
      </div>
      <Image src="/Successmark.svg" width={220} height={220} />
      <p className={styles.txtSukses}>Sukses Mendaftar</p>
      <Button
        className={`${btnStyles.container} ${btnStyles.btnSandi}`}
        title="Kembali Masuk"
        onClick={handleClick}
      />
    </div>
  );
}
