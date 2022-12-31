import React, { useEffect, useState, useRef } from "react";
import stylesS from "./cUbahJadwalRenaksi.module.css";

import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./TableMUI.module.css";
import Image from "next/future/image";
import Gap from "../Gap";
import Axios from "axios";
import moment, { duration } from "moment";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import FileDownload from "js-file-download";
import Modal from "react-modal";
import { Checkbox } from "@mui/material";
import { useRouter } from "next/router";

Axios.defaults.withCredentials = true;

function Row(props) {
  const { row, stateChanger, subid } = props;
  const [open, setOpen] = React.useState(false);

 

  //style row
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");
  const [ketAdmin, setKetAdmin] = useState("");

  const btnTerima = () => {
    Axios.post("http://localhost:3001/adminMenerimaRenaksiDihapus", {
      idRenaksi: row.id_renaksi,
      ketAdmin: ketAdmin,
      nip: row.nip,
      req_start_date: row.req_start_date,
      req_end_date: row.req_end_date,
      files: row.files,
      start_date: row.start_date,
      end_date: row.end_date,
      thl: row.thl,
    });
    stateChanger([]);

    setTimeout(() => {
      Axios.get("http://localhost:3001/adminAmbilRenaksiDihapus").then(
        (ambilRenaksi) => {
          ambilRenaksi.data.map((renaksi) => {
            if (renaksi.sub_bidang === subid) {
              stateChanger((nextData) => {
                return [renaksi, ...nextData];
              });
            }
          });
        }
      );
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

  const [showModal, setShowModal] = useState(false);
  const [showModalTolak, setShowModalTolak] = useState(false);

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
    Axios.post("http://localhost:3001/adminMenolakRenaksiDihapus", {
      idRenaksi: row.id_renaksi,
      ketAdmin: ketAdmin,
      nip: row.nip,
    });
    stateChanger([]);

    setTimeout(() => {
      Axios.get("http://localhost:3001/adminAmbilRenaksiDihapus").then(
        (ambilRenaksi) => {
          ambilRenaksi.data.map((renaksi) => {
            if (renaksi.sub_bidang === subid) {
              stateChanger((nextData) => {
                return [renaksi, ...nextData];
              });
            }
          });
        }
      );
    }, 100);
    closeModal();
    btnTolak();
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

  const styleCollapse = {
    background: "rgba(232, 232, 232, 1)",
    borderTopColor: "rgba(165, 165, 165, 0.5)",
    borderTopWidth: 2,
    borderTopStyle: "solid",
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginTop: -10.8,
  };

  const styleContentKet = {
    maxWidth: 930,
    height: 140,
    overflow: "auto",
    paddingRight: 10,
    marginTop: 8,
  };

  return (
    <>
      <React.Fragment>
        {row.ditolak == "Admin" && row.kirim_ke == "Admin" ? (
          //!! STYLE YG INI ANDRE
          <>
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
          hover
          // sx={{ "& > *": { borderBottom: "" } }}
        >
          <TableCell>
            <p style={style1}>{row.nama}</p>
          </TableCell>
          <TableCell>
            <p style={style2}>{row.tupoksi_inti}</p>
          </TableCell>
          <TableCell>
            <p style={style2}>{row.kegiatan}</p>
          </TableCell>
          <TableCell>
            <div
              style={{
                position: "absolute",
                // marginTop: -35,
                right: 43,
              }}
            >
              <Image src={"/Tanggapan.svg"} width={40} height={40} />
            </div>
            <p className={stylesS.styleTxtRow}>
              {row.files === "" ? null : (
                <div className={styles.wrapFileLampiran}>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Image src={"/IconPDF.svg"} width={25} height={28} />
                    </div>
                    1 files
                  </div>
                </div>
              )}
            </p>
          </TableCell>
        </TableRow>
        {/* <div className={styles.backgroundRowExpand}> */}
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse style={styleCollapse} in={open} timeout={480}>
            <div className={styles.wrapperExpand}>
              <div className={styles.wrapperKeterangan}>
                Keterangan:
                <div className={styles.contentKeterangan}>
                  <p style={styleContentKet}>{row.ket_pegawai}</p>
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
                      <p style={{ marginLeft: 10 }}> File Laporan</p>
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
                      Ubah Jadwal Denny G. Lumy <b>Diterima</b>
                    </p>
                    <div className={styles.checkCircle}>
                      <Image src={"/Check-circle.svg"} width={25} height={25} />
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
                    Tolak Permintaan Hapus Renaksi
                  </h2>
                  <Gap height={20} width={0} />
                  <input
                    className={styles.inputBuktiLap}
                    placeholder="Tambah keterangan"
                    onChange={(e) => setKetAdmin(e.target.value)}
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
                {showModalTolak ? (
                  <div
                    className={styles.modal}
                    onClick={() => setShowModalTolak(false)}
                  >
                    <p>
                      Ubah Jadwal {row.nama} <b>Ditolak</b>
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
                ? (setStyleRow(`${styles.tableRow} ${styles.tableRowClick}`),
                  setRowClick(!rowClik))
                : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
            }
          }}
          hover
          // sx={{ "& > *": { borderBottom: "" } }}
        >
          <TableCell>
            <p style={style1}>{row.nama}</p>
          </TableCell>
          <TableCell>
            <p style={style2}>{row.tupoksi_inti}</p>
          </TableCell>
          <TableCell>
            <p style={style2}>{row.kegiatan}</p>
          </TableCell>
          <TableCell>
            {/* <div
              style={{
                position: "absolute",
                // marginTop: -35,
                right: 43,
              }}
            >
              <Image src={"/Tanggapan.svg"} width={40} height={40} />
            </div> */}
            <p className={stylesS.styleTxtRow}>
              {row.files === "" ? null : (
                <div className={styles.wrapFileLampiran}>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: 10 }}>
                      <Image src={"/IconPDF.svg"} width={25} height={28} />
                    </div>
                    1 files
                  </div>
                </div>
              )}
            </p>
          </TableCell>
        </TableRow>
        {/* <div className={styles.backgroundRowExpand}> */}
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse style={styleCollapse} in={open} timeout={480}>
            <div className={styles.wrapperExpand}>
              <div className={styles.wrapperKeterangan}>
                Keterangan:
                <div className={styles.contentKeterangan}>
                  <p style={styleContentKet}>{row.ket_pegawai}</p>
                </div>
              </div>
              <div className={styles.wrapperLampiran}>
                Lampiran:
                {row.files === "" ? null : (
                  <div className={styles.contentLampiran} onClick={btnDw}>
                    <div className={styles.fileLampiran}>
                      <Image src={"/IconPDF.svg"} width={35} height={40} />
                      <p style={{ marginLeft: 10 }}> File Laporan</p>
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
                      Ubah Jadwal {nama} <b>Diterima</b>
                    </p>
                    <div className={styles.checkCircle}>
                      <Image src={"/Check-circle.svg"} width={25} height={25} />
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
                    Tolak Permintaan Hapus Renaksi
                  </h2>
                  <Gap height={20} width={0} />
                  <input
                    className={styles.inputBuktiLap}
                    placeholder="Tambah keterangan"
                    onChange={(e) => setKetAdmin(e.target.value)}
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
                {showModalTolak ? (
                  <div
                    className={styles.modal}
                    onClick={() => setShowModalTolak(false)}
                  >
                    <p>
                      Ubah Jadwal {row.nama} <b>Ditolak</b>
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

export const CHapusRenaksiSubagSubid = () => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [asn, setAsn] = useState("");
  const [thnSkrg, setThnSkrg] = useState("");
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [subid, setSubid] = useState("");

  const [pegawai, setPegawai] = useState([]);
  const shouldLog = useRef(true);
  useEffect(() => {
    if (!router.isReady) return;
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      Axios.get("http://localhost:3001/adminAmbilRenaksiDihapus").then(
        (ambilRenaksi) => {
          ambilRenaksi.data.map((renaksi) => {
            if (renaksi.sub_bidang === router.query.subid) {
              setPegawai((nextData) => {
                return [renaksi, ...nextData];
              });
            }
          });
        }
      );
    }
  }, [router.query, router.isReady]);

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

  const clickBack = () => {
    router.push("/Admin/HapusRenaksi");
    // console.log(dataCakin);
  };

  const styleContainer = { paddingLeft: 2, paddingRight: 40 };
  const styleTitle = {
    marginLeft: 5,
    marginBottom: 10,
    color: "rgba(221, 202, 27, 1)",
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={styles.wrapperTitle}>
              <div>
                <Image
                  style={{ cursor: "pointer" }}
                  onClick={clickBack}
                  src={"/Back.svg"}
                  width={45}
                  height={45}
                />
              </div>
              <div>
                <Image src={"/HapusRenaksiTitle.svg"} width={50} height={40} />
              </div>
              <p style={styleTitle}>HAPUS RENAKSI</p>
            </div>
            <Gap height={150} width={0} />
            <TableContainer style={styleContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={style} width={500}>
                      Pegawai
                    </TableCell>
                    <TableCell style={style} width={500}>
                      Tupoksi
                    </TableCell>
                    <TableCell style={style} width={500}>
                      Rencana
                    </TableCell>
                    <TableCell style={style} width={500}>
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
                      subid={router.query.subid}
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
