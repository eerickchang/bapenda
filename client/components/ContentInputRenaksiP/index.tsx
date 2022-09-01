import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";
import Gap from "../Gap";
import TxtInputRenaksi from "../TxtInputRenaksi";
import styles from "./ContentInputRenaksiP.module.css";
import Select, { components, DropdownIndicatorProps } from "react-select";
import { colors } from "react-select/dist/declarations/src/theme";
import Axios from "axios";

export default function ContentInputRenaksiP() {
  Axios.defaults.withCredentials = true;

  const router = useRouter();
  const handleClick = () => {
    router.push("/InputRenaksi");
  };

  const [inProgram, setInProgram] = useState("");
  const [inKegiatan, setInKegiatan] = useState("");
  const [inTupoksiInti, setInTupoksiInti] = useState("");
  const [inSubKegiatan, setInSubKegiatan] = useState("");
  const [nip, setNip] = useState("");
  const [inTupoksiTambahan, setInTupoksiTambahan] = useState("");

  const btnUnggah = () => {
    Axios.post("http://localhost:3001/inputRenaksi", {
      program: inProgram,
      kegiatan: inKegiatan,
      tupoksiInti: inTupoksiInti,
      subKegiatan: inSubKegiatan,
      nip: nip,
      tupoksiTambahan: inTupoksiTambahan,
    });
    // useEffect(() => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
    // });
    // useEffect(() => {
    // setShowModal(true);
    // }, [3]);

    // if (Response.length > 0) {
    //   setShowModal(true);
    // }
  };

  // useEffect(() => {
  //   setShowModal(true);
  //   setTimeout(() => {
  //     setShowModal(false);
  //   }, 2000);
  // });

  useEffect(() => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      // console.log("NIP: ", response.data.user[0].nip);
      setNip(response.data.user[0].nip);
    });
    // if (Response.length > 0) {
    //   setShowModal(true);
    // }
  }, []);

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
      // customAbbreviation: <Image src={"/Input2.svg"} width={50} height={50} />,
    },
  ];

  const optionsTHL = [
    {
      value: "geo",
      label: "George Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "andre",
      label: "Andreas Waani",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "poco",
      label: "Ryan Mamitoho",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "ando",
      label: "Rolando",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "lomo",
      label: "Salomo",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "geral",
      label: "Gerald W",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "gerry",
      label: "Gerry W",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "monic",
      label: "Monica T",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "veren",
      label: "Verren K",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "abe",
      label: "Abelard P",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "ryan",
      label: "Mamitoho",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "jere",
      label: "Jeremia W",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "geoo",
      label: "Georrge Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "andreee",
      label: "Andreeeeas Waani",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "pocooo",
      label: "Ryan Mamitohooo",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "geeeo",
      label: "Geeeorge Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "annndre",
      label: "Annndreas W",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "poccco",
      label: "Ryannn Mamitoho",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "geop",
      label: "Georgep Olaf",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
    {
      value: "andrre",
      label: "Andrreas Waani",
      image: <Image src="/SidebarProfile.svg" width={50} height={50} />,
    },
  ];

  const formatOptionTHL = ({ label, image }) => (
    //value-input
    <div
      style={
        {
          // flexDirection: "row-reverse",
          // display: "-ms-inline-flexbox",
          // width: 1000
          // height: 500
        }
      }
    >
      <div
        style={{
          flex: 1,
          alignItems: "center",
          display: "-webkit-inline-flex",
        }}
      >
        <div>{image}</div>
        <div
          style={{
            marginLeft: 10,
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: 18,
            // color: 'rgba(17, 35, 80, 1)',
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );

  const customStylesTHL = {
    //OPTION List
    option: (base, state) => ({
      ...base,
      flex: 1,
      borderRadius: 10,
      flexDirection: "row",
      cursor: "pointer",
      height: 70,
      width: 253,
      color: state.isFocused ? "white" : "rgba(17, 35, 80, 1)",
      backgroundColor: state.isFocused ? "rgba(17, 35, 80, 1)" : "white",
    }),

    //CONTAINER OPTION
    menu: (provided, state) => ({
      ...provided,
      width: 290,
      // height: 300,
      paddingTop: 7,
      paddingLeft: 8,
      paddingRight: 8,
      marginLeft: 390,
      backgroundColor: state.isSelected ? "rgba(17, 35, 80, 1)" : "white",
      flexWrap: "wrap",
      flexDirection: "row",
      // display: "-webkit-flex",
    }),

    //INPUT
    control: (_, { selectProps: { width, height } }) => ({
      // width: width,
      // maxWidth:
      // height: height,
      paddingLeft: -20,
      paddingTop: 20,
      width: 700,
      height: 70,
      marginTop: -33,
      overflow: "overlay",
      scroll: null,
      borderBottom: "2px solid rgba(27, 221, 187, 1)",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 22,
    }),

    singleValue: (styles, state) => ({
      ...styles,
      color: "rgba(165, 165, 165, 0.81)",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 29,
      cursor: "pointer",
    }),
  };

  const formatOptionLabelTupoksi = ({ value, label }) => (
    // <div
    // className={styles.formatOptionTupoksi}
    <div
      style={{
        display: "flex",
        padding: 0,
        margin: 0,
        width: 450,
        height: 40,
        paddingTop: 5,
        border: 10,
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: 22,
        cursor: "pointer",
      }}
    >
      <div>{label} </div>
    </div>
  );

  const customStyles = {
    option: (base, state) => ({
      ...base,
      // ...state,
      borderRadius: 10,
      backgroundColor: state.isSelected ? "#112350" : "white",
      color: state.isFocused ? "white" : "#4A4A4A",
      background: state.isFocused ? "#112350" : "white",
    }),

    menu: (provided, state) => ({
      ...provided,
      width: 480,
      borderRadius: 20,
      height: 190,
      paddingTop: 7,
      paddingLeft: 8,
      paddingRight: 8,
      marginLeft: 220,
      backgroundColor: state.isSelected ? "rgba(17, 35, 80, 1)" : "white",
    }),

    control: (_, { selectProps: { width } }) => ({
      width: width,
      width: 700,
      borderBottom: "2px solid rgba(27, 221, 187, 1)",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 22,
      cursor: "pointer",
    }),

    singleValue: (styles, state) => ({
      ...styles,
      color: "rgba(165, 165, 165, 0.81)",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 29,
    }),
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
            onChange={(e) => setInProgram(e.target.value)}
          />
          <Gap height={56} width={0} />
          <TxtInputRenaksi
            title="Kegiatan"
            placeholder="masukan kegiatan yang akan dilakukan"
            onChange={(e) => setInKegiatan(e.target.value)}
          />
          <Gap height={56} width={0} />
          <TxtInputRenaksi
            title="Tupoksi Inti"
            placeholder="masukan tupoksi inti yang akan dilakukan"
            onChange={(e) => setInTupoksiInti(e.target.value)}
          />
        </div>
        <Gap height={0} width={100} />
        <div>
          {/* <TxtInputRenaksi
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
          </div> */}
          <p className={styles.titleTupoksi}>THL</p>
          {/* <Gap width={0} height={5}/>  */}
          <Select
            downChevron
            isMulti
            menuShouldBlockScroll={false}
            // menuShouldScrollIntoView={false}
            formatOptionLabel={formatOptionTHL}
            options={optionsTHL}
            styles={customStylesTHL}
            components={{
              DropdownIndicator: null,
              ClearIndicator: null,
              options: optionsTHL,
            }}
            placeholder={
              <div className={styles.placeholder}>
                pilih THL yang akan bertugas
              </div>
            }
          />

          <Gap height={56} width={0} />
          <TxtInputRenaksi
            title="Sub Kegiatan"
            placeholder="masukan sub kegiatan yang akan dilakukan"
            onChange={(e) => setInSubKegiatan(e.target.value)}
          />
          <Gap height={56} width={0} />
          <p className={styles.titleTupoksi}>Tupoksi tambahan</p>
          <Select
            formatOptionLabel={formatOptionLabelTupoksi}
            components={{ DropdownIndicator: null }}
            // ClearIndicator
            styles={customStyles}
            options={optionsTupoksi}
            placeholder={
              <div className={styles.placeholder}>
                pilih tupoksi tambahan yang akan dilakukan
              </div>
            }
            onChange={(e) => setInTupoksiTambahan(e?.label)}
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
