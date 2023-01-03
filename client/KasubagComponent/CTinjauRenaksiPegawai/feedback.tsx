import stylesS from "./ContentDaftarkegiatan.module.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./TableMUI.module.css";

import Axios from "axios";
import { useRouter } from "next/router";
import Modal from "react-modal";
import Gap from "../Gap";

import Checkbox from "@mui/material/Checkbox";

Axios.defaults.withCredentials = true;

export default function CTinjauRenaksiPegawaiFeedback() {
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
            if (
              renaksi.nip == router.query.nip &&
              renaksi.ditolak == "Kasubid"
            ) {
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
    router.push("/Kasubag/TinjauRenaksiLihatSemua");
  };

  const clickBack = () => {
    router.push("/Kasubag/TinjauRenaksi");
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
    setArrTolak(arr);
    setTolakAllIsOpen(true);
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
            if (
              renaksi.nip == router.query.nip &&
              renaksi.ditolak == "Kasubid"
            ) {
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
                      Kegiatan
                    </TableCell>
                    <TableCell width={350} sx={styleHeader}>
                      Sub Kegiatan
                    </TableCell>
                    <TableCell width={350} sx={styleHeader}>
                      Tupoksi Inti
                    </TableCell>
                    <TableCell width={100} sx={styleHeader}>
                      Rencana
                    </TableCell>
                    <TableCell width={600} sx={styleHeader}>
                      Tanggapan
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pegawai.map((row) => (
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
                          onClick={() => setRowSelected(row.id_renaksi)}
                        >
                          <p style={{ fontWeight: 600 }}>{row.program}</p>
                        </TableCell>
                        <TableCell sx={styleData}>{row.kegiatan}</TableCell>
                        <TableCell sx={styleData}>{row.sub_kegiatan}</TableCell>
                        <TableCell sx={styleData}>{row.tupoksi_inti}</TableCell>
                        <TableCell sx={styleData}>
                          {moment(row.start_date).format("MMM")} -
                          {moment(row.end_date).format("MMM")}
                        </TableCell>
                        <TableCell sx={styleData}>{row.ket_pegawai}</TableCell>
                      </TableRow>
                      <Gap height={16} width={0} />
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
