import { Button, Gap, LayoutUmum, TxtInputLogin } from "../../components";
import styles from "./lupaSandi.module.css";
import btnStyles from "../../components/Button/button.module.css";

export default function LupaSandi() {
  return (
    <LayoutUmum>
      <div className={styles.container}>
        <TxtInputLogin image="/IconNamaP.svg" alt="iconNamaP" />
        <Gap height={40} width={20} />
        <TxtInputLogin
          image="/IconPhone.svg"
          alt="iconPhone"
          title="No. Hp"
          placeholder="Masukkan No. HP"
        />
        <Button
          className={`${btnStyles.container} ${btnStyles.btnSandi}`}
          title="Kirim Kode"
        />
      </div>
    </LayoutUmum>
  );
}
