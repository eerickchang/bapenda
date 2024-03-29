import React, { useEffect, useRef, useState } from "react";
import stylesS from "./cUbahJadwalRenaksi.module.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Axios from "axios";
import FileDownload from "js-file-download";
import "jspdf-autotable";
import Image from "next/future/image";
import { useRouter } from "next/router";
import Modal from "react-modal";
import Gap from "../Gap";
import styles from "./TableMUI.module.css";
import moment from "moment";

Axios.defaults.withCredentials = true;

function Row(props) {
  const { row, stateChanger, arrSubid, req, ket, prevMonth } = props;

  const [styleRow, setStyleRow] = useState("");

  const btnTerimaSemua = () => {
    Axios.get("http://localhost:3001/kabanAmbilRenaksiSelesai").then(
      (ambilRenaksi) => {
        let renaksi = ambilRenaksi.data;
        console.log("Renaksi: ", renaksi);
        console.log("Subid: ", arrSubid);

        let renaksiSDarrSubid = [];
        renaksiSDarrSubid = renaksi.filter((elA) => {
          return arrSubid.some((elB) => elA["sub_bidang"] == elB["sub_bidang"]);
        });

        renaksiSDarrSubid.map((item) => {
          Axios.post("http://localhost:3001/kabanMenerimaRenaksi", {
            idRenaksi: item.id_renaksi,
          });
        });

        console.log("Renaksi Arr: ", renaksiSDarrSubid);
      }
    );

    stateChanger([]);

    setTimeout(() => {
      Axios.get("http://localhost:3001/ambilKasubid").then((ambilKasubid) => {
        Axios.get("http://localhost:3001/kabanAmbilRenaksiSelesai").then(
          (ambilRenaksi) => {
            let pegawaiYgAdaRenaksi = [];
            let kasubid = ambilKasubid.data;
            let renaksi = ambilRenaksi.data;
            console.log("Kasubid: ", kasubid);
            console.log("Renaksi: ", renaksi);

            pegawaiYgAdaRenaksi = kasubid.filter((elA) => {
              return renaksi.some(
                (elB) => elA["sub_bidang"] === elB["sub_bidang"]
              );
            });

            pegawaiYgAdaRenaksi.map((item) => {
              stateChanger((nextData) => {
                return [item, ...nextData];
              });
            });

            console.log("Pegawai Ada Renaksi: ", pegawaiYgAdaRenaksi);
          }
        );
      });
    }, 100);
  };

  const btnTerima = () => {
    Axios.get("http://localhost:3001/kabanAmbilRenaksiSelesai").then(
      (ambilRenaksi) => {
        ambilRenaksi.data.map((renaksi) => {
          if (row.sub_bidang === renaksi.sub_bidang) {
            Axios.post("http://localhost:3001/kabanMenerimaRenaksi", {
              idRenaksi: renaksi.id_renaksi,
            });
          }
        });
      }
    );

    stateChanger([]);
    setTimeout(() => {
      Axios.get("http://localhost:3001/ambilKasubid").then((ambilKasubid) => {
        Axios.get("http://localhost:3001/kabanAmbilRenaksiSelesai").then(
          (ambilRenaksi) => {
            let pegawaiYgAdaRenaksi = [];
            let kasubid = ambilKasubid.data;
            let renaksi = ambilRenaksi.data;
            console.log("Kasubid: ", kasubid);
            console.log("Renaksi: ", renaksi);

            pegawaiYgAdaRenaksi = kasubid.filter((elA) => {
              return renaksi.some(
                (elB) => elA["sub_bidang"] === elB["sub_bidang"]
              );
            });

            pegawaiYgAdaRenaksi.map((item) => {
              stateChanger((nextData) => {
                return [item, ...nextData];
              });
            });

            console.log("Pegawai Ada Renaksi: ", pegawaiYgAdaRenaksi);
          }
        );
      });
    }, 100);

    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const btnKirim = () => {
    Axios.get("http://localhost:3001/ambilRenaksi").then((ambilRenaksi) => {
      ambilRenaksi.data.map((renaksi) => {
        if (
          moment(renaksi.end_date).format("YYYY-MM-DD") ==
          moment(prevMonth).format("YYYY-MM-DD")
        ) {
          Axios.post("http://localhost:3001/bukaForm", {
            idRenaksi: renaksi.id_renaksi,
          }).then((result) => console.log(result));
        }
      });
    });

    closeModalBuka();
    window.location.reload();
  };

  const btnTolakForm = () => {
    Axios.post("http://localhost:3001/tolakForm");
    closeModalBuka();

    window.location.reload();
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

  const btnTolak = () => {
    setShowModalTolak(true);
    setTimeout(() => {
      setShowModalTolak(false);
    }, 3000);
  };

  const btnTolakExp = () => {
    closeModal();
    btnTolak();
  };

  const [modalTerima, setIsModalTerima] = useState(false);

  function openModalBuka() {
    setIsModalTerima(true);
  }

  function afterOpenModalBuka() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModalBuka() {
    setIsModalTerima(false);
  }

  const customBuka = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      // width: 1000,
      borderRadius: 20,
      padding: 50,
      // height: 362,
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

  const router = useRouter();

  const clickRow = () => {
    router.push({
      pathname: "/Kaban/EvaluasiSubagSubid",
      query: {
        subid: row.sub_bidang,
      },
    });
  };

  const style1 = {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 600,
    color: "#000",
  };

  const style2 = {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 400,
    color: "#000",
  };

  const styleTxtKet = {
    display: "flex",
    position: "absolute",
    top: 140,
    color: "rgba(149, 149, 149, 1)",
  };

  return (
    <>
      <div className={stylesS.wrapFilter}>
        {/* <Modal
          isOpen={modalTerima}
          onAfterOpen={afterOpenModalBuka}
          onRequestClose={closeModalBuka}
          style={customBuka}
          contentLabel="Example Modal"
        >
          <div className={styles.wrapperKeterangan}>
            Permintaan Buka Form Evaluasi Lampiran:
            <div className={styles.contentKeterangan}>
              <p
                style={{
                  maxWidth: 930,
                  height: 140,
                  overflowX: "auto",
                  paddingRight: 10,
                  marginTop: 8,
                }}
              >
                {ket}
              </p>
            </div>
          </div>
          <Gap height={40} width={0} />
          <div className={styles.wrapBtnPermintaan}>
            <button onClick={btnTolakForm} className={styles.btnTolakP}>
              <img src={"/Tolak.svg"} width={20} height={20} />
              <p style={{ marginLeft: 8 }}>Tolak</p>
            </button>
            <button onClick={btnKirim} className={styles.btnKirimP}>
              <img src={"/Terima.svg"} width={20} height={20} />
              <p style={{ marginLeft: 8 }}>Terima</p>
            </button>
          </div>
        </Modal> */}
        <Gap width={24} height={0} />
        <button className={styles.btnTerimaAll} onClick={btnTerimaSemua}>
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
      </div>
      <React.Fragment>
        <TableRow className={`${styles.tableRow} ${styleRow}`}>
          <TableCell onClick={clickRow} style={{ cursor: "pointer" }}>
            <p style={style1}>{row.sub_bidang}</p>
          </TableCell>
          <TableCell onClick={clickRow} style={{ cursor: "pointer" }}>
            <p style={style2}>{row.nama}</p>
          </TableCell>
          <TableCell>
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
                      Renaksi {row.nama} <b>Diterima</b>
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
                  <h2 className={styles.headerTxtModal}>
                    Tolak Permintann Ubah Jadwal
                  </h2>
                  <Gap height={20} width={0} />
                  <input
                    className={styles.inputBuktiLap}
                    placeholder="Tambah keterangan"
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
                      Ubah Jadwal {row.nama} <b>Ditolak</b>
                    </p>
                    <div className={styles.checkCircle}>
                      <Image src={"/Check-circle.svg"} width={25} height={25} />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </TableCell>
        </TableRow>
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
  const [req, setReq] = useState("Tidak");
  const [ket, setKet] = useState("");

  const [pegawaiSubag, setPegawaiSubag] = useState([]);
  const [pegawaiSubid, setPegawaiSubid] = useState([]);
  const [prevMonth, setPrevMonth] = useState("");
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      setPrevMonth(moment().subtract(1, "month").format("YYYY-MM-01"));
      Axios.get("http://localhost:3001/pegawai").then((ambilPegawai) => {
        ambilPegawai.data.map((pegawai) => {
          if (pegawai.jabatan == "Kaban") {
            setReq(pegawai.req);
            setKet(pegawai.ket);
          }
        });
      });

      Axios.get("http://localhost:3001/ambilKasubid").then((ambilKasubid) => {
        Axios.get("http://localhost:3001/kabanAmbilRenaksiSelesai").then(
          (ambilRenaksi) => {
            let pegawaiYgAdaRenaksi = [];
            let kasubid = ambilKasubid.data;
            let renaksi = ambilRenaksi.data;
            console.log("Kasubid: ", kasubid);
            console.log("Renaksi: ", renaksi);

            pegawaiYgAdaRenaksi = kasubid.filter((elA) => {
              return renaksi.some(
                (elB) => elA["sub_bidang"] === elB["sub_bidang"]
              );
            });

            pegawaiYgAdaRenaksi.map((item) => {
              setPegawaiSubid((nextData) => {
                return [item, ...nextData];
              });
            });

            console.log("Pegawai Ada Renaksi: ", pegawaiYgAdaRenaksi);
          }
        );
      });

      Axios.get("http://localhost:3001/ambilKasubag").then((ambilKasubag) => {
        Axios.get("http://localhost:3001/kabanAmbilRenaksiSelesai").then(
          (ambilRenaksi) => {
            let pegawaiYgAdaRenaksi = [];
            let kasubid = ambilKasubag.data;
            let renaksi = ambilRenaksi.data;
            console.log("Kasubid: ", kasubid);
            console.log("Renaksi: ", renaksi);

            pegawaiYgAdaRenaksi = kasubid.filter((elA) => {
              return renaksi.some(
                (elB) => elA["sub_bidang"] === elB["sub_bidang"]
              );
            });

            pegawaiYgAdaRenaksi.map((item) => {
              setPegawaiSubag((nextData) => {
                return [item, ...nextData];
              });
            });

            console.log("Pegawai Ada Renaksi: ", pegawaiYgAdaRenaksi);
          }
        );
      });
    }
  }, []);

  const btnFilterBulan = () => {
    // setActiveDropdownBulan(!activeDropdownBulan);
    console.log(dataRenaksi);
  };

  const style = {
    fontFamily: "Poppins",
    fontSize: 17,
    fontWeight: 600,
    color: "#959595",
  };

  const styleContainer = {
    paddingLeft: 2,
    paddingRight: 40,
    paddingBottom: 20,
  };

  const [modalTerima, setIsModalTerima] = useState(false);
  function afterOpenModalBuka() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }
  function closeModalBuka() {
    setIsModalTerima(false);
  }
  const customBuka = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      // width: 1000,
      borderRadius: 20,
      padding: 50,
      // height: 362,
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

  const btnTolakForm = () => {
    Axios.post("http://localhost:3001/tolakForm");
    closeModalBuka();

    window.location.reload();
  };

  const btnKirim = () => {
    Axios.get("http://localhost:3001/ambilRenaksi").then((ambilRenaksi) => {
      ambilRenaksi.data.map((renaksi) => {
        if (
          moment(renaksi.end_date).format("YYYY-MM-DD") ==
          moment(prevMonth).format("YYYY-MM-DD")
        ) {
          Axios.post("http://localhost:3001/bukaForm", {
            idRenaksi: renaksi.id_renaksi,
          }).then((result) => console.log(result));
        }
      });
    });

    closeModalBuka();
    window.location.reload();
  };

  function openModalBuka() {
    setIsModalTerima(true);
  }

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          {req == "Ya" ? (
            <button className={styles.btnPermintaan2} onClick={openModalBuka}>
              {/* <Image src={"/Terima.svg"} width={25} height={25} /> */}
              Permintaan
            </button>
          ) : null}

          <Modal
            isOpen={modalTerima}
            onAfterOpen={afterOpenModalBuka}
            onRequestClose={closeModalBuka}
            style={customBuka}
            contentLabel="Example Modal"
          >
            <div className={styles.wrapperKeterangan}>
              Permintaan Buka Form Evaluasi Lampiran:
              <div className={styles.contentKeterangan}>
                <p
                  style={{
                    maxWidth: 930,
                    height: 140,
                    overflowX: "auto",
                    paddingRight: 10,
                    marginTop: 8,
                  }}
                >
                  {ket}
                </p>
              </div>
            </div>
            <Gap height={40} width={0} />
            <div className={styles.wrapBtnPermintaan}>
              <button onClick={btnTolakForm} className={styles.btnTolakP}>
                <img src={"/Tolak.svg"} width={20} height={20} />
                <p style={{ marginLeft: 8 }}>Tolak</p>
              </button>
              <button onClick={btnKirim} className={styles.btnKirimP}>
                <img src={"/Terima.svg"} width={20} height={20} />
                <p style={{ marginLeft: 8 }}>Terima</p>
              </button>
            </div>
          </Modal>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitle}>
              <div>
                <Image
                  src={"/EvaluasiLampiranTitle.svg"}
                  width={40}
                  height={40}
                />
              </div>
              <p style={{ marginLeft: 5, marginBottom: 10 }}>
                EVALUASI LAMPIRAN
              </p>
            </div>
            <Gap height={150} width={0} />
            <TableContainer style={styleContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={style} width={700}>
                      Sub Bagian
                    </TableCell>
                    <TableCell style={style} width={700}>
                      Kepala Sub Bagian
                    </TableCell>
                    <TableCell style={style} width={700}>
                      Aksi
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pegawaiSubag.map((row) => (
                    <Row
                      key={row.id_renaksi}
                      row={row}
                      stateChanger={setPegawaiSubag}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Gap height={50} width={0} />
            <TableContainer style={styleContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={style} width={700}>
                      Sub Bidang
                    </TableCell>
                    <TableCell style={style} width={700}>
                      Kepala Sub Bidang
                    </TableCell>
                    <TableCell style={style} width={700}>
                      Aksi
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pegawaiSubid.map((row) => (
                    <Row
                      key={row.id_renaksi}
                      row={row}
                      stateChanger={setPegawaiSubid}
                      arrSubid={pegawaiSubid}
                      req={req}
                      ket={ket}
                      prevMonth={prevMonth}
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
