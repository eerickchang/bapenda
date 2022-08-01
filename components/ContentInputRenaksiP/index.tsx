import React, { useState } from "react";
import { useRouter } from "next/router";
import btnStyles from "../Button/button.module.css";
import Button from "../Button";
import Gap from "../Gap";
import TxtInputRenaksi from "../TxtInputRenaksi";
import txtInputStyle from "../TxtInputRenaksi/TxtInputRenaksi.module.css";
import styles from "./ContentInputRenaksiP.module.css";
import BtnBulan from "../BtnBulan";
import btnFormat from "../BtnBulan/btnBulan.module.css";
import Image from "next/image";

export default function ContentInputRenaksiP() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/InputRenaksi");
  };

  //!modals
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleInputRenaksi}>
        {/* <div> */}
        <Image src={"/Input2.svg"} width={50} height={50} />
        {/* </div> */}
        <p className={styles.tahun}>MASUKAN RENAKSI</p>
      </div>
      {/* <BtnBulan
        image={"/Excel.svg"}
        className={`${btnFormat.container}`}
        title="Format Excel"
        onClick={handleClick}
      /> */}
      <div className={styles.wrapperBtnExcel}>
      <div className={styles.btnExcel}>
        <Image src={"/Excel.svg"} width={35} height={35} />
        <p>Format Excel</p>
      </div>
      <div className={styles.selectFile}>
        <div className={styles.selectItemFile}>
          <Image src={"/IconUnduh.svg"} width={38} height={35} />
          <p className={styles.selectItem}>Unduh File</p>
        </div>
        <div className={styles.selectItemFile}>
          <Image src={"/IconUnggah.svg"} width={38} height={35} />
          <p className={styles.selectItem}>Unggah File</p>
        </div>
      </div>
      </div>
      <Gap height={46} width={0} />
      <TxtInputRenaksi
        title="Program"
        placeholder="masukan program yang akan dilakukan"
        className={`${txtInputStyle.container} ${txtInputStyle.program}`}
      />
      <Gap height={56} width={0} />
      <div className={styles.wrapperInput}>
        <div>
          <TxtInputRenaksi
            title="Kegiatan"
            placeholder="masukan kegiatan yang akan dilakukan"
          />
          <Gap height={56} width={0} />
          <TxtInputRenaksi
            title="Tupoksi Inti"
            placeholder="masukan tupoksi inti yang akan dilakukan"
          />
        </div>
        <Gap height={0} width={100} />
        <div>
          <TxtInputRenaksi
            title="Sub Kegiatan"
            placeholder="masukan sub kegiatan yang akan dilakukan"
          />
          <Gap height={56} width={0} />
          <TxtInputRenaksi
            title="Tupoksi Tambahan"
            placeholder="pilih tupoksi tambahan yang akan dilakukan"
          />
          <div className={styles.dropdownTupoksi}>
            <div className={styles.selectTupoksi}>
              <Image src={"/Dropdown-tupoksi.svg"} width={30} height={30} />
            </div>
            <div className={styles.dropdownList}>
              <div className={styles.dropdownList_item}>
                <p>See Samrat</p>
              </div>
              <div className={styles.dropdownList_item}>
                <p>Labeling</p>
              </div>
              <div className={styles.dropdownList_item}>
                <p>Lainnya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gap height={80} width={0} />
      <div className={styles.wrapperRencana}>
        <p className={styles.rencana}>Rencana</p>
        <div>
          <Button
            title={"Jan"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
          <Button
            title={"Feb"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
          <Button
            title={"Mar"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
          <Button
            title={"Apr"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
          <Button
            title={"Mei"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
          <Button
            title={"Jun"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
          <Button
            title={"Jul"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
          <Button
            title={"Agu"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
          <Button
            title={"Sep"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
          <Button
            title={"Okt"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
          <Button
            title={"Nov"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
          <Button
            title={"Des"}
            onClick={handleClick}
            className={`${btnStyles.btnType1}`}
          />
        </div>
      </div>
      <Gap height={30} width={0} />
      <Button
        title="Unggah"
        onClick={() => setShowModal(true)}
        className={`${btnStyles.btnType1} ${btnStyles.btnType3}`}
      />
      {showModal ? (
        <div className={styles.modal} onClick={() => setShowModal(false)}>
          <p>
            Input Renaksi Feren Kalalo <b>Berhasil</b>
            <div className={styles.checkCircle}>
              <Image src={"/Check-circle.svg"} width={25} height={25} />
            </div>
          </p>
        </div>
      ) : null}
    </div>
  );
}
