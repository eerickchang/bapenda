import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";
import Gap from "../Gap";
import TxtInputRenaksi from "../TxtInputRenaksi";
import styles from "./ContentInputRenaksiP.module.css";
import Select from "react-select";

export default function ContentInputRenaksiP() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/InputRenaksi");
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

  const optionsTupoksi = [
    {
      value: "see-samrat",
      label: "See Samrat",
    },
    {
      value: "labeling",
      label: "Labeling",
    },
    {
      value: "lainnya",
      label: "Lainnya",
    },
  ];

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     border: "none",
  //     color: state.isSelected ? "white" : "rgba(74, 74, 74, 1)",
  //     background: state.isSelected ? "rgba(17, 35, 80, 1)" : "white",
  //     backgroundColor: state.isHover ? "rgba(17, 35, 80, 1)" : "white",
  //     padding: 0,
  //     margin: 0,
  //     width: 460,
  //     height: 60,
  //     borderRadius: 10,
  //     fontFamily: 'Poppins',
  //     fontWeight: 700,
  //     fontSize: 22
  //   }),
  //   control: () => ({
  //     // none of react-select's styles are passed to <Control />
  //     width: 700,
  //     height: 99,
  //     borderBottom: "2px solid rgba(27, 221, 187, 1)",
  //     fontFamily: "Inter",
  //     fontWeight: 500,
  //     fontSize: 22,
  //     color: "rgba(165, 165, 165, 0.81)",
  //   }),
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = "opacity 300ms";

  //     return { ...provided, opacity, transition };
  //   },
  // };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      // width: state.selectProps.width,
      borderBottom: "none",
      // color: state.selectProps.menuColor,
      // color: "rgba(74, 74, 74, 1)",
      // background: 'red',
      padding: 0,
      margin: 0,
      width: 460,
      height: 190,
      paddingTop: 18,
      paddingLeft: 8,
      paddingRight: 8,
      borderRadius: 10,
      fontFamily: "Poppins",
      fontWeight: 700,
      fontSize: 22,
      marginLeft: 240,
      color: state.isSelected ? "white" : "rgba(74, 74, 74, 1)",
      background: state.isHoover ? "rgba(17, 35, 80, 1)" : "white",
    }),

    control: (_, { selectProps: { width } }) => ({
      width: width,
      borderBottom: "2px solid rgba(27, 221, 187, 1)",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 22,
      color: "rgba(165, 165, 165, 0.81)",
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

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
          />
          <Gap height={56} width={0} />
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
            title="THL"
            placeholder="Pilih THL yang akan bertugas"
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
          />
          <Gap height={56} width={0} />
          <Select
            styles={customStyles}
            options={optionsTupoksi}
            placeholder={"pilih tupoksi tambahan yang akan dilakukan"}
          />
          {/* <TxtInputRenaksi
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
          </div> */}
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
