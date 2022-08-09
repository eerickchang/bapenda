import Button from "../Button";
import Gap from "../Gap";
import TxtInputDaftar from "../TxtInputDaftar";
import styles from "./ctndaftar.module.css";
import btnStyles from "../Button/button.module.css";
import { useRouter } from "next/router";

export default function CtnDaftar() {
  const router = useRouter();
  const btnDaftar = () => {
    router.push("/DaftarSukses");
  };

  const btnMasuk = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p className={styles.txtStyled}>Daftar</p>
        <p className={styles.txtNormal}>Masuk</p>
        <p className={styles.txtNormal}>Sandi</p>
      </div>
      <div className={styles.content}>
        <div className={styles.contentKiri}>
          <TxtInputDaftar />
          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/jabatanUmum.svg"
            width={30}
            height={35}
            title="Jabatan"
            placeholder="Pilih Jabatan"
          />
          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/Nip.svg"
            width={25}
            height={30}
            title="NIP / NPNP"
            placeholder="Masukkan NIP / NPNP"
            type="number"
          />
        </div>
        <Gap width={67} height={0} />
        <div className={styles.contentKanan}>
          <TxtInputDaftar
            image="/bidangUmum.svg"
            width={30}
            height={35}
            title="Bidang"
            placeholder="Pilih Sub Bidang"
          />
          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/noHpUmum.svg"
            width={28}
            height={28}
            title="No HP"
            placeholder="Masukkan No HP"
            type="number"
          />
          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/Password.svg"
            width={20}
            height={25}
            title="Password"
            placeholder="Masukkan Kata Sandi"
            type="password"
          />
        </div>
      </div>
      <Gap width={0} height={72} />
      <Button
        className={btnStyles.container}
        title="Daftar"
        onClick={btnDaftar}
      />
      <Gap width={0} height={20} />
      <Button
        className={`${btnStyles.container} ${btnStyles.btnDaftar}`}
        title="Masuk"
        onClick={btnMasuk}
      />
    </div>
  );
}
