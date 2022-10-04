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
import btnStyles from "../../../KasubidComponent/Button/button.module.css";
import Axios from "axios";
import { useRouter } from "next/router";
import AmbilDataRenaksi from "../AmbilDataRenaksi";

import Checkbox from "@mui/material/Checkbox";

Axios.defaults.withCredentials = true;

export default function CTinjauRenaksiPegawai() {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [pegawai, setPegawai] = useState([]);
  const [nama, setNama] = useState("");
  let arr = [];

  const shouldLog = useRef(true);
  useEffect(() => {
    if (!router.isReady) return;
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      console.log(router.query.nip);
      Axios.get("http://localhost:3001/kasubidAmbilRenaksiMRD").then(
        (ambilRenaksi) => {
          ambilRenaksi.data.map((renaksi) => {
            if (renaksi.nip == router.query.nip) {
              setPegawai((nextData) => {
                return [renaksi, ...nextData];
              });
              setNama(renaksi.nama);
            }
          });
        }
      );
    }
  }, [router.query, router.isReady]);

  const lihatSemua = () => {
    // setActiveDropdown(!activeDropdown);
    // console.log(dataRenaksi);
    router.push("/Kasubid/TinjauRenaksiLihatSemua");
  };

  const clickBack = () => {
    router.push("/Kasubid/TinjauRenaksi");
    // console.log(dataCakin);
  };

  const btnTerimaSemua = () => {
    // Axios.get("http://localhost:3001/kasubidAmbilRenaksiMRD").then(
    //   (ambilRenaksi) => {}
    // );

    // let renaksi = ambilRenaksi.data;
    let moTrima = [];
    moTrima = arr.filter((elA) => {
      return pegawai.some((elB) => elA["value"] == elB["id_renaksi"]);
    });
    moTrima.map((item) => {
      Axios.post("http://localhost:3001/kasubidMenerimaRenaksi", {
        idRenaksi: item.value,
      });
    });

    setPegawai([]);

    Axios.get("http://localhost:3001/kasubidAmbilRenaksiMRD").then(
      (ambilRenaksi) => {
        ambilRenaksi.data.map((renaksi) => {
          if (renaksi.nip == router.query.nip) {
            setPegawai((nextData) => {
              return [renaksi, ...nextData];
            });
          }
        });
      }
    );
  };

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

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalTolakAllIsOpen, setTolakAllIsOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showModalTerimaAll, setShowModalTerimaAll] = useState(false);
  const [showModalTolakAll, setShowModalTolakAll] = useState(false);

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

  function openModalTolakAll() {
    setTolakAllIsOpen(true);
  }

  function afterOpenModalTolakAll() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModalTolakAll() {
    setTolakAllIsOpen(false);
  }

  const btnTolak = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const btnTolakAll = () => {
    setShowModalTolakAll(true);
    setTimeout(() => {
      setShowModalTolakAll(false);
    }, 3000);
  };

  const [rowSelected, setRowSelected] = useState([]);

  const btnTolakExp = () => {
    // const data = new FormData();
    // data.append("file", file);

    // Axios.post("http://localhost:3001/uploadFile", data)
    //   .then((response) => {
    //     console.log(response.data);
    //     if (response.data.status === "success"){
    //       Axios.post("http://localhost:3001/unggahLaporan", {
    //         idRenaksi: row.id_renaksi,
    //         ketPegawai: ketPegawai,
    //         fileURL: response.data.file,
    //       }).then((unggahLaporan) => {
    //         console.log(unggahLaporan);
    //       });
    //     } else {
    //       Axios.post("http://localhost:3001/unggahLaporan", {
    //         idRenaksi: row.id_renaksi,
    //         ketPegawai: ketPegawai,
    //       }).then((unggahLaporan) => {
    //         console.log(unggahLaporan);
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    closeModal();
    btnTolak();
  };

  const btnTolakAllExp = () => {
    // const data = new FormData();
    // data.append("file", file);

    // Axios.post("http://localhost:3001/uploadFile", data)
    //   .then((response) => {
    //     console.log(response.data);
    //     if (response.data.status === "success") {
    //       Axios.post("http://localhost:3001/unggahLaporan", {
    //         idRenaksi: row.id_renaksi,
    //         ketPegawai: ketPegawai,
    //         fileURL: response.data.file,
    //       }).then((unggahLaporan) => {
    //         console.log(unggahLaporan);
    //       });
    //     } else {
    //       Axios.post("http://localhost:3001/unggahLaporan", {
    //         idRenaksi: row.id_renaksi,
    //         ketPegawai: ketPegawai,
    //       }).then((unggahLaporan) => {
    //         console.log(unggahLaporan);
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    closeModalTolakAll();
    btnTolakAll();
  };

  const handleChange = ({ target }) => {
    if (target.checked === true) {
      arr.push({ value: target.name });
    } else if (target.checked === false) {
      arr.findIndex((item) => {
        if (item.value === target.name) {
          arr = arr.filter((e) => e !== item);
        }
      });
    }
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitle}>
              <Image
                style={{ cursor: "pointer" }}
                onClick={clickBack}
                src={"/Back.svg"}
                width={35}
                height={35}
              />
              <p className={stylesS.txtTitle}>RENAKSI - {nama}</p>
            </div>
          </div>
          <Gap height={106} width={0} />
          <TableContainer
            style={{ paddingLeft: 50, paddingRight: 40, zIndex: 998 }}
          >
            <Table sx={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell className={styles.styleHeader}></TableCell>
                  <TableCell className={styles.styleHeader}>Program</TableCell>
                  <TableCell className={styles.styleHeader}>THL</TableCell>
                  <TableCell className={styles.styleHeader}>Kegiatan</TableCell>
                  <TableCell className={styles.styleHeader}>
                    Sub Kegiatan
                  </TableCell>
                  <TableCell className={styles.styleHeader}>
                    Tupoksi Inti
                  </TableCell>
                  <TableCell className={styles.styleHeader}>
                    Tupoksi Tambahan
                  </TableCell>
                  <TableCell className={styles.styleHeader}>Rencana</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pegawai.map((row) => (
                  <TableRow hover className={styles.styleRow}>
                    <TableCell>
                      <Checkbox onChange={handleChange} name={row.id_renaksi} />
                      {row.id_renaksi}
                    </TableCell>
                    <TableCell className={styles.styleData}>
                      <p style={{ fontWeight: 600 }}>{row.program}</p>
                    </TableCell>
                    <TableCell className={styles.styleData}>
                      {row.nama}
                    </TableCell>
                    <TableCell className={styles.styleData}>
                      {row.kegiatan}
                    </TableCell>
                    <TableCell className={styles.styleData}>
                      {row.sub_kegiatan}
                    </TableCell>
                    <TableCell className={styles.styleData}>
                      {row.tupoksi_inti}
                    </TableCell>
                    <TableCell className={styles.styleData}>
                      {row.tupoksi_tambahan}
                    </TableCell>
                    <TableCell className={styles.styleData}>
                      {moment(row.start_date).format("MMM")} -{" "}
                      {moment(row.end_date).format("MMM")}
                    </TableCell>
                    {/* <TableCell>
                    <div className={styles.styleTxtRow}>
                      <div style={{ flexDirection: "row", display: "flex" }}>
                        <button
                          className={styles.btnTerima}
                          onClick={() => btnTerima()}
                        >
                          <Image src={"/Terima.svg"} width={20} height={20} /> Terima
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
                          onClick={() => (openModal(), console.log(row.nama))}
                        >
                          <Image src={"/Tolak.svg"} width={20} height={20} /> Tolak
                        </button>
                        <Modal
                          isOpen={modalIsOpen}
                          onAfterOpen={afterOpenModal}
                          onRequestClose={closeModal}
                          style={custom}
                          contentLabel="Example Modal"
                        >
                          <h2 className={styles.headerTxtModal}>Tolak Renaksi</h2>
                          <Gap height={20} width={0} />
                          <input
                            className={styles.inputBuktiLap}
                            placeholder="Tambah keterangan"
                            // onChange={(e) => setKetPegawai(e.target.value)}
                          />
                          <Gap height={20} width={0} />
                          <div className={styles.wrapBtnModal}>
                            <button onClick={closeModal} className={styles.btnKirim}>
                              <img src={"/BatalIcon.svg"} width={20} height={20} />
                              <p className={styles.txt}>Batal</p>
                            </button>
                            <Gap width={24} height={0} />
                            <button onClick={btnTolakExp} className={styles.btnBatal}>
                              <img src={"/Tolak.svg"} width={20} height={20} />
                              <p>Tolak</p>
                            </button>
                          </div>
                        </Modal>
                        {showModal ? (
                          <div
                            className={styles.modal}
                            onClick={() => setShowModal(false)}
                          >
                            <p>
                              Renaksi Richard F. Kasenda <b>Ditolak</b>
                            </p>
                            <div className={styles.checkCircle}>
                              <Image src={"/Check-circle.svg"} width={25} height={25} />
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className={stylesS.wrapFilter}>
            <button className={styles.btnTerimaAll} onClick={btnTerimaSemua}>
              <Image src={"/Terima.svg"} width={25} height={25} />
              Terima
            </button>
            {showModalTerimaAll ? (
              <div
                className={styles.modal}
                onClick={() => setShowModalTolakAll(false)}
              >
                <p>
                  Semua Permintaan Ubah Jadwal <b>Diterima</b>
                </p>
                <div className={styles.checkCircle}>
                  <Image src={"/Terima.svg"} width={25} height={25} />
                </div>
              </div>
            ) : null}
            <Gap width={15} height={0} />
            <button onClick={openModalTolakAll} className={styles.btnTolakAll}>
              <Image src={"/Tolak.svg"} width={25} height={25} />
              Tolak
            </button>
            <Modal
              isOpen={modalTolakAllIsOpen}
              onAfterOpen={afterOpenModalTolakAll}
              onRequestClose={closeModal}
              style={custom}
              contentLabel="Example Modal"
            >
              <h2 className={styles.headerTxtModal}>
                Tolak Semua Permintaan Ubah Jadwal
              </h2>
              <Gap height={20} width={0} />
              <input
                className={styles.inputBuktiLap}
                placeholder="Tambah keterangan"
                // onChange={(e) => setKetPegawai(e.target.value)}
              />
              <Gap height={20} width={0} />
              <div className={styles.wrapBtnModal}>
                <button
                  onClick={closeModalTolakAll}
                  className={styles.btnKirim}
                >
                  <img src={"/BatalIcon.svg"} width={20} height={20} />
                  <p className={styles.txt}>Batal</p>
                </button>
                <Gap width={24} height={0} />
                <button onClick={btnTolakAllExp} className={styles.btnBatal}>
                  <img src={"/Tolak.svg"} width={20} height={20} />
                  <p>Tolak</p>
                </button>
              </div>
            </Modal>
            {showModalTolakAll ? (
              <div
                className={styles.modal}
                onClick={() => setShowModalTolakAll(false)}
              >
                <p>
                  Semua Permintaan Ubah Jadwal <b>Ditolak</b>
                </p>
                <div className={styles.checkCircle}>
                  <Image src={"/Tolak.svg"} width={25} height={25} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
