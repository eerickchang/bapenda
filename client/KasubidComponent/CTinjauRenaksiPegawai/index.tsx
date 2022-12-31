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
import { color } from "@mui/system";

Axios.defaults.withCredentials = true;

export default function CTinjauRenaksiPegawai() {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [pegawai, setPegawai] = useState([]);
  const [nama, setNama] = useState("");
  const [ketAdmin, setKetAdmin] = useState("");
  const [arrTolak, setArrTolak] = useState([]);

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

  const customFeedback = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderRadius: 20,
      padding: "24px 60px",
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

  function afterOpenModalTolakAll() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModalTolakAll() {
    setTolakAllIsOpen(false);
  }

  const btnTolakAll = () => {
    setShowModalTolakAll(true);
    setTimeout(() => {
      setShowModalTolakAll(false);
    }, 3000);
  };

  const [open, setOpen] = React.useState(false);
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");

  const [rowSelected, setRowSelected] = useState("6185");

  function openModalTolakAll() {
    console.log(arr);
    // setArrTolak(arr);
    // setTolakAllIsOpen(true);
  }

  const btnTolak = () => {
    let moTrima = [];
    moTrima = arrTolak.filter((elA) => {
      return pegawai.some((elB) => elA["value"] == elB["id_renaksi"]);
    });
    moTrima.map((item) => {
      Axios.post("http://localhost:3001/kasubidMenolakRenaksi", {
        idRenaksi: item.value,
        ketAdmin: ketAdmin,
      });
    });
    setPegawai([]);
    setTimeout(() => {
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
    }, 100);
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

  const styleHeader = {
    fontFamily: "Poppins",
    fontSize: 21,
    fontWeight: 600,
    color: "rgba(149, 149, 149, 1)",
    textAlign: "left",
  };

  const styleData = {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 400,
    color: "rgba(0, 0, 0, 1)",
    textAlign: "left",
  };

  const styleContainer = {
    paddingLeft: 2,
    paddingRight: 40,
    paddingBottom: 20,
  };

  const styleCollapse = {
    background: "rgba(232, 232, 232, 1)",
    borderTopColor: "rgba(165, 165, 165, 0.5)",
    borderTopWidth: 2,
    borderTopStyle: "solid",
    marginBottom: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginTop: -1.8,
  };

  const fungsi = () => {
    setOpen(!open);
    {
      rowClik
        ? (setStyleRow(`${styles.tableRow} ${styles.tableRowClick}`),
          setRowClick(!rowClik))
        : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
    }
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitle}>
              <div>
                <Image
                  style={{ cursor: "pointer" }}
                  onClick={clickBack}
                  src={"/Back.svg"}
                  width={45}
                  height={45}
                />
              </div>
              RENAKSI - {nama}
            </div>
            <Gap height={162} width={0} />
            <TableContainer style={styleContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell width={100} sx={styleHeader}></TableCell>
                    <TableCell width={350} sx={styleHeader}>
                      Program
                    </TableCell>
                    <TableCell width={350} sx={styleHeader}>
                      THL
                    </TableCell>
                    <TableCell width={350} sx={styleHeader}>
                      Kegiatan
                    </TableCell>
                    <TableCell width={350} sx={styleHeader}>
                      Sub Kegiatan
                    </TableCell>
                    <TableCell width={350} sx={styleHeader}>
                      Tupoksi Inti
                    </TableCell>
                    <TableCell width={350} sx={styleHeader}>
                      Tupoksi Tambahan
                    </TableCell>
                    <TableCell width={350} sx={styleHeader}>
                      Rencana
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pegawai.map((row) => (
                    <>
                      {row.ditolak == "Kasubid" && row.kirim_ke == "Kasubid" ? (
                        <>
                          <TableRow
                            hover
                            className={`${styles.tableRow} ${styleRow}`}
                          >
                            <TableCell>
                              <Checkbox
                                onChange={handleChange}
                                name={row.id_renaksi}
                              />
                            </TableCell>
                            <TableCell
                              sx={styleData}
                              onClick={() => (
                                setRowSelected(row.id_renaksi), fungsi()
                              )}
                            >
                              <p style={{ fontWeight: 600 }}>{row.program}</p>
                            </TableCell>
                            <TableCell
                              sx={styleData}
                              style={{ color: "rgba(218, 142, 72, 1)" }}
                              onClick={() => fungsi()}
                            >
                              {row.nama_thl}
                            </TableCell>
                            <TableCell sx={styleData} onClick={() => fungsi()}>
                              {row.kegiatan}
                            </TableCell>
                            <TableCell sx={styleData} onClick={() => fungsi()}>
                              {row.sub_kegiatan}
                            </TableCell>
                            <TableCell sx={styleData} onClick={() => fungsi()}>
                              {row.tupoksi_inti}
                            </TableCell>
                            <TableCell sx={styleData} onClick={() => fungsi()}>
                              {row.tupoksi_tambahan}
                            </TableCell>
                            <TableCell sx={styleData} onClick={() => fungsi()}>
                              <div
                                style={{
                                  position: "absolute",
                                  // top: 245,
                                  right: 43,
                                }}
                              >
                                <Image
                                  src={"/Tanggapan.svg"}
                                  width={40}
                                  height={40}
                                />
                              </div>
                              {moment(row.start_date).format("MMM")} -
                              {moment(row.end_date).format("MMM")}
                            </TableCell>
                          </TableRow>
                          <TableCell
                            style={{ padding: 0, width: 2000 }}
                            colSpan={8}
                          >
                            <Collapse
                              sx={styleCollapse}
                              in={open}
                              timeout="auto"
                            >
                              <div className={styles.wrapperContentModal}>
                                <div className={styles.contentFeedback}>
                                  <div className={styles.profilePengirim}>
                                    <Image
                                      src={"/SidebarProfile.svg"}
                                      width={40}
                                      height={40}
                                    />
                                    <p>
                                      <b>{row.jabatan}</b> - {row.nama}
                                      {/*kasubid.nama*/}
                                    </p>
                                  </div>
                                  <div>
                                    {/* <p>"{row.ket_admin}"</p> */}
                                    <p className={styles.feedback}>
                                      {row.ket_pegawai}
                                    </p>
                                  </div>
                                </div>
                                <button
                                  className={styles.btnFeedback}
                                  onClick={openModal}
                                >
                                  <p>Tanggapan</p>
                                </button>
                                <Modal
                                  isOpen={modalIsOpen}
                                  onAfterOpen={afterOpenModal}
                                  onRequestClose={closeModal}
                                  style={customFeedback}
                                  contentLabel="Example Modal"
                                >
                                  <h2 className={styles.headerTxtModal}>
                                    Feedback
                                  </h2>
                                  <Gap height={20} width={0} />
                                  <input
                                    className={styles.inputBuktiLap}
                                    placeholder="Tambah keterangan"
                                    onChange={(e) =>
                                      setKetAdmin(e.target.value)
                                    }
                                  />
                                  <Gap height={20} width={0} />
                                  <div
                                    style={{
                                      display: "flex",
                                      marginLeft: 383,
                                    }}
                                  >
                                    <button
                                      onClick={closeModal}
                                      className={styles.btnKembali}
                                    >
                                      <img
                                        src={"/BatalIcon.svg"}
                                        width={20}
                                        height={20}
                                      />
                                      <p className={styles.txt}>Batal</p>
                                    </button>
                                    <button
                                      onClick={() =>
                                        Axios.post(
                                          "http://localhost:3001/tanggapan",
                                          {
                                            idRenaksi: row.id_renaksi,
                                            ketAdmin: ketAdmin,
                                          }
                                        )
                                      }
                                      className={styles.btnKirimFeedback}
                                    >
                                      <p className={styles.txt}>Kirim</p>
                                    </button>
                                  </div>
                                </Modal>
                              </div>
                            </Collapse>
                          </TableCell>
                        </>
                      ) : (
                        <>
                          <TableRow hover className={stylesS.tableRow}>
                            <TableCell>
                              <Checkbox
                                onChange={handleChange}
                                name={row.id_renaksi}
                              />
                            </TableCell>
                            <TableCell sx={styleData}>
                              <p style={{ fontWeight: 600 }}>{row.program}</p>
                            </TableCell>
                            <TableCell
                              sx={styleData}
                              style={{ color: "rgba(218, 142, 72, 1)" }}
                            >
                              {row.nama_thl}
                            </TableCell>
                            <TableCell sx={styleData}>{row.kegiatan}</TableCell>
                            <TableCell sx={styleData}>
                              {row.sub_kegiatan}
                            </TableCell>
                            <TableCell sx={styleData}>
                              {row.tupoksi_inti}
                            </TableCell>
                            <TableCell sx={styleData}>
                              {row.tupoksi_tambahan}
                            </TableCell>
                            <TableCell sx={styleData}>
                              {moment(row.start_date).format("MMM")} -
                              {moment(row.end_date).format("MMM")}
                            </TableCell>
                          </TableRow>
                        </>
                      )}
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className={stylesS.wrapFilter}>
              <button
                onClick={openModalTolakAll}
                className={styles.btnTolakAll}
              >
                <Image src={"/Tolak.svg"} width={25} height={25} />
                Tolak
              </button>
              <Modal
                isOpen={modalTolakAllIsOpen}
                onAfterOpen={afterOpenModalTolakAll}
                onRequestClose={closeModalTolakAll}
                style={custom}
                contentLabel="Example Modal"
              >
                <h2 className={styles.headerTxtModal}>Tolak Renaksi</h2>
                <Gap height={20} width={0} />
                <input
                  className={styles.inputBuktiLap}
                  placeholder="Tambah keterangan"
                  onChange={(e) => setKetAdmin(e.target.value)}
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
                  <button onClick={btnTolak} className={styles.btnBatal}>
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
                    Renaksi {nama} <b>Ditolak</b>
                  </p>
                  <div className={styles.checkCircle}>
                    <Image src={"/Tolak.svg"} width={25} height={25} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
