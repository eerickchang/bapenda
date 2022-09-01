import Button from "../Button";
import Gap from "../Gap";
import TxtInputDaftar from "../TxtInputDaftar";
import styles from "./ctndaftar.module.css";
import btnStyles from "../Button/button.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Axios from "axios";
import Select from "react-select";
import { useState, useEffect } from "react";

export default function CtnDaftar() {
  const router = useRouter();

  const [namaReg, setNamaReg] = useState("");
  const [sandiReg, setSandiReg] = useState("");
  const [nipReg, setNipReg] = useState("");
  const [noHpReg, setNoHpReg] = useState("");
  const [dataUser, setDataUser] = useState([]);
  const [activeSubBidang, setActiveSubBidang] = useState(false);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/get").then((response) => {
  //     setDataUser(response.data);
  //   });
  // }, []);

  const btnDaftar = () => {
    Axios.post("http://localhost:3001/daftar", {
      nama: namaReg,
      sandi: sandiReg,
      nip: nipReg,
      nohp: noHpReg,
    }).then(() => {
      alert("successfull insert");
    });
    router.push("/DaftarSukses");
  };

  const btnMasuk = () => {
    router.push("/");
  };

  // const [activeSubBidang1, setActiveSubBidang1] = useState(false);
  const [activeSubBidang2, setActiveSubBidang2] = useState(false);
  const [activeSubBidang3, setActiveSubBidang3] = useState(false);
  const [activeSubBidang4, setActiveSubBidang4] = useState(false);
  const [activeSubBidang5, setActiveSubBidang5] = useState(false);



  const optinsBidang = [
    {
      value1: 'sub-a',
      value2: 'sub-b',
      value3: 'sub-c',

      label1: 'Sub-A',
      label2: 'Sub-B',
      label3: 'Sub-C',
    },
    {
      value1: 'sub-a',
      value2: 'sub-b',
      value3: 'sub-c',

      label1: 'Sub-A',
      label2: 'Sub-B',
      label3: 'Sub-C',
    },
    {
      value1: 'sub-a',
      value2: 'sub-b',
      value3: 'sub-c',

      label1: 'Sub-A',
      label2: 'Sub-B',
      label3: 'Sub-C',
    },
    {
      value1: 'sub-a',
      value2: 'sub-b',
      value3: 'sub-c',

      label1: 'Sub-A',
      label2: 'Sub-B',
      label3: 'Sub-C',
    },
  ]



  const optionsJabatan = [
    {
      value: "kepalaBadan",
      label: "Kepala Badan",
    },
    {
      value: "sekertaris",
      label: "Sekertaris",
    },
    {
      value: "kepalaSubBagian",
      label: "Kepala Sub Bagian",
    },
    {
      value: "kepalaBidang",
      label: "Kepala Bidang",
    },
    {
      value: "kepalaSubBidang",
      label: "Kepala Sub Bidang",
    },
    {
      value: "staff",
      label: "Staff",
    },
  ];

  //OPTION JABATAN DROPDOWN
  const formatOptionLabelBidang = ({ label1, label2, label3 }) => (
    <div
      style={{
        display: "flex",
        padding: 0,
        margin: 0,
        // paddingTop: 5,
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: 17,
        cursor: "pointer",
        // color: 'white'
      }}
    >
      <div>{label1}</div>
      <div>{label2}</div>
      <div>{label3}</div>
    </div>
  );
  //OPTION JABATAN DROPDOWN
  const formatOptionLabelJabatan = ({ value, label }) => (
    <div
      style={{
        display: "flex",
        padding: 0,
        margin: 0,
        // paddingTop: 5,
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: 17,
        cursor: "pointer",
        // color: 'white'
      }}
    >
      <div>{label} </div>
    </div>
  );

  const customStylesDropdownJabatan = {
    option: (base, state) => ({
      ...base,
      // ...state,
      // width: 500,
      borderRadius: 10,
      backgroundColor: state.isSelected ? "#112350" : "white",
      color: state.isFocused ? "#112350" : "white",
      background: state.isFocused ? "white" : "#112350",
    }),

    menu: (provided, state) => ({
      ...provided,
      borderRadius: 10,
      border: "1px solid #23335B",
      // width: 223,
      // height: 2100,
      paddingTop: 7,
      paddingLeft: 8,
      paddingRight: 8,
      marginLeft: 0,
      backgroundColor: "#112350",
    }),

    control: (_, { selectProps: { width } }) => ({
      width: width,
      background: "rgba(194, 194, 194, 0.1)",
      width: 223,
      height: 53,
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: 16,
      cursor: "pointer",
      border: "1px solid #293961",
      borderRadius: 90,
      textAlign: "center",
      display: "flex",
      paddingLeft: 22,
    }),

    singleValue: (styles, state) => ({
      ...styles,
      color: "white",
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: 29,
    }),
  };

  const handleChange = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.headerTxt}>
        <p className={styles.txtStyled}>Daftar</p>
        <p className={styles.txtNormal}>Masuk</p>
        <p className={styles.txtNormal}>Sandi</p>
      </div>
      <div className={styles.content}>
        <div className={styles.contentKiri}>
          <TxtInputDaftar
            image="/namaPenggunaUmum.svg"
            title="Nama Pengguna"
            placeholder="Masukkan Nama"
            width={20}
            height={25}
            onChange={(e) => {
              setNamaReg(e.target.value);
            }}
            type="text"
          />
          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/Nip.svg"
            width={25}
            height={30}
            title="NIP / NPNP"
            placeholder="Masukkan NIP / NPNP"
            onChange={(e) => {
              setNipReg(e.target.value);
            }}
            type="number"
          />
          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/bidangUmum.svg"
            width={30}
            height={35}
            title="Bidang"
            placeholder="Pilih Sub Bidang"
            onChange={handleChange}
            type="text"
          />
          {/* DROPDOWN BIDANG */}
          <div className={styles.dropdownBidang}>
            <div className={styles.selectBidang}>
              <Image src={"/Dropdown_umum.svg"} width={30} height={30} />
            </div>
            <div className={styles.wrapperSelectBidang}>
              <div className={styles.dropdownListBidang}>
                <div className={styles.dropdownListBidang_item}>
                  <div>
                    <p>Sekertaris</p>
                  </div>
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={(e) => setActiveSubBidang2(!activeSubBidang2)}
                >
                  <div>
                    <p>Pajak Daerah</p>
                  </div>
                  {/* //! CONTOH DROPDOWN SUB-BIDANG */}
                  {activeSubBidang2 && (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p>Administrasi & ...</p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p>PKB & BBN-KB</p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p>PBBKB, PAP & ...</p>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={(e) => setActiveSubBidang3(!activeSubBidang3)}
                >
                  <div>
                    <p>Retribusi dan lain...</p>
                  </div>
                  {/* //! CONTOH DROPDOWN SUB-BIDANG */}
                  {activeSubBidang3 && (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p>Retribusi</p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p>Bagi Hasil Pajak & ...</p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p>Lain-lain Pendapat...</p>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={(e) => setActiveSubBidang4(!activeSubBidang4)}
                >
                  <div>
                    <p>Perencanaan dan ...</p>
                  </div>
                  {/* //! CONTOH DROPDOWN SUB-BIDANG */}
                  {activeSubBidang4 && (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p>Pengelolaan & ...</p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p>Pengembangan & ...</p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p>Pelaporan Data ...</p>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={(e) => setActiveSubBidang5(!activeSubBidang5)}
                >
                  <div>
                    <p>Pengendalian dan ...</p>
                  </div>
                  {/* //! CONTOH DROPDOWN SUB-BIDANG */}
                  {activeSubBidang5 && (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p>Evaluasi Kinerja</p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p>Pengendalian & ...</p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p>Pengendalian Pendapat...</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Gap width={67} height={0} />
        <div className={styles.contentKanan}>
          {/* DROPDOWN JABATAN */}
          <div className={styles.wrapperTitleBidangJabatan}>
            <Image src="/jabatanUmum.svg" width={30} height={35}/>
            <p className={styles.placeholder}>Jabatan</p>
          </div>
          <Select
          // filterOption={createFilter()}
            placeholder={<p style={{ marginLeft: -100 }}>Pilih Jabatan</p>}
            formatOptionLabel={formatOptionLabelJabatan}
            styles={customStylesDropdownJabatan}
            options={optionsJabatan}
            components={{ DropdownIndicator: null }}
            // menuIsOpen
            // openMenuOnClick
            // menuShouldScrollIntoView
            // menuPositionu
            // menuPlacement
            onMenuOpen

          />

          {/* <TxtInputDaftar
            image="/jabatanUmum.svg"
            width={30}
            height={35}
            title="Jabatan"
            placeholder="Pilih Jabatan"
            onChange={handleChange}
            type="text"
          />*/}

          {/* DROPDOWN JABATAN */}
          {/* <div className={styles.dropdownJabatan}>
            <div className={styles.selectJabatan}>
              <Image src={"/Dropdown_umum.svg"} width={30} height={30} />
            </div>
            <div className={styles.dropdownList}>
              {jabatan.map((jab) => (
                <div className={styles.dropdownList_item}>
                  <p>{jab.namaJabatan}</p>
                </div>
              ))}
            </div>
          </div> */}

          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/noHpUmum.svg"
            width={28}
            height={28}
            title="No HP"
            placeholder="Masukkan No HP"
            type="number"
            onChange={(e) => setNoHpReg(e.target.value)}
          />
          <Gap width={0} height={35} />
          <TxtInputDaftar
            image="/Password.svg"
            width={20}
            height={25}
            title="Password"
            placeholder="Masukkan Kata Sandi"
            type="password"
            onChange={(e) => {
              setSandiReg(e.target.value);
            }}
          />
        </div>
      </div>
      <Gap width={0} height={72} />
      <Button
        className={btnStyles.container}
        title="Daftar"
        onClick={btnDaftar}
      />
      <Gap width={0} height={20} />
      <Button
        className={`${btnStyles.container} ${btnStyles.btnDaftar}`}
        title="Masuk"
        onClick={btnMasuk}
      />
    </div>
  );
}
