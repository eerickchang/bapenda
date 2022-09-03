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
  const [jabatanReg, setJabatanReg] = useState("");
  const [bidangReg, setBidangReg] = useState("");
  const [subBidangReg, setSubBidangReg] = useState("");
  const [dataUser, setDataUser] = useState([]);
  const [activeSubBidang, setActiveSubBidang] = useState(false);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/get").then((response) => {
  //     setDataUser(response.data);
  //   });
  // }, []);

  const btnDaftar = () => {
    if (bidangReg === "Pengembangan Teknologi") {
      setBidangReg("Perencanaan dan");
      setSubBidangReg("Pengembangan Teknologi");
      console.log("Bidang: ", bidangReg);
      console.log("Sub Bidang: ", subBidangReg);
    }

    Axios.post("http://localhost:3001/daftar", {
      nama: namaReg,
      sandi: sandiReg,
      nip: nipReg,
      nohp: noHpReg,
      jabatan: jabatanReg,
      bidang: bidangReg,
    }).then(() => {
      alert("successfull insert");
    });
    router.push("/Umum/DaftarSukses");
  };

  const btnMasuk = () => {
    router.push("/");
  };

  const [activeSubBidang1, setActiveSubBidang1] = useState(false);
  const [activeSubBidang2, setActiveSubBidang2] = useState(false);
  const [activeSubBidang3, setActiveSubBidang3] = useState(false);
  const [activeSubBidang4, setActiveSubBidang4] = useState(false);
  const [activeSubBidang5, setActiveSubBidang5] = useState(false);
  const [activeJabatan, setActiveJabatan] = useState(true);

  const jabatan = [
    {
      namaJabatan: "Kepala Badan",
    },
    {
      namaJabatan: "Sekretaris",
    },
    {
      namaJabatan: "Kasubag",
    },
    {
      namaJabatan: "Kabid",
    },
    {
      namaJabatan: "Kasubid",
    },
    {
      namaJabatan: "Staff",
    },
    {
      namaJabatan: "THL",
    },
  ];

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
            value={bidangReg}
          />
          {/* {console.log(bidangReg)} */}
          {/* DROPDOWN BIDANG (KHUSUS KABID) */}
          <div className={styles.dropdownBidang}>
            <div className={styles.selectBidang}>
              <Image src={"/Dropdown_umum.svg"} width={30} height={30} />
            </div>
            <div className={styles.wrapperSelectBidang}>
              <div className={styles.dropdownListBidang}>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={(e) => setActiveSubBidang1(!activeSubBidang1)}
                >
                  <div>
                    <p onClick={() => setBidangReg("Sekretaris")}>Sekretaris</p>
                  </div>

                  {/* {jabatanReg === "Kabid"
                    ? activeSubBidang1 === false
                    : activeSubBidang1 === true} */}

                  {activeSubBidang1 && (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => setBidangReg("Hukum dan Kepegawaian")}
                        >
                          Hukum & Kepegawaian
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() =>
                            setBidangReg("Perencanaan dan Keuangan")
                          }
                        >
                          Perencanaan & Keuangan
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p onClick={() => setBidangReg("Umum")}>Umum</p>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={() => setActiveSubBidang2(!activeSubBidang2)}
                >
                  <div>
                    <p onClick={() => setBidangReg("Pajak Daerah")}>
                      Pajak Daerah
                    </p>
                  </div>
                  {/* //! DROPDOWN SUB-BIDANG PAJAK DAERAH */}
                  {activeSubBidang2 && (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() =>
                            setBidangReg("Administrasi dan Pelayanan Pajak")
                          }
                        >
                          Administrasi & Pelayanan Pajak
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p onClick={() => setBidangReg("PKB dan BBN-KB")}>
                          PKB & BBN-KB
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() =>
                            setBidangReg("PBBKB, PAP dan Pajak Rokok")
                          }
                        >
                          PBBKB, PAP & Pajak Rokok
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={() => setActiveSubBidang3(!activeSubBidang3)}
                >
                  <div>
                    <p
                      onClick={() =>
                        setBidangReg("Retribusi dan Lain-lain Pendapatan")
                      }
                    >
                      Retribusi & Lain-lain Pendapatan
                    </p>
                  </div>
                  {/* //! DROPDOWN SUB-BIDANG RETRIBUSI DAN LAIN LAIN PENDAPATAN */}
                  {activeSubBidang3 && (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p onClick={() => setBidangReg("Retribusi")}>
                          Retribusi
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() =>
                            setBidangReg(
                              "Bagi Hasil Pajak dan Bagi Hasil Bukan Pajak"
                            )
                          }
                        >
                          Bagi Hasil Pajak & Bagi Hasil Bukan Pajak
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p onClick={() => setBidangReg("Lain-lain Pendapatan")}>
                          Lain-lain Pendapatan
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={() => setActiveSubBidang4(!activeSubBidang4)}
                >
                  <div>
                    <p
                      onClick={() =>
                        setBidangReg("Perencanaan dan Pengembangan")
                      }
                    >
                      Perencanaan & Pengembangan
                    </p>
                  </div>
                  {/* //! DROPDOWN SUB-BIDANG PERENCANAAN DAN PENGEMBANGAN */}
                  {activeSubBidang4 && (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() =>
                            setBidangReg("Pengelolaan Pendapatan Daerah")
                          }
                        >
                          Pengelolaan Pendapatan Daerah
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => setBidangReg("Pengembangan Teknologi")}
                        >
                          Pengembangan Teknologi
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() =>
                            setBidangReg("Pelaporan Data Pendapatan")
                          }
                        >
                          Pelaporan Data Pendapatan
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={() => setActiveSubBidang5(!activeSubBidang5)}
                >
                  <div>
                    <p
                      onClick={() => setBidangReg("Pengendalian dan Evaluasi")}
                    >
                      Pengendalian & Evaluasi
                    </p>
                  </div>
                  {/* //! DROPDOWN SUB-BIDANG PENGENDALIAN DAN EVALUASI */}
                  {activeSubBidang5 && (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p onClick={() => setBidangReg("Evaluasi Kinerja")}>
                          Evaluasi Kinerja
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() =>
                            setBidangReg(
                              "Pengendalian dan Pembinaan Administrasi"
                            )
                          }
                        >
                          Pengendalian & Pembinaan Administrasi
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() =>
                            setBidangReg("Pengendalian Pendapatan Daerah")
                          }
                        >
                          Pengendalian Pendapatan Daerah
                        </p>
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
            value={jabatanReg}
          />

          {/* DROPDOWN JABATAN */}
          <div className={styles.dropdownJabatan}>
            <div className={styles.selectJabatan}>
              <Image src={"/Dropdown_umum.svg"} width={30} height={30} />
            </div>
            {activeJabatan && (
              <div className={styles.dropdownList}>
                {jabatan.map((jab) => (
                  <div
                    className={styles.dropdownList_item}
                    onClick={() => {
                      setJabatanReg(`${jab.namaJabatan}`);
                      setActiveJabatan(!activeJabatan);
                      setTimeout(() => {
                        setActiveJabatan(true);
                      }, 10);
                    }}
                  >
                    <p>{jab.namaJabatan}</p>
                  </div>
                ))}
              </div>
            )}
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
