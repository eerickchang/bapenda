import Axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";
import Gap from "../Gap";
import TxtInputRenaksi from "../TxtInputRenaksi";
import styles from "./ContentInputRenaksiP.module.css";

export default function ContentInputRenaksiP() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/InputRenaksi");
  };

  const [inProgram, setInProgram] = useState("");
  const [inKegiatan, setInKegiatan] = useState("");
  const [inTupoksiInti, setInTupoksiInti] = useState("");
  const [inSubKegiatan, setInSubKegiatan] = useState("");

  const btnUnggah = () => {
    Axios.post("http://localhost:3001/inputRenaksi", {
      program: inProgram,
      kegiatan: inKegiatan,
      tupoksiInti: inTupoksiInti,
      subKegiatan: inSubKegiatan,
    });

    // if (Response.length > 0) {
    //   setShowModal(true);
    // }
  };

  //!modals
  const [showModal, setShowModal] = useState(false);

  //!NAMA THL
  const [namaTHL, setNamaTHL] = useState([
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      nama: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
  ]);

  const [activeFormat, setActiveFormat] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleInputRenaksi}>
        <Image src={"/Input2.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>MASUKAN RENAKSI</p>
      </div>
      <div
        className={styles.wrapperBtnExcel}
        onClick={(e) => setActiveFormat(!activeFormat)}
      >
        <div className={styles.btnExcel}>
          <Image src={"/Excel.svg"} width={35} height={35} />
          <p>Format Excel</p>
        </div>
        {activeFormat && (
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
        )}
      </div>
      <Gap height={46} width={0} />
      <div className={styles.wrapperInput}>
        <div>
          <TxtInputRenaksi
            title="Program"
            placeholder="masukan program yang akan dilakukan"
            onChange={(e) => setInProgram(e.target.value)}
            className={""}
          />
          <Gap height={56} width={0} />
          <TxtInputRenaksi
            title="Kegiatan"
            placeholder="masukan kegiatan yang akan dilakukan"
            onChange={(e) => setInKegiatan(e.target.value)}
            className={""}
          />
          <Gap height={56} width={0} />
          <TxtInputRenaksi
            title="Tupoksi Inti"
            placeholder="masukan tupoksi inti yang akan dilakukan"
            onChange={(e) => setInTupoksiInti(e.target.value)}
            className={""}
          />
        </div>
        <Gap height={0} width={100} />
        <div>
          <TxtInputRenaksi
            title="THL"
            placeholder="Pilih THL yang akan bertugas"
            onChange={(e) => setInProgram(e.target.value)}
            className={""}
          />
          <div className={styles.dropdownTHL}>
            <div className={styles.dropdownIcon}>
              <Image src={"/Dropdown-tupoksi.svg"} width={30} height={30} />
            </div>
            <div className={styles.wrapperSelectTHL}>
              <div className={styles.wrapper}>
                {namaTHL.map((item) => (
                  <div className={styles.listNama}>
                    {item.image}
                    <p>{item.nama}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Gap height={56} width={0} />
          <TxtInputRenaksi
            title="Sub Kegiatan"
            placeholder="masukan sub kegiatan yang akan dilakukan"
            onChange={(e) => setInSubKegiatan(e.target.value)}
            className={""}
          />
          <Gap height={56} width={0} />
          <TxtInputRenaksi
            title="Tupoksi Tambahan"
            placeholder="pilih tupoksi tambahan yang akan dilakukan"
            onChange={(e) => setInProgram(e.target.value)}
            className={""}
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
          {/* <input type={"checkbox"} className={styles.input}/> */}
          {/* <select className={styles.select}>
            <option>unduh</option>
            <option>unggah</option>
          </select> */}
          {/* <CheckboxBulan title='jan' /> */}

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

      {/* <ButtonAnimasi/> */}
      <Button
        title="Unggah"
        onClick={btnUnggah}
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
