import stylesS from "./ContentDaftarkegiatan.module.css";

import React, { useState, useEffect, useRef } from "react";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./TableMUI.module.css";
import Image from "next/image";
import moment from "moment";

import Modal from "react-modal";
import Gap from "../Gap";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";
import Axios from "axios";
import { useRouter } from "next/router";
import AmbilDataRenaksi from "../AmbilDataRenaksi";

Axios.defaults.withCredentials = true;

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // An function that increment 👆🏻 the previous state like here
  // is better than directly setting `value + 1`
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  // ? CUSTOM STYLE MODAL UNGGAH N HAPUS RENAKSI
  const custom = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 878,
      borderRadius: 20,
      paddingLeft: 61,
      height: 362,
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overlay: "#112350",
      backgroundColor: "white",
      zIndex: 1001,
      scroll: false,
    },
    overlay: {
      position: "fixed",
      marginTop: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(17, 35, 80, 0.5)",
      zIndex: 1000,
    },
  };

  // ? CUSTOM STYLE MODAL UBAH JADWAL RENAKSI
  const customUbah = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 878,
      borderRadius: 20,
      paddingLeft: 61,
      height: 433,
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overlay: "#112350",
      backgroundColor: "white",
      zIndex: 1001,
      scroll: false,
    },
    overlay: {
      position: "fixed",
      marginTop: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(17, 35, 80, 0.5)",
      zIndex: 1000,
    },
  };

  //style row
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");

  const [renaksiPegawai, setRenaksiPegawai] = useState([]);

  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalUbahJadwalIsOpen, setIsOpenModalUbahJadwal] = useState(false);
  const [modalHapusRenaksiIsOpen, setIsOpenMOdalHapusRenaksi] = useState(false);
  //!modals
  const [showModal, setShowModal] = useState(false);
  const [showModal_Ubah, setShowModal_Ubah] = useState(false);
  const [showModal_Hapus, setShowModal_Hapus] = useState(false);

  const btnUnggah = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const btnUbah = () => {
    setShowModal_Ubah(true);
    setTimeout(() => {
      setShowModal_Ubah(false);
    }, 3000);
  };

  const btnHapus = () => {
    setShowModal_Hapus(true);
    setTimeout(() => {
      setShowModal_Hapus(false);
    }, 3000);
  };

  const btnTerima = () => {
    Axios.get("http://localhost:3001/kasubidAmbilRenaksiMRD").then(
      (ambilRenaksi) => {
        ambilRenaksi.data.map((renaksiMRD) => {
          if (row.nip === renaksiMRD.nip) {
            Axios.post("http://localhost:3001/kasubidMenerimaRenaksi", {
              idRenaksi: renaksiMRD.id_renaksi,
            });
          }
        });
      }
    );

    Axios.post("http://localhost:3001/kasubidUpdateRenaksiTPT", {
      nip: row.nip,
    });
  };

  // ! MODAL UNGGAH LAPORAN
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // ! MODAL UBAH JADAWAL
  function openModalUbah() {
    setIsOpenModalUbahJadwal(true);
  }

  function afterOpenModalUbah() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModalUbah() {
    setIsOpenModalUbahJadwal(false);
  }

  // ! MODAL HAPUS RENAKSI
  function openModalHapus() {
    setIsOpenMOdalHapusRenaksi(true);
  }

  function afterOpenModalHapus() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModalHapus() {
    setIsOpenMOdalHapusRenaksi(false);
  }

  // call your hook here
  const forceUpdate = useForceUpdate();

  return (
    <React.Fragment>
      <TableRow
        hover
        className={`${styles.tableRow}`}
        sx={{ "& > *": { borderBottom: "" } }}
      >
        {/* //! DATA ROW */}
        <TableCell>
          <p className={stylesS.styleTxtRow}>{row.nama}</p>
        </TableCell>
        <TableCell>
          <p className={stylesS.styleTxtRow}>{row.sub_bidang}</p>
        </TableCell>
        <TableCell>
          <div className={stylesS.styleTxtRow}>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <button className={styles.btnTerima} onClick={btnTerima}>
                <Image src={"/Terima.svg"} width={20} height={20} /> Terima
              </button>
              <Gap width={40} height={0} />
              <button
                className={styles.btnTolak}
                onClick={() => console.log(renaksiPegawai)}
              >
                <Image src={"/Tolak.svg"} width={20} height={20} /> Tolak
              </button>
            </div>
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ContentDaftarKegiatan() {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [pegawai, setPegawai] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/kasubidAmbilPegawaiPT").then(
          (ambilPegawai) => {
            ambilPegawai.data.map((pegawai) => {
              if (masuk.data.user[0].sub_bidang === pegawai.sub_bidang) {
                setPegawai((nextData) => {
                  return [...nextData, pegawai];
                });
              }
            });
          }
        );
      });
    }
  }, []);

  const router = useRouter();

  const lihatSemua = () => {
    // setActiveDropdown(!activeDropdown);
    // console.log(dataRenaksi);
    router.push("/Kasubid/TinjauRenaksiLihatSemua");
  };

  const rowsSubagian = [
    {
      id: 1,
      nama: "Jerry sumendap",
      keterangan: "tolong akang",
    },
    {
      id: 2,
      nama: "Jerry sumendap",
      keterangan: "tolong akang",
    },
    {
      id: 3,
      nama: "Jerry sumendap",
      keterangan: "tolong akang",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const btnTerima = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitleDaftarKegiatan}>
              <Image src={"/TinjauRenaksiTitle.svg"} width={50} height={50} />
              <p className={stylesS.txtTitle}>Tinjau Renaksi</p>
            </div>
          </div>
          <div className={stylesS.wrapFilter}>
            <button className={styles.btnTerimaAll}>
              <Image src={"/Terima.svg"} width={25} height={25} />
              Terima Semua
            </button>
            <Gap width={15} />
            <button className={styles.btnTerimaAll}>
              <Image src={"/Tolak.svg"} width={25} height={25} />
              Tolak Semua
            </button>
            <button onClick={lihatSemua} className={stylesS.btnFilter}>
              <Image src={"/LihatSemua.svg"} width={25} height={25} />
              Lihat Semua
            </button>
          </div>
          <Gap height={106} width={0} />
          <TableContainer
            style={{ paddingLeft: 50, paddingRight: 40, zIndex: 998 }}
          >
            <Table sx={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell className={styles.styleHeader}>Pegawai</TableCell>
                  <TableCell className={styles.styleHeader}>
                    Sub Bidang
                  </TableCell>
                  <TableCell className={styles.styleHeader}>Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pegawai.map((row) => (
                  <TableRow hover className={styles.styleRow} key={row.nip}>
                    <TableCell className={styles.styleData}>
                      <p style={{ fontWeight: 600 }}>{row.nama}</p>
                    </TableCell>
                    <TableCell className={styles.styleData}>
                      {row.sub_bidang}
                    </TableCell>
                    <TableCell>
                      <div className={styles.styleTxtRow}>
                        <div style={{ flexDirection: "row", display: "flex" }}>
                          <button
                            className={styles.btnTerima}
                            onClick={() => btnTerima()}
                          >
                            <Image src={"/Terima.svg"} width={20} height={20} />{" "}
                            Terima
                          </button>
                          {showModal ? (
                            <div
                              className={styles.modal}
                              onClick={() => setShowModal(false)}
                            >
                              <p>
                                Input Renaksi Feren <b>Berhasil</b>
                                <div className={styles.checkCircle}>
                                  <Image
                                    src={"/Check-circle.svg"}
                                    width={25}
                                    height={25}
                                  />
                                </div>
                              </p>
                            </div>
                          ) : null}
                          <Gap width={40} height={0} />
                          <button
                            className={styles.btnTolak}
                            // onClick={() => console.log(renaksiPegawai)}
                          >
                            <Image src={"/Tolak.svg"} width={20} height={20} />{" "}
                            Tolak
                          </button>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}
