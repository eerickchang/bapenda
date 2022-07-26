import styles from "../styles/login.module.css";
import btnStyles from "../components/Button/button.module.css";
import { Gap, TxtInput, LayoutUmum, Button } from "../components";

export default function Login() {
  return (
    <>
      <LayoutUmum>
        <div className={styles.txtInput}> 
          <TxtInput />
          <Gap height={40} width={0} />
          <TxtInput
            image="/Password.svg"
            title="Kata Sandi"
            placeholder="Masukkan Kata Sandi"
          />
          <Gap height={106} width={0} />
          <p className={styles.txtLupa}>Lupa kata sandi ?</p>
          <Gap height={45} width={0} />
          <Button className={`${btnStyles.container}`} title="Masuk" />
          <Gap height={23} width={0} />
          <Button
            className={`${btnStyles.container} ${btnStyles.btnDaftar}`}
            title="Daftar"
          />
        </div>
      </LayoutUmum>
    </>
  );
}
