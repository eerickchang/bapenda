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
import inputStyles from "../TxtInputDaftar/txtinputdaftar.module.css";

export default function CtnDaftar() {
  const router = useRouter();

  const [namaReg, setNamaReg] = useState("");
  const [sandiReg, setSandiReg] = useState("");
  const [nipReg, setNipReg] = useState("");
  const [noHpReg, setNoHpReg] = useState("");
  const [jabatanReg, setJabatanReg] = useState("");
  const [bidangReg, setBidangReg] = useState("");
  const [subBidangReg, setSubBidangReg] = useState("");
  const [valueTxt, setValueTxt] = useState("");
  const [dataUser, setDataUser] = useState([]);
  const [activeSubBidang, setActiveSubBidang] = useState(false);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/get").then((response) => {
  //     setDataUser(response.data);
  //   });
  // }, []);

  const btnDaftar = () => {
    console.log(subBidangReg);
    console.log(bidangReg);
    Axios.post("http://localhost:3001/daftar", {
      nama: namaReg,
      sandi: sandiReg,
      nip: nipReg,
      nohp: noHpReg,
      jabatan: jabatanReg,
      bidang: bidangReg,
      subBidang: subBidangReg,
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
            id="user_name"
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
            id="user_nip"
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
            value={valueTxt}
            className={`${inputStyles.container} ${inputStyles.bidang}`}
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
                    <p
                      onClick={() => {
                        setValueTxt("Sekretaris");
                        setBidangReg("Sekretaris");
                      }}
                    >
                      Sekretaris
                    </p>
                  </div>
                  {/* {jabatanReg === "Kabid"
                    ? activeSubBidang1 === false
                    : activeSubBidang1 === true} */}
                  {activeSubBidang1 &&
                  (jabatanReg === "Staff" ||
                    jabatanReg === "THL" ||
                    jabatanReg === "Kasubid" ||
                    jabatanReg === "Kasubag") ? (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("Hukum dan Kepegawaian");
                            setBidangReg("Sekretaris");
                            setValueTxt("Hukum dan Kepegawaian");
                          }}
                        >
                          Hukum & Kepegawaian
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("Perencanaan dan Keuangan");
                            setBidangReg("Sekretaris");
                            setValueTxt("Perencanaan dan Keuangan");
                          }}
                        >
                          Perencanaan & Keuangan
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("Umum");
                            setBidangReg("Sekretaris");
                            setValueTxt("Umum");
                          }}
                        >
                          Umum
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={() => setActiveSubBidang2(!activeSubBidang2)}
                >
                  <div>
                    <p
                      onClick={() => {
                        setValueTxt("Pajak Daerah");
                        setBidangReg("Pajak Daerah");
                      }}
                    >
                      Pajak Daerah
                    </p>
                  </div>
                  {/* //! DROPDOWN SUB-BIDANG PAJAK DAERAH */}
                  {activeSubBidang2 &&
                  (jabatanReg === "Staff" ||
                    jabatanReg === "THL" ||
                    jabatanReg === "Kasubid" ||
                    jabatanReg === "Kasubag") ? (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("Administrasi dan Pelayanan Pajak");
                            setBidangReg("Pajak Daerah");
                            setValueTxt("Administrasi dan Pelayanan Pajak");
                          }}
                        >
                          Administrasi & Pelayanan Pajak
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("PKB dan BBN-KB");
                            setBidangReg("Pajak Daerah");
                            setValueTxt("PKB dan BBN-KB");
                          }}
                        >
                          PKB & BBN-KB
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("PBBKB, PAP dan Pajak Rokok");
                            setBidangReg("Pajak Daerah");
                            setValueTxt("PBBKB, PAP dan Pajak Rokok");
                          }}
                        >
                          PBBKB, PAP & Pajak Rokok
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={() => setActiveSubBidang3(!activeSubBidang3)}
                >
                  <div>
                    <p
                      onClick={() => {
                        setValueTxt("Retribusi dan Lain-lain Pendapatan");
                        setBidangReg("Retribusi dan Lain-lain Pendapatan");
                      }}
                    >
                      Retribusi & Lain-lain Pendapatan
                    </p>
                  </div>
                  {/* //! DROPDOWN SUB-BIDANG RETRIBUSI DAN LAIN LAIN PENDAPATAN */}
                  {activeSubBidang3 &&
                  (jabatanReg === "Staff" ||
                    jabatanReg === "THL" ||
                    jabatanReg === "Kasubid" ||
                    jabatanReg === "Kasubag") ? (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("Retribusi");
                            setBidangReg("Retribusi dan Lain-lain Pendapatan");
                            setValueTxt("Retribusi");
                          }}
                        >
                          Retribusi
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg(
                              "Bagi Hasil Pajak dan Bagi Hasil Bukan Pajak"
                            );
                            setBidangReg("Retribusi dan Lain-lain Pendapatan");
                            setValueTxt(
                              "Bagi Hasil Pajak dan Bagi Hasil Bukan Pajak"
                            );
                          }}
                        >
                          Bagi Hasil Pajak & Bagi Hasil Bukan Pajak
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("Lain-lain Pendapatan");
                            setBidangReg("Retribusi dan Lain-lain Pendapatan");
                            setValueTxt("Lain-lain Pendapatan");
                          }}
                        >
                          Lain-lain Pendapatan
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={() => setActiveSubBidang4(!activeSubBidang4)}
                >
                  <div>
                    <p
                      onClick={() => {
                        setValueTxt("Perencanaan dan Pengembangan");
                        setBidangReg("Perencanaan dan Pengembangan");
                      }}
                    >
                      Perencanaan & Pengembangan
                    </p>
                  </div>
                  {/* //! DROPDOWN SUB-BIDANG PERENCANAAN DAN PENGEMBANGAN */}
                  {activeSubBidang4 &&
                  (jabatanReg === "Staff" ||
                    jabatanReg === "THL" ||
                    jabatanReg === "Kasubid" ||
                    jabatanReg === "Kasubag") ? (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("Pengelolaan Pendapatan Daerah");
                            setBidangReg("Perencanaan dan Pengembangan");
                            setValueTxt("Pengelolaan Pendapatan Daerah");
                          }}
                        >
                          Pengelolaan Pendapatan Daerah
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("Pengembangan Teknologi");
                            setBidangReg("Perencanaan dan Pengembangan");
                            setValueTxt("Pengembangan Teknologi");
                          }}
                        >
                          Pengembangan Teknologi
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("Pelaporan Data Pendapatan");
                            setBidangReg("Perencanaan dan Pengembangan");
                            setValueTxt("Pelaporan Data Pendapatan");
                          }}
                        >
                          Pelaporan Data Pendapatan
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  className={styles.dropdownListBidang_item}
                  onClick={() => setActiveSubBidang5(!activeSubBidang5)}
                >
                  <div>
                    <p
                      onClick={() => {
                        setValueTxt("Pengendalian dan Evaluasi");
                        setBidangReg("Pengendalian dan Evaluasi");
                      }}
                    >
                      Pengendalian & Evaluasi
                    </p>
                  </div>
                  {/* //! DROPDOWN SUB-BIDANG PENGENDALIAN DAN EVALUASI */}
                  {activeSubBidang5 &&
                  (jabatanReg === "Staff" ||
                    jabatanReg === "THL" ||
                    jabatanReg === "Kasubid" ||
                    jabatanReg === "Kasubag") ? (
                    <div className={styles.dropdownSubBidang}>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("Evaluasi Kinerja");
                            setBidangReg("Pengendalian dan Evaluasi");
                            setValueTxt("Evaluasi Kinerja");
                          }}
                        >
                          Evaluasi Kinerja
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg(
                              "Pengendalian dan Pembinaan Administrasi"
                            );
                            setBidangReg("Pengendalian dan Evaluasi");
                            setValueTxt(
                              "Pengendalian dan Pembinaan Administrasi"
                            );
                          }}
                        >
                          Pengendalian & Pembinaan Administrasi
                        </p>
                      </div>
                      <div className={styles.dropdownListSubBidang}>
                        <p
                          onClick={() => {
                            setSubBidangReg("Pengendalian Pendapatan Daerah");
                            setBidangReg("Pengendalian dan Evaluasi");
                            setValueTxt("Pengendalian Pendapatan Daerah");
                          }}
                        >
                          Pengendalian Pendapatan Daerah
                        </p>
                      </div>
                    </div>
                  ) : null}
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
            onChange={(e) => {
              setSandiReg(e.target.value);
            }}
            id="user_password"
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
