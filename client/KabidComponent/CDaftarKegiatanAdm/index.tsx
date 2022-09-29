import React from "react";
import Button from "../Button";
import styles from "./cDaftarKegiatanAdm.module.css";
import btnStyles from "../Button/button.module.css";
import Image from "next/image";
import Gap from "../Gap";
import { useRouter } from "next/router";

export default function CDaftarKegiatanAdm() {
    const router = useRouter();
    const clickSubid = () => {
        router.push('/Admin/DaftarKegiatanSubid');
    }
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
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn1}`} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn1}`} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn1}`} />
        </div>
        <Gap width={80} height={0}/>
        <div className={styles.wrapBtnColumn}>
          <p className={styles.title}>Pajak Daerah</p>
          <div className={styles.line} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn2}`} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn2}`} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn2}`} />
        </div>
        <Gap width={80} height={0}/>
        <div className={styles.wrapBtnColumn}>
          <p className={styles.title}>Retribusi & Lain-Lain pen...</p>
          <div className={styles.line} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn3}`} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn3}`} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn3}`} />
        </div>
        <Gap width={80} height={0}/>
        <div className={styles.wrapBtnColumn}>
          <p className={styles.title}>Perencanaan & Pengembangan</p>
          <div className={styles.line} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn4}`} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn4}`} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn4}`} />
        </div>
        <Gap width={80} height={0}/>
        <div className={styles.wrapBtnColumn}>
          <p className={styles.title}>Pengendalian & Evaluasi</p>
          <div className={styles.line} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn1}`} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn1}`} />
          <Button onClick={clickSubid} title="Pilih File" className={`${btnStyles.btnColumn1}`} />
        </div>
      </div>
      <div></div>
    </div>
  );
}
