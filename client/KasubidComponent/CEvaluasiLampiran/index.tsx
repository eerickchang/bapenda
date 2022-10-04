import React, { useEffect, useState, useRef } from "react";
import stylesS from "./cEvaluasiLampiran.module.css";

import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./TableMUI.module.css";
import Image from "next/image";
import Gap from "../Gap";
import Axios from "axios";
import moment from "moment";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";                         
import "jspdf-autotable";
import FileDownload from "js-file-download";
import Modal from "react-modal";

Axios.defaults.withCredentials = true;

const rows = [
  {
    id: 1,
    name: "anggursss",
    calories: 20,
    fat: 42,
    carbs: 69,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 80,
    protein2: 80,
  },
  {
    id: 2,
    name: "anggur",
    calories: 90,
    fat: 82,
    carbs: 79,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 60,
    protein2: 60,
  },
  {
    id: 3,
    name: "urusss",
    calories: 50,
    fat: 42,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 20,
    protein2: 20,
  },
  {
    id: 4,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
  {
    id: 5,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
  {
    id: 6,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
  {
    id: 7,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
];

function Row(props) {
  const { row, stateChanger } = props;
  const [open, setOpen] = React.useState(false);

  // const custom = {
  //   content: {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     width: 878,
  //     borderRadius: 20,
  //     paddingLeft: 61,
  //     height: 362,
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //     overlay: "#112350",
  //     backgroundColor: "white",
  //     zIndex: 1001,
  //     scroll: false,
  //   },
  //   overlay: {
  //     position: "fixed",
  //     marginTop: 0,
  //     top: 0,
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     backgroundColor: "rgba(17, 35, 80, 0.5)",
  //     zIndex: 1000,
  //   },
  // };

  // ? CUSTOM STYLE MODAL UBAH JADWAL RENAKSI
  // const customUbah = {
  //   content: {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     width: 878,
  //     borderRadius: 20,
  //     paddingLeft: 61,
  //     height: 433,
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //     overlay: "#112350",
  //     backgroundColor: "white",
  //     zIndex: 1001,
  //     scroll: false,
  //   },
  //   overlay: {
  //     position: "fixed",
  //     marginTop: 0,
  //     top: 0,
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     backgroundColor: "rgba(17, 35, 80, 0.5)",
  //     zIndex: 1000,
  //   },
  // };

  //style row
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");

  const btnTerimaSemua = () => {
    Axios.get("http://localhost:3001/masuk").then((masuk) => {
      Axios.get("http://localhost:3001/kasubidAmbilRenaksiSelesai").then(
        (ambilRenaksi) => {
          ambilRenaksi.data.map((renaksi) => {
            if (renaksi.sub_bidang === masuk.data.user[0].sub_bidang) {
              Axios.post("http://localhost:3001/kasubidMenerimaRenaksi", {
                idRenaksi: renaksi.id_renaksi,
              });
            }
          });
        }
      );
    });

    stateChanger([]);
    // window.location.reload();
  };

  const btnTerima = () => {
    Axios.post("http://localhost:3001/kasubidMenerimaRenaksi", {
      idRenaksi: row.id_renaksi,
    });

    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);

    stateChanger([]);
    Axios.get("http://localhost:3001/masuk").then((masuk) => {
      Axios.get("http://localhost:3001/kasubidAmbilRenaksiSelesai").then(
        (ambilRenaksi) => {
          ambilRenaksi.data.map((renaksi) => {
            if (renaksi.sub_bidang === masuk.data.user[0].sub_bidang) {
              stateChanger((nextData) => {
                return [renaksi, ...nextData];
              });
            }
          });
        }
      );
    });
  };

  const btnDw = () => {
    Axios.get(`http://localhost:3001/downloadFile${row.files}`, {
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, `${row.files}`);
    });
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
  const [showModalTolak, setShowModalTolak] = useState(false);
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
    setShowModalTolak(true);
    setTimeout(() => {
      setShowModalTolak(false);
    }, 3000);
  };

  const btnTolakAll = () => {
    setShowModalTolakAll(true);
    setTimeout(() => {
      setShowModalTolakAll(false);
    }, 3000);
  };

  const btnTerimaAll = () => {
    setShowModalTerimaAll(true);
    setTimeout(() => {
      setShowModalTerimaAll(false);
    }, 3000);
  };

  const btnTolakExp = () => {
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

  const ale = () => {
    alert("sdfsdfasdf")
  }

  return (
    <>
      <div className={stylesS.wrapFilter}>
        <button className={styles.btnTerimaAll} onClick={ale}>
          <Image src={"/Terima.svg"} width={25} height={25} />
          Terima Semua
        </button>
        {showModalTerimaAll ? (
          <div
            className={styles.modal}
            onClick={() => setShowModalTolakAll(false)}
          >
            <p>
              Semua Renaksi <b>Diterima</b>
            </p>
            <div className={styles.checkCircle}>
              <Image src={"/Terima.svg"} width={25} height={25} />
            </div>
          </div>
        ) : null}
        <Gap width={15} height={0} />
        <button onClick={openModalTolakAll} className={styles.btnTolakAll}>
          <Image src={"/Tolak.svg"} width={25} height={25} />
          Tolak Semua
        </button>
        <Modal
          isOpen={modalTolakAllIsOpen}
          onAfterOpen={afterOpenModalTolakAll}
          onRequestClose={closeModal}
          style={custom}
          contentLabel="Example Modal"
        >
          <h2 className={styles.headerTxtModal}>
            Tolak Renaksi
          </h2>
          <Gap height={20} width={0} />
          <input
            className={styles.inputBuktiLap}
            placeholder="Tambah keterangan"
            // onChange={(e) => setKetPegawai(e.target.value)}
          />
          <Gap height={20} width={0} />
          <div className={styles.wrapBtnModal}>
            <button onClick={closeModalTolakAll} className={styles.btnKirim}>
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
              Semua Renaksi <b>Ditolak</b>
            </p>
            <div className={styles.checkCircle}>
              <Image src={"/Tolak.svg"} width={25} height={25} />
            </div>
          </div>
        ) : null}
      </div>
      <React.Fragment>
        <TableRow
          className={`${styles.tableRow} ${styleRow}`}
          onClick={() => {
            setOpen(!open);
            {
              rowClik
                ? (setStyleRow(`${styles.tableRow} ${styles.tableRowClick}`),
                  setRowClick(!rowClik))
                : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
            }
          }}
          sx={{ "& > *": { borderBottom: "" } }}
        >
          <TableCell>
            <p
              className={stylesS.rekanNama}
              onClick={() => console.log(row.files)}
            >
              {row.nama}
            </p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>{row.tupoksi_tambahan}</p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>{row.kegiatan}</p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>
              {row.files === "" ? null : (
                <div className={styles.wrapFileLampiran}>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Image src={"/IconPDF.svg"} width={25} height={28} />
                    </div>
                    1 files
                  </div>
                  <Gap width={0} height={10} />
                  {/* <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Image src={"/IconPDF.svg"} width={25} height={28} />
                    </div>
                    2 files
                  </div> */}
                </div>
              )}
            </p>
          </TableCell>
        </TableRow>
          {/* <div className={styles.backgroundRowExpand}> */}
          <TableCell style={{ padding: 0, width: 2000 }} colSpan={6}>
            <Collapse
              style={{
                background: "rgba(232, 232, 232, 1)",
                borderTopColor: "rgba(165, 165, 165, 0.5)",
                borderTopWidth: 2,
                borderTopStyle: "solid",
                marginBottom: 35,
              }}
              in={open}
              timeout="auto"
            >
                <div className={styles.wrapperExpand}>
                  <div className={styles.wrapperKeterangan}>
                    Keterangan:
                    <div className={styles.contentKeterangan}>
                      {row.ket_pegawai}
                    </div>
                  </div>
                  <div className={styles.wrapperLampiran}>
                    Lampiran:
                    {row.files === "" ? null : (
                      <div className={styles.contentLampiran} onClick={btnDw}>
                        {/* <div className={styles.fileLampiran}>
                          <Image src={"/IconPNG.svg"} width={35} height={40} />
                          <p style={{ marginLeft: 5 }}> Foto Laporan</p>
                        </div> */}
                        <div className={styles.fileLampiran}>
                          <Image src={"/IconPDF.svg"} width={35} height={40} />
                          <p style={{ marginLeft: 5 }}> File Laporan</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={styles.wrapperBtnTerimaTolak}>
                    <Gap width={0} height={50} />
                    <button onClick={btnTerima} className={styles.styleBtn}>
                      <Image src={"/Terima.svg"} width={30} height={30} />
                      <p>Terima</p>
                    </button>
                    {showModal ? (
                      <div
                        className={styles.modal}
                        onClick={() => setShowModal(false)}
                      >
                        <p>
                          Lampiran Bukti {row.nama} <b>Diterima</b>
                        </p>
                        <div className={styles.checkCircle}>
                          <Image
                            src={"/Check-circle.svg"}
                            width={25}
                            height={25}
                          />
                        </div>
                      </div>
                    ) : null}
                    <Gap width={0} height={20} />
                    <button
                      onClick={openModal}
                      style={{
                        fontWeight: 700,
                        background: "rgba(255, 1, 100, 1)",
                      }}
                      className={styles.styleBtn}
                      // onClick={btnTolak}
                    >
                      <Image src={"/Tolak.svg"} width={30} height={30} />
                      <p>Tolak</p>
                    </button>
                    <Modal
                      isOpen={modalIsOpen}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={custom}
                      contentLabel="Example Modal"
                    >
                      <h2 className={styles.headerTxtModal}>
                        Tolak Lampiran Bukti
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
                          onClick={closeModal}
                          className={styles.btnKirim}
                        >
                          <img src={"/BatalIcon.svg"} width={20} height={20} />
                          <p className={styles.txt}>Batal</p>
                        </button>
                        <Gap width={24} height={0} />
                        <button
                          onClick={btnTolakExp}
                          className={styles.btnBatal}
                        >
                          <img src={"/Tolak.svg"} width={20} height={20} />
                          <p>Tolak</p>
                        </button>
                      </div>
                    </Modal>
                    {showModalTolak ? (
                      <div
                        className={styles.modal}
                        onClick={() => setShowModalTolak(false)}
                      >
                        <p>
                          Lampiran Bukti {row.nama} <b>Ditolak</b>
                        </p>
                        <div className={styles.checkCircle}>
                          <Image src={"/Tolak.svg"} width={25} height={25} />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
            </Collapse>
          </TableCell>
      </React.Fragment>
    </>
  );
}

export const CEvaluasiLampiran = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [asn, setAsn] = useState("");
  const [thnSkrg, setThnSkrg] = useState("");
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [subid, setSubid] = useState("");

  const [pegawai, setPegawai] = useState([]);
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        setSubid(masuk.data.user[0].sub_bidang);
        Axios.get("http://localhost:3001/kasubidAmbilRenaksiSelesai").then(
          (ambilRenaksi) => {
            ambilRenaksi.data.map((renaksi) => {
              if (renaksi.sub_bidang === masuk.data.user[0].sub_bidang) {
                setPegawai((nextData) => {
                  return [renaksi, ...nextData];
                });
              }
            });
          }
        );
      });
    }
  }, []);

  const btnFilterBulan = () => {
    // setActiveDropdownBulan(!activeDropdownBulan);
    console.log(dataRenaksi);
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperRiwayatKegiatan}>
              <Image
                src={"/EvaluasiLampiranTitle.svg"}
                width={40}
                height={40}
                alt="Oke"
              />
              <p className={stylesS.txtTitle}>EVALUASI LAMPIRAN BUKTI</p>
            </div>
            <p className={stylesS.titleBidang}>Sub Bidang {subid}</p>
            <Gap height={50} width={0} />
            <TableContainer
              style={{ paddingLeft: 0, paddingRight: 40, zIndex: 998 }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#959595",
                      }}
                      width={500}
                    >
                      Pegawai
                    </TableCell>
                    {/* <TableCell className={styles.headerTable} width={0}>
                      Pegawai
                    </TableCell> */}
                    <TableCell className={styles.headerTable} width={500}>
                      Tupoksi
                    </TableCell>
                    <TableCell className={styles.headerTable} width={500}>
                      Rencana
                    </TableCell>
                    <TableCell className={styles.headerTable} width={500}>
                      Lampiran
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pegawai.map((row) => (
                    <Row
                      key={row.id_renaksi}
                      row={row}
                      stateChanger={setPegawai}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </>
  );
};
