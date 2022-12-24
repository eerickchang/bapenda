import React, { useEffect, useRef, useState } from "react";
import stylesS from "./cUbahJadwalRenaksi.module.css";

import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Axios from "axios";
import FileDownload from "js-file-download";
import "jspdf-autotable";
import moment from "moment";
import Image from "next/image";
import Modal from "react-modal";
import Gap from "../Gap";
import styles from "./TableMUI.module.css";

Axios.defaults.withCredentials = true;

function Row(props) {
  const { row, stateChanger } = props;
  const [open, setOpen] = React.useState(false);
  const [ketAdmin, setKetAdmin] = useState("");

  //style row
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");

  const btnTerimaSemua = () => {
    Axios.get("http://localhost:3001/masuk").then((masuk) => {
      Axios.get("http://localhost:3001/kasubidAmbilRenaksiMJD").then(
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
    setTimeout(() => {
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/kasubidAmbilRenaksiMJD").then(
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
    }, 100);
  };

  const btnTerima = () => {
    Axios.post("http://localhost:3001/kasubidMenerimaRenaksi", {
      idRenaksi: row.id_renaksi,
    });

    stateChanger([]);
    setTimeout(() => {
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/kasubidAmbilRenaksiMJD").then(
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
    }, 100);

    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
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
    Axios.post("http://localhost:3001/kasubidMenolakRenaksi", {
      idRenaksi: row.id_renaksi,
      ketAdmin: ketAdmin,
    });

    stateChanger([]);
    setTimeout(() => {
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/kasubidAmbilRenaksiMJD").then(
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
    }, 100);

    closeModal();
    btnTolak();
  };

  const btnTolakAllExp = () => {
    closeModalTolakAll();
    btnTolakAll();
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
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 500,
    display: "flex",
    position: "relative",
    top: -40,
    left: 10,
    color: "rgba(149, 149, 149, 1)",
  };

  const styleContentKet = {
    maxWidth: 930,
    height: 113,
    overflow: "auto",
    paddingRight: 10,
    marginTop: 8,
  };

  const styleCollapse = {
    background: "rgba(232, 232, 232, 1)",
    borderTopColor: "rgba(165, 165, 165, 0.5)",
    borderTopWidth: 2,
    borderTopStyle: "solid",
    marginBottom: 35,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginTop: -10.8,
  };

  return (
    <>
      <div className={stylesS.wrapFilter}>
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
              Semua Permintaan Ubah Jadwal <b>Diterima</b>
            </p>
            <div className={styles.checkCircle}>
              <Image src={"/Terima.svg"} width={25} height={25} />
            </div>
          </div>
        ) : null}
      </div>
      <React.Fragment>
        {row.ditolak === "Kasubid" && row.kirim_ke === "Kasubid" ? (
          //!! STYLE YG INI ANDRE
          <>
            <div
              style={{
                position: "absolute",
                marginTop: 35,
                right: 43,
              }}
            >
              <Image src={"/Tanggapan.svg"} width={40} height={40} />
            </div>
            <TableRow
              className={`${styles.tableRow} ${styleRow}`}
              onClick={() => {
                setOpen(!open);
                {
                  rowClik
                    ? (setStyleRow(
                        `${styles.tableRow} ${styles.tableRowClick}`
                      ),
                      setRowClick(!rowClik))
                    : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
                }
              }}
              sx={{ "& > *": { borderBottom: "" } }}
              hover
            >
              <TableCell style={style1}>
                <p onClick={() => console.log(row.files)}>{row.nama}</p>
              </TableCell>
              <TableCell>
                <p style={style2}>{row.tupoksi_inti}</p>
              </TableCell>
              <TableCell>
                <p style={style2}>{`${moment(row.start_date).format(
                  "MMM"
                )} - ${moment(row.end_date).format("MMM")}`}</p>
              </TableCell>
              <TableCell>
                <p style={style2}>
                  {row.files === "" ? null : (
                    <div className={styles.wrapFileLampiran}>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginRight: 10 }}>
                          <Image src={"/IconPDF.svg"} width={25} height={28} />
                        </div>
                        1 files
                      </div>
                      <Gap width={0} height={10} />
                    </div>
                  )}
                </p>
              </TableCell>
            </TableRow>
            {/* <div className={styles.backgroundRowExpand}> */}
            <TableCell style={{ padding: 0, width: 2000 }} colSpan={4}>
              <Collapse style={styleCollapse} in={open} timeout="auto">
                <div className={styles.wrapperExpand}>
                  <div className={styles.wrapperKeterangan}>
                    Keterangan:
                    <div className={styles.contentKeterangan}>
                      <p style={styleContentKet}>{row.ket_pegawai}</p>
                    </div>
                    <p style={styleTxtKet}>
                      Pengajuan Ubah jadwal :
                      <p style={{ fontWeight: 600, margin: 0, marginLeft: 10 }}>
                        {`${moment(row.req_start_date).format(
                          "MMM"
                        )} - ${moment(row.req_end_date).format("MMM")}`}
                      </p>
                    </p>
                  </div>
                  <div className={styles.wrapperLampiran}>
                    Lampiran:
                    {row.files === "" ? null : (
                      <div className={styles.contentLampiran} onClick={btnDw}>
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
                          Permintaan Ubah Jadwal {row.nama} <b>Diterima</b>
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
                        Tolak Permintaan Ubah Jadwal
                      </h2>
                      <Gap height={20} width={0} />
                      <input
                        className={styles.inputBuktiLap}
                        placeholder="Tambah keterangan"
                        onChange={(e) => setKetAdmin(e.target.value)}
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
                          Permintaan Ubah Jadwal {row.nama} <b>Ditolak</b>
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
          </>
        ) : (
          <>
            <TableRow
              className={`${styles.tableRow} ${styleRow}`}
              onClick={() => {
                setOpen(!open);
                {
                  rowClik
                    ? (setStyleRow(
                        `${styles.tableRow} ${styles.tableRowClick}`
                      ),
                      setRowClick(!rowClik))
                    : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
                }
              }}
              sx={{ "& > *": { borderBottom: "" } }}
              hover
            >
              <TableCell style={style1}>
                <p onClick={() => console.log(row.files)}>{row.nama}</p>
              </TableCell>
              <TableCell>
                <p style={style2}>{row.tupoksi_inti}</p>
              </TableCell>
              <TableCell>
                <p style={style2}>{`${moment(row.start_date).format(
                  "MMM"
                )} - ${moment(row.end_date).format("MMM")}`}</p>
              </TableCell>
              <TableCell>
                <p style={style2}>
                  {row.files === "" ? null : (
                    <div className={styles.wrapFileLampiran}>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginRight: 10 }}>
                          <Image src={"/IconPDF.svg"} width={25} height={28} />
                        </div>
                        1 files
                      </div>
                      <Gap width={0} height={10} />
                    </div>
                  )}
                </p>
              </TableCell>
            </TableRow>
            {/* <div className={styles.backgroundRowExpand}> */}
            <TableCell style={{ padding: 0, width: 2000 }} colSpan={4}>
              <Collapse style={styleCollapse} in={open} timeout="auto">
                <div className={styles.wrapperExpand}>
                  <div className={styles.wrapperKeterangan}>
                    Keterangan:
                    <div className={styles.contentKeterangan}>
                      <p style={styleContentKet}>{row.ket_pegawai}</p>
                    </div>
                    <p style={styleTxtKet}>
                      Pengajuan Ubah jadwal :
                      <p style={{ fontWeight: 600, margin: 0, marginLeft: 10 }}>
                        {`${moment(row.req_start_date).format(
                          "MMM"
                        )} - ${moment(row.req_end_date).format("MMM")}`}
                      </p>
                    </p>
                  </div>
                  <div className={styles.wrapperLampiran}>
                    Lampiran:
                    {row.files === "" ? null : (
                      <div className={styles.contentLampiran} onClick={btnDw}>
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
                          Permintaan Ubah Jadwal {row.nama} <b>Diterima</b>
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
                        Tolak Permintaan Ubah Jadwal
                      </h2>
                      <Gap height={20} width={0} />
                      <input
                        className={styles.inputBuktiLap}
                        placeholder="Tambah keterangan"
                        onChange={(e) => setKetAdmin(e.target.value)}
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
                          Permintaan Ubah Jadwal {row.nama} <b>Ditolak</b>
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
          </>
        )}
      </React.Fragment>
    </>
  );
}

export const CUbahJadwalRenaksi = () => {
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
        Axios.get("http://localhost:3001/kasubidAmbilRenaksiMJD").then(
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

  const styleHeader = {
    fontFamily: "Poppins",
    fontSize: 22,
    fontWeight: 600,
    color: "rgba(149, 149, 149, 1)",
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitle}>
              <div>
                <Image src={"/UbahJadwalTitle.svg"} width={50} height={50} />
              </div>
              <p style={{ marginLeft: 5 }}>UBAH JADWAL RENAKSI</p>
            </div>
            <p className={stylesS.titleBidang}>Sub Bidang {subid}</p>
            <Gap height={50} width={0} />
            <TableContainer style={{ paddingLeft: 2, paddingRight: 40 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={styleHeader} width={500}>
                      Pegawai
                    </TableCell>
                    <TableCell style={styleHeader} width={500}>
                      Tupoksi
                    </TableCell>
                    <TableCell style={styleHeader} width={500}>
                      Rencana
                    </TableCell>
                    <TableCell style={styleHeader} width={500}>
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
