import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";
import Gap from "../Gap";
import TxtInputRenaksi from "../TxtInputRenaksi";
import styles from "./ContentInputRenaksiP.module.css";
import Select from "react-select";
import Axios from "axios";

import { styled } from "@mui/material/styles";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";

// import Flatpickr from "react-flatpickr";
import RangePlugin from "flatpickr/dist/plugins/rangePlugin";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/light.css";

// import flatpickr from "flatpickr";
import moment from "moment";
// const flatpickr = require("flatpickr");

import React from "react";

export default function ContentInputRenaksiP() {
  // !MONTH PICKER
  // const [selected, setSelected] = useState(null);
  // const presets = [
  //   {
  //     title: "This month",
  //     start: moment().startOf("month").toDate(),
  //     end: moment().endOf("month").toDate(),
  //   },
  //   {
  //     title: "Past 3 months",
  //     start: moment().subtract(2, "month").startOf("month").toDate(),
  //     end: moment().endOf("month").toDate(),
  //   },
  //   {
  //     title: "Past 6 months",
  //     start: moment().subtract(5, "month").startOf("month").toDate(),
  //     end: moment().endOf("month").toDate(),
  //   },
  //   {
  //     title: "This Year",
  //     start: moment().startOf("year").toDate(),
  //     end: moment().endOf("year").toDate(),
  //   },
  // ];

  // !CHECKBOX RENCANA BULAN
  const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: 10,
    width: 70,
    height: 60,
    // boxShadow:
    //   theme.palette.mode === "dark"
    //     ? "0 0 0 1px rgb(16 22 26 / 40%)"
    //     : "inset 0 10 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor:
      theme.palette.mode === "dark" ? "" : "rgba(17, 35, 80, 0.3)",

    "input:hover ~ &": {
      backgroundColor:
        theme.palette.mode === "dark" ? "#30404d" : "rgba(27, 221, 187, 1)",
    },
    // "input:disabled ~ &": {
    //   boxShadow: "none",
    //   background:
    //     theme.palette.mode === "dark" ? "yellow" : "rgba(206,217,224,.5)",
    // },
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

  const [inProgram, setInProgram] = useState("");
  const [inKegiatan, setInKegiatan] = useState("");
  const [inTupoksiInti, setInTupoksiInti] = useState("");
  const [inSubKegiatan, setInSubKegiatan] = useState("");
  const [nip, setNip] = useState("");
  const [inTupoksiTambahan, setInTupoksiTambahan] = useState("");
  const [thl, setThl] = useState("");
  const [rencana, setRencana] = useState("");
  const [nama, setNama] = useState("");

  const selectInputRef = useRef();

  const btnUnggah = () => {
    Axios.post("http://localhost:3001/inputRenaksi", {
      program: inProgram,
      kegiatan: inKegiatan,
      tupoksiInti: inTupoksiInti,
      subKegiatan: inSubKegiatan,
      nip: nip,
      tupoksiTambahan: inTupoksiTambahan,
      thl: thl,
      rencana: rencana,
      startDate: startDate,
      endDate: endDate,
    });
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
    setInProgram("");
    setInKegiatan("");
    setInTupoksiInti("");
    setInSubKegiatan("");
    setThl("");
    setInTupoksiTambahan("");
    setStartDate("");
    setEndDate("");
    // selectInputRef.current.select.clearValue();
    // setInTupoksiTambahan("");
    // console.log(rencana);
    // document.getElementById("inputFieldTupoksiTambahan")?.nodeValue = "";
    window.location.reload();
  };
  // });
  // useEffect(() => {
  // setShowModal(true);
  // }, [3]);

  // if (Response.length > 0) {
  //   setShowModal(true);
  // }

  const shouldLog = useRef(true);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      Axios.get("http://localhost:3001/masuk").then((response) => {
        setNama(response.data.user[0].nama);
        // console.log("NIP: ", response.data.user[0].nip);
        setNama(response.data.user[0].nama);
        setNip(response.data.user[0].nip);
        Axios.get("http://localhost:3001/THL").then((result) => {
          result.data.map((data) => {
            // console.log(data.nip);
            if (response.data.user[0].sub_bidang === data.sub_bidang) {
              setPortate((nextData) => {
                return [
                  ...nextData,
                  { value: data.nama, label: data.nama, id: data.nip },
                ];
              });
              // setPortate(
              //   result.data.map((item) => ({
              //     ...setPortate,
              //     value: item.nama,
              //     label: item.nama,
              //     id: item.nip,
              //   }))
              // );
            }
          });
        });
      });
      // if (Response.length > 0) {
      //   setShowModal(true);
      // }
    }
  }, []);

  const [portate, setPortate] = useState([]);

  //!modals
  const [showModal, setShowModal] = useState(false);

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

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitle}>
        <div>
          <Image src={"/Input2.svg"} width={50} height={40} />
        </div>
        <p style={{ marginLeft: 5, marginBottom: 10 }}>MASUKAN RENAKSI</p>
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
              <p
                className={styles.selectItem}
                onClick={() => console.log("Oke")}
              >
                Unduh File
              </p>
            </div>
            <div className={styles.selectItemFile}>
              <Image src={"/IconUnggah.svg"} width={38} height={35} />
              <p className={styles.selectItem}>Unggah File</p>
            </div>
          </div>
        )}
      </div>
      <Gap height={146} width={0} />
      <div className={styles.wrapperInput}>
        <div>
          <TxtInputRenaksi
            title="Program"
            placeholder="masukan program yang akan dilakukan"
            onChange={(e) => setInProgram(e.target.value)}
            value={inProgram}
          />
          <Gap height={56} width={0} />
          <TxtInputRenaksi
            title="Kegiatan"
            placeholder="masukan kegiatan yang akan dilakukan"
            onChange={(e) => setInKegiatan(e.target.value)}
            value={inKegiatan}
          />
          <Gap height={56} width={0} />
          <TxtInputRenaksi
            title="Tupoksi Inti"
            placeholder="masukan tupoksi inti yang akan dilakukan"
            onChange={(e) => setInTupoksiInti(e.target.value)}
            value={inTupoksiInti}
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
          {/* <Gap width={0} height={5}/>  */}
          {/* <Select
            downChevron
            menuShouldBlockScroll={false}
            // onChange={(e) => {
              //   e.length === 0 ? console.log("Empty Array") : setThl(e.id);
            // }}
            // value={thl}
            onChange={(e) => setThl(e.id)}
            // menuShouldScrollIntoView={false}
            formatOptionLabel={formatOptionTHL}
            options={portate}
            styles={customStylesTHL}
            components={{
              DropdownIndicator: null,
              ClearIndicator: null,
            }}
            placeholder={
              <div className={styles.placeholder}>
              pilih THL yang akan bertugas
              </div>
            }
          /> */}
          <TxtInputRenaksi
            title="Sub Kegiatan"
            placeholder="masukan sub kegiatan yang akan dilakukan"
            onChange={(e) => setInSubKegiatan(e.target.value)}
            value={inSubKegiatan}
          />
          <Gap height={56} width={0} />
          <p className={styles.titleTupoksi}>THL</p>
          <Select
            downChevron
            menuShouldBlockScroll={false}
            formatOptionLabel={formatOptionTHL}
            components={{
              DropdownIndicator: null,
              ClearIndicator: null,
            }}
            styles={customStylesTHL}
            options={portate}
            placeholder={
              <div className={styles.placeholder}>
                pilih THL yang akan bertugas
              </div>
            }
            // onChange={(e) => setThl(e.id)}
            // value={thl}
            onChange={(e) => setThl(e.id)}
          />
          <Gap height={56} width={0} />
          <p className={styles.titleTupoksi}>Tupoksi tambahan</p>
          <Select
            downChevron
            menuShouldBlockScroll={false}
            formatOptionLabel={formatOptionLabelTupoksi}
            components={{
              DropdownIndicator: null,
              ClearIndicator: null,
            }}
            styles={customStyles}
            options={optionsTupoksi}
            placeholder={
              <div className={styles.placeholder}>
                pilih tupoksi tambahan yang akan dilakukan
              </div>
            }
            onChange={(e) => setInTupoksiTambahan(e?.label)}
            // inputValue={inTupoksiTambahan}
            // value="Erick"
            // onChange={(inTupoksiTambahan) =>
            //   console.log(inTupoksiTambahan?.label)
            // }
          />
        </div>
      </div>
      <Gap height={24} width={0} />
      <p className={styles.titleTupoksi}>Rencana Pelaksana</p>
      <div className={styles.wrapperPickMonth}>
        <div>
          <p>Dari Bulan*</p>
          <input
            type="month"
            onChange={(e) => setStartDate(e.target.value + "-01")}
          />
        </div>
        <div style={{ marginLeft: 133 }}>
          <p>Sampai Bulan*</p>
          <input
            type="month"
            onChange={(e) => setEndDate(e.target.value + "-01")}
          />
        </div>
      </div>

      {/* <Gap height={30} width={0} /> */}
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
            Input Renaksi {nama}
            <b>Berhasil</b>
            <div className={styles.checkCircle}>
              <Image src={"/Check-circle.svg"} width={25} height={25} />
            </div>
          </p>
        </div>
      ) : null}
    </div>
  );
}
