import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useTransition } from "react";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";
import Gap from "../Gap";
import TxtInputRenaksi from "../TxtInputRenaksi";
import styles from "./ContentInputRenaksiP.module.css";
import Select, { components, DropdownIndicatorProps } from "react-select";
import { colors } from "react-select/dist/declarations/src/theme";
import Axios from "axios";
import { INSPECT_MAX_BYTES } from "buffer";
import { optionCSS } from "react-select/dist/declarations/src/components/Option";
import next from "next";
import { copyFileSync } from "fs";

import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { FormControlLabel, Typography } from "@mui/material";



export default function ContentInputRenaksiP() {
  // !CHECKBOX RENCANA BULAN
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: 10,
    width: 70,
    height: 60,
    boxShadow:
      theme.palette.mode === "dark"
        ? "0 0 0 1px rgb(16 22 26 / 40%)"
        : "inset 0 10 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor:
      theme.palette.mode === "dark" ? "" : "rgba(17, 35, 80, 0.3)",

    "input:hover ~ &": {
      backgroundColor:
        theme.palette.mode === "dark" ? "#30404d" : "rgba(27, 221, 187, 1)",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background:
        theme.palette.mode === "dark" ? "yellow" : "rgba(206,217,224,.5)",
    },
  }));

  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "rgba(27, 221, 187, 1)",
    "input:hover ~ &": {
      backgroundColor: "rgba(27, 221, 187, 1)",
    },
  });

  // Inspired by blueprintjs
  function BpCheckbox(props: CheckboxProps) {
    return (
      <Checkbox
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ "aria-label": "Checkbox demo" }}
        {...props}
      />
    );
  }


 

  Axios.defaults.withCredentials = true;

  const router = useRouter();
  const handleClick = () => {
    router.push("/InputRenaksi");
  };

  const pilihTHL = () => {
    // Axios.get("http://localhost:3001/THL").then((response) => {
    //   console.log("Subid THL: ", response.data);
    //   response.data.map((data) => {
    //     if (data.sub_bidang === subid) {
    //       // setThlId([...thlId, data]);
    //       setThlId((nextData) => {
    //         return [data, ...nextData];
    //       });
    //       // setPortate({ ...setPortate, value: data.nama, label: data.nama });
    //       // console.log(data);
    //     }
    //   });
    // });
  };

  const [inProgram, setInProgram] = useState("");
  const [inKegiatan, setInKegiatan] = useState("");
  const [inTupoksiInti, setInTupoksiInti] = useState("");
  const [inSubKegiatan, setInSubKegiatan] = useState("");
  const [nip, setNip] = useState("");
  const [inTupoksiTambahan, setInTupoksiTambahan] = useState("");

  const [subid, setSubid] = useState("");
  const [thlId, setThlId] = useState([]);
  const [user, setUser] = useState("");
  const [thl, setThl] = useState();

  const btnUnggah = () => {
    Axios.post("http://localhost:3001/inputRenaksi", {
      program: inProgram,
      kegiatan: inKegiatan,
      tupoksiInti: inTupoksiInti,
      subKegiatan: inSubKegiatan,
      nip: nip,
      tupoksiTambahan: inTupoksiTambahan,
      thl: thl,
    });
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
    // thlId.map((data) => {
    //   console.log("ID 1: ", data);
    // });
    // console.log(portate);
    // console.log(thlId);
    // //!! AMBIL DATA THL BERDASARKAN NIP
    // Axios.get("http://localhost:3001/THL").then((response) => {
    //   response.data.map((data) => {
    //     // console.log("ID 2: ", data.nip);
    //     thlId.map((item) => {
    //       if (data.nip === item) {
    //         console.log("Nama: ", data.nama);
    //       }
    //     });
    //   });
    // });
    // console.log(thl);
  };

  const getLoggedInData = () => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      setNip(response.data.user[0].nip);
      setSubid(response.data.user[0].sub_bidang);
      // console.log("Subid User Logged In: ", response.data.user[0].sub_bidang);

      Axios.get("http://localhost:3001/THL").then((result) => {
        result.data.map((item) => {
          // console.log(item.sub_bidang);

          // console.log(item);
          if (item.sub_bidang === response.data.user[0].sub_bidang) {
            // console.log("NIP: ", item.nip);
            // console.log(item);
            setPortate(
              result.data.map((data) => ({
                ...setPortate,
                value: data.nama,
                label: data.nama,
                id: data.nip,
              }))
            );
            // setPortate((nextData) => {
            //   return [value: item.nama, ];
            // });
          }
        });
      });
    });
  };

  const [portate, setPortate] = useState({ value: "", label: "" });

  useEffect(() => {
    getLoggedInData();
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
        {/* <ul>
          {thlId.map((item) => (
            <li>{item.nama}</li>
          ))}
        </ul> */}
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
            menuShouldBlockScroll={false}
            // menuShouldScrollIntoView={false}
            onMenuOpen={pilihTHL}
            formatOptionLabel={formatOptionTHL}
            options={portate}
            onChange={(e) => {
              e.length === 0 ? console.log("Empty Array") : setThl(e?.id);
            }}
            // {
            //   value: "andrre",
            //   label: "Andrreas Waani",
            //   image: (
            //     <Image src="/SidebarProfile.svg" width={50} height={50} />
            //   ),
            // },
            // onMenuClose={pilihTHL}
            // onMenuOpen={pilihTHL}
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
          {thlId}
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
      {/* <div className={styles.wrapperRencana}>
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
      </div> */}

      <div>

        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Jan
            </Typography>
          }
          control={<BpCheckbox />}
        />
        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Feb
            </Typography>
          }
          control={<BpCheckbox />}
        />
        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Mar
            </Typography>
          }
          control={<BpCheckbox />}
        />
        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Apr
            </Typography>
          }
          control={<BpCheckbox />}
        />
        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Mei
            </Typography>
          }
          control={<BpCheckbox />}
        />
        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Jun
            </Typography>
          }
          control={<BpCheckbox />}
        />
        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Jul
            </Typography>
          }
          control={<BpCheckbox />}
        />
        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Agu
            </Typography>
          }
          control={<BpCheckbox />}
        />
        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Sep
            </Typography>
          }
          control={<BpCheckbox />}
        />
        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Okt
            </Typography>
          }
          control={<BpCheckbox />}
        />
        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Nov
            </Typography>
          }
          control={<BpCheckbox />}
        />
        <FormControlLabel
          label={
            <Typography
              style={{ color: "white", marginLeft: 22, position: "absolute", fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 22 }}
            >
              Des
            </Typography>
          }
          control={<BpCheckbox />}
        />
      </div>

      <Gap height={30} width={0} />

      {/* <ButtonAnimasi/> */}
      <Button
        title="Unggah"
        // onClick={btnUnggah}
        onClick={btnUnggah}
        
        className={`${btnStyles.btnType1} ${btnStyles.btnType3}`}
      />

      {/* <button onClick={openModal}>Open Modal</button> */}
      
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
