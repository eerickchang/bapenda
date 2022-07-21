import { Button, Gap, LayoutUmum, TxtInputLogin } from "../../components";
import styles from "./LupaSandiVerif.module.css";
import btnStyles from '../../components/Button/button.module.css'

export default function LupaSandiVerif() {
  return (
    <>
      <LayoutUmum>
        <div className={styles.container}>
          <p className={styles.txtVerif}>Verifikasi OTP</p>
          <Gap height={38} width={0} />
          <TxtInputLogin
            title="Masukkan Kode OTP"
            image="/iconKey.svg"
            placeholder="Masukkan kode OTP dari SMS yang diterima"
          />
          <Button title="Verifikasi" className={`${btnStyles.container} ${btnStyles.btnSandi}`} />
        </div>
      </LayoutUmum>
    </>
  );
}
