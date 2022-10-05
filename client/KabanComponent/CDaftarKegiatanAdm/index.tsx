import React from "react";
import Button from "../Button";
import styles from "./cDaftarKegiatanAdm.module.css";
import btnStyles from "../Button/button.module.css";
import Image from "next/image";
import Gap from "../Gap";
import { useRouter } from "next/router";

export default function CDaftarKegiatanAdm() {
  const router = useRouter();
  const clickSubid = (subid) => {
    // router.push("/Admin/DaftarKegiatanSubid");
    router.push({
      pathname: "/Kaban/DaftarKegiatanSubid",
      query: {
        subid: subid,
      },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleDaftarKegiatan}>
        <Image src={"/DaftarKegiatan2.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>DAFTAR KEGIATAN</p>
      </div>
      <div className={styles.wrapperAllBtn}>
        <div className={styles.wrapBtnColumn}>
          <p className={styles.title}>Sekertaris</p>
          <div className={styles.line} />
          <Button
            onClick={() => clickSubid("Hukum dan Kepegawaian")}
            title="Hukum & Kepegawaian"
            className={`${btnStyles.btnColumn1}`}
          />
          <Button
            onClick={() => clickSubid("Perencanaan dan Keuangan")}
            title="Perencanaan & Keuangan"
            className={`${btnStyles.btnColumn1}`}
          />
          <Button
            onClick={() => clickSubid("Umum")}
            title="Umum"
            className={`${btnStyles.btnColumn1}`}
          />
        </div>
        <Gap width={80} height={0} />
        <div className={styles.wrapBtnColumn}>
          <p className={styles.title}>Pajak Daerah</p>
          <div className={styles.line} />
          <Button
            onClick={() => clickSubid("Administrasi dan Pelayanan Pajak")}
            title="Administrasi & Pelayanan Pajak"
            className={`${btnStyles.btnColumn2}`}
          />
          <Button
            onClick={() => clickSubid("PKB dan BBN-KB")}
            title="PKB & BBN-KB"
            className={`${btnStyles.btnColumn2}`}
          />
          <Button
            onClick={() => clickSubid("PBBKB, PAP dan Pajak Rokok")}
            title="PBBKB, PAP & Pajak Rokok"
            className={`${btnStyles.btnColumn2}`}
          />
        </div>
        <Gap width={80} height={0} />
        <div className={styles.wrapBtnColumn}>
          <p className={styles.title}>Retribusi & Lain-Lain pen...</p>
          <div className={styles.line} />
          <Button
            onClick={() => clickSubid("Retribusi")}
            title="Retribusi"
            className={`${btnStyles.btnColumn3}`}
          />
          <Button
            onClick={() =>
              clickSubid("Bagi Hasil Pajak dan Bagi Hasil Bukan Pajak")
            }
            title="Bagi Hasil Pajak & Bagi Hasil Bukan Pajak"
            className={`${btnStyles.btnColumn3}`}
          />
          <Button
            onClick={() => clickSubid("Lain-lain Pendapatan")}
            title="Lain-lain Pendapatan"
            className={`${btnStyles.btnColumn3}`}
          />
        </div>
        <Gap width={80} height={0} />
        <div className={styles.wrapBtnColumn}>
          <p className={styles.title}>Perencanaan & Pengembangan</p>
          <div className={styles.line} />
          <Button
            onClick={() => clickSubid("Pengelolaan Pendapatan Daerah")}
            title="Pengelolaan Pendapatan Daerah"
            className={`${btnStyles.btnColumn4}`}
          />
          <Button
            onClick={() => clickSubid("Pengembangan Teknologi")}
            title="Pengembangan Teknologi"
            className={`${btnStyles.btnColumn4}`}
          />
          <Button
            onClick={() => clickSubid("Pelaporan Data Pendapatan")}
            title="Pelaporan Data Pendapatan"
            className={`${btnStyles.btnColumn4}`}
          />
        </div>
        <Gap width={80} height={0} />
        <div className={styles.wrapBtnColumn}>
          <p className={styles.title}>Pengendalian & Evaluasi</p>
          <div className={styles.line} />
          <Button
            onClick={() => clickSubid("Evaluasi Kinerja")}
            title="Evaluasi Kinerja"
            className={`${btnStyles.btnColumn1}`}
          />
          <Button
            onClick={() =>
              clickSubid("Pengendalian dan Pembinaan Administrasi")
            }
            title="Pengendalian & Pembinaan Administrasi"
            className={`${btnStyles.btnColumn1}`}
          />
          <Button
            onClick={() => clickSubid("Pengendalian Pendapatan Daerah")}
            title="Pengendalian Pendapatan Daerah"
            className={`${btnStyles.btnColumn1}`}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
