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
// import "jspdf-autotable";
import Modal from 'react-modal'

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

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  // ? CUSTOM STYLE MODAL UNGGAH N HAPUS RENAKSI
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

  const btnTerima = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
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
  return (
    <>
      <div className={stylesS.wrapFilter}>
        <button onClick={btnTerimaAll} className={styles.btnTerimaAll}>
          <Image src={"/Terima.svg"} width={25} height={25} />
          Terima Semua
        </button>
        {showModalTerimaAll ? (
          <div
            className={styles.modal}
            onClick={() => setShowModalTolakAll(false)}
          >
            <p>
              Semua Lampiran Bukti <b>Diterima</b>
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
          <h2 className={styles.headerTxtModal}>Tolak Semua Lampiran Bukti</h2>
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
              Semua Lampiran Bukti <b>Ditolak</b>
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
            <p className={stylesS.rekanNama}>{row.nama}</p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>{row.tupoksi_tambahan}</p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>{row.kegiatan}</p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>
              <div className={styles.wrapFileLampiran}>
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: 10 }}>
                    <Image src={"/IconPDF.svg"} width={25} height={28} />
                  </div>
                  1 files
                </div>
                <Gap width={0} height={10} />
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: 10 }}>
                    <Image src={"/IconPDF.svg"} width={25} height={28} />
                  </div>
                  2 files
                </div>
              </div>
            </p>
          </TableCell>
        </TableRow>
        <TableContainer
          style={{
            width: 1680,
            marginTop: -20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            // paddingBottom: 35,
          }}
        >
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
              <TableRow>
                <div className={styles.wrapperExpand}>
                  <div className={styles.wrapperKeterangan}>
                    Keterangan:
                    <div className={styles.contentKeterangan}>
                      Permintaan ubah jadwal tidak dapat dilakukan, karena
                      alasan yang diberikan tidak dapat diterimaPermintaan ubah
                      jadwal tidak dapat dilakukan, karena alasan yang diberikan
                      tidak dapat diterimaPermintaan ubah jadwal tidak
                      dapatPermintaan ubah jadwal tidak dapat dilakukan, karena
                      alasan yang diberikan tidak dapat diterima.
                      <p
                        style={{
                          display: "flex",
                          position: "absolute",
                          top: 140,
                          color: "rgba(149, 149, 149, 1)",
                          // top: 10,
                        }}
                      >
                        Pengajuan Ubah jadwal :
                        <p
                          style={{ fontWeight: 600, margin: 0, marginLeft: 10 }}
                        >
                          Mei - Juni
                        </p>
                      </p>
                    </div>
                  </div>
                  <div className={styles.wrapperLampiran}>
                    Lampiran:
                    <div className={styles.contentLampiran}>
                      <div className={styles.fileLampiran}>
                        <Image src={"/IconPNG.svg"} width={35} height={40} />
                        <p style={{ marginLeft: 5 }}> Foto Laporan</p>
                      </div>
                      <div className={styles.fileLampiran}>
                        <Image src={"/IconPDF.svg"} width={35} height={40} />
                        <p style={{ marginLeft: 5 }}> File Laporan</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapperBtnTerimaTolak}>
                    <Gap width={0} height={50} />
                    <button onClick={btnTerima} className={styles.styleBtn}>
                      <Image src={"/Terima.svg"} width={30} height={30} />
                      <p>Terima</p>
                    </button>
                    <Gap width={0} height={20} />
                    <button
                      onClick={openModal}
                      style={{
                        fontWeight: 700,
                        background: "rgba(255, 1, 100, 1)",
                      }}
                      className={styles.styleBtn}
                    >
                      <Image src={"/Tolak.svg"} width={30} height={30} />
                      <p>Tolak</p>
                    </button>
                  </div>
                </div>
              </TableRow>
            </Collapse>
          </TableCell>
        </TableContainer>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={custom}
          contentLabel="Example Modal"
        >
          <h2 className={styles.headerTxtModal}>Tolak Lampiran Bukti</h2>
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
          <div className={styles.modal} onClick={() => setShowModal(false)}>
            <p>
              Lampiran Bukti Ferren Kalalo <b>Diterima</b>
            </p>
            <div className={styles.checkCircle}>
              <Image src={"/Check-circle.svg"} width={25} height={25} />
            </div>
          </div>
        ) : null}
        {showModalTolak ? (
          <div
            className={styles.modal}
            onClick={() => setShowModalTolak(false)}
          >
            <p>
              Lampiran Bukti Ferren Kalalo <b>Ditolak</b>
            </p>
            <div className={styles.checkCircle}>
              <Image src={"/Tolak.svg"} width={25} height={25} />
            </div>
          </div>
        ) : null}
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

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);
      setThnSkrg(moment().format("YYYY"));
      Axios.get("http://localhost:3001/ambilRenaksi").then((result) => {
        result.data.map((item) => {
          if (
            moment(item.end_date).format("YYYY") === moment().format("YYYY")
          ) {
            setDataRenaksi((nextData) => {
              return [...nextData, item];
            });
          }
        });
      });

      Axios.get("http://localhost:3001/masuk").then((dataPegawai) => {
        setAsn(dataPegawai.data.user[0]);
      });
    }
  }, []);

  const btnFilterBulan = () => {
    // setActiveDropdownBulan(!activeDropdownBulan);
    console.log(dataRenaksi);
  };

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);
  const [activeDropdownBulan, setActiveDropdownBulan] = useState(false);
  const [activeDropdownUnduh, setActiveDropdownUnduh] = useState(false);

  const btnDwExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(dataRenaksi);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "dataRenaksi");

    //BUFFER
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });

    //BINARY STRING
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

    //DOWNLOAD
    XLSX.writeFile(workBook, `Data Renaksi ${asn.nama}.xlsx`);
  };

  const btnDwPDF = () => {
    const unit = "pt";
    const size = "A3";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = `Data Renaksi ${asn.nama}`;
    const headers = [
      [
        "Program",
        "Kegiatan",
        "Sub Kegiatan",
        "Tupoksi",
        "Rekan",
        "Rencana",
        "Status",
      ],
    ];

    const data = dataRenaksi.map((item) => [
      item.program,
      item.kegiatan,
      item.sub_kegiatan,
      item.tupoksi_tambahan,
      item.nama,
      item.end_date,
      item.status,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
      theme: "grid",
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`Data Renaksi ${asn.nama}`);
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
              />
              <p className={stylesS.txtTitle}>Evaluasi Lampiran Bukti</p>
            </div>
            <p className={stylesS.titleBidang}>Bidang Pajak Daerah</p>
            <Gap height={50} width={0} />

            <TableContainer
              style={{ paddingLeft: 0, paddingRight: 40, zIndex: 998 }}
            >
              <Table sx={{ tableLayout: "fixed" }}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#959595",
                      }}
                      width={0}
                    >
                      Pegawai
                    </TableCell>
                    {/* <TableCell className={styles.headerTable} width={0}>
                      Pegawai
                    </TableCell> */}
                    <TableCell className={styles.headerTable} width={0}>
                      Tupoksi
                    </TableCell>
                    <TableCell className={styles.headerTable} width={0}>
                      Rencana
                    </TableCell>
                    <TableCell className={styles.headerTable} width={0}>
                      Lampiran
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataRenaksi.map((row) => (
                    <Row key={row.id_renaksi} row={row} />
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
