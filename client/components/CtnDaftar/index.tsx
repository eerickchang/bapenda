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

  const [jabatan, setJabatan] = useState([
    {
      namaJabatan: "Kepala Badan",
    },
    {
      namaJabatan: "Sekertaris",
    },
    {
      namaJabatan: "Kepala Sub Bagian",
    },
    {
      namaJabatan: "Kepala Bidang",
    },
    {
      namaJabatan: "Kepala Sub Bidang",
    },
    {
      namaJabatan: "Staff",
    },
  ]);

  const [bidang, setBidang] = useState([
    {
      namaBidang: "Sekertaris",
    },
    {
      namaBidang: "Pajak Daerah",
      namaSetBid1: "Administrasi & ...",
      namaSetBid2: "PKB & BBN-KB",
      namaSetBid3: "PBBKB, PAP & ...",
    },
    {
      namaBidang: "Retribusi dan lain...",
      namaSetBid1: "Retribusi",
      namaSetBid2: "Bagi Hasil Pajak & ...",
      namaSetBid3: "Lain-lain Pendapat...",
    },
    {
      namaBidang: "Perencanaan dan ...",
      namaSetBid1: "Pengelolaan & ...",
      namaSetBid2: "Pengembangan & ...",
      namaSetBid3: "Pelaporan Data ...",
    },
    {
      namaBidang: "Pajak Daerah",
      namaSetBid1: "Administrasi & ...",
      namaSetBid2: "PKB & BBN-KB",
      namaSetBid3: "PBBKB, PAP & ...",
    },
    {
      namaBidang: "Pengendalian dan ...",
      namaSetBid1: "Evaluasi Kinerja",
      namaSetBid2: "Pengendalian & ...",
      namaSetBid3: "Pengendalian Pendapat...",
    },
  ]);

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
          <TxtInputDaftar
            image="/jabatanUmum.svg"
            width={30}
            height={35}
            title="Jabatan"
            placeholder="Pilih Jabatan"
            onChange={handleChange}
            type="text"
          />
          {/* DROPDOWN JABATAN */}
          <div className={styles.dropdownJabatan}>
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
          </div>

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
