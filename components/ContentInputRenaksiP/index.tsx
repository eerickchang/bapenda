import { useRouter } from "next/router";
import btnStyles from "../Button/button.module.css";
import Button from "../Button";
import Gap from "../Gap";
import TxtInputRenaksi from "../TxtInputRenaksi";
import txtInputStyle from "../TxtInputRenaksi/TxtInputRenaksi.module.css";
import styles from "./ContentInputRenaksiP.module.css";

export default function ContentInputRenaksiP() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/InputRenaksi");
  };
  return (
    <div className={styles.container}>
      <p className={styles.tahun}>INPUT RENAKSI TAHUN 2023</p>
      <Gap height={46} width={0} />
      <TxtInputRenaksi
        title="Program"
        className={`${txtInputStyle.container} ${txtInputStyle.program}`}
      />
      <Gap height={56} width={0} />
      <div className={styles.wrapperInput}>
        <div>
          <TxtInputRenaksi title="Kegiatan" />
          <Gap height={56} width={0} />
          <TxtInputRenaksi title="Tupoksi Inti" />
        </div>
        <Gap height={0} width={100} />
        <div>
          <TxtInputRenaksi title="Sub Kegiatan" />
          <Gap height={56} width={0} />
          <TxtInputRenaksi title="Tupoksi Tambahan" />
        </div>
      </div>
      <Gap height={80} width={0} />
      <div className={styles.wrapperRencana}>
        <p className={styles.rencana}>Rencana</p>
        <div>
          <Button
            title={"Jan"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType1}`}
          />
          <Button
            title={"Feb"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType1}`}
          />
          <Button
            title={"Mar"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType2}`}
          />
          <Button
            title={"Apr"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType2}`}
          />
          <Button
            title={"Mei"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType2}`}
          />
          <Button
            title={"Jun"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType2}`}
          />
          <Button
            title={"Jul"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType1}`}
          />
          <Button
            title={"Agu"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType2}`}
          />
          <Button
            title={"Sep"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType2}`}
          />
          <Button
            title={"Okt"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType2}`}
          />
          <Button
            title={"Nov"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType1}`}
          />
          <Button
            title={"Des"}
            onClick={handleClick}
            className={`${btnStyles.container} ${btnStyles.btnType1}`}
          />
        </div>
      </div>
      <Gap height={30} width={0} />
      <Button
        title="Unggah"
        onClick={handleClick}
        className={`${btnStyles.container} ${btnStyles.btnType3}`}
      />
    </div>
  );
}
