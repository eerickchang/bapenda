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
import moment from "moment";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import FileDownload from "js-file-download";
import Modal from "react-modal";
import { Checkbox } from "@mui/material";
import { useRouter } from "next/router";

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
  const { row, stateChanger, arrSubid } = props;
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
    Axios.get("http://localhost:3001/kabanAmbilRenaksiMJD").then(
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
        Axios.get("http://localhost:3001/kabanAmbilRenaksiMJD").then(
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
    }, 30);
  };

  const btnTerima = () => {
    Axios.get("http://localhost:3001/kabanAmbilRenaksiMJD").then(
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
        Axios.get("http://localhost:3001/kabanAmbilRenaksiMJD").then(
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
    }, 30);

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

  const router = useRouter();

  const clickRow = () => {
    router.push({
      pathname: "/Kaban/UbahJadwal",
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
              Semua Renaksi <b>Diterima</b>
            </p>
            <div className={styles.checkCircle}>
              <Image src={"/Terima.svg"} width={25} height={25} />
            </div>
          </div>
        ) : null}
        {/* <Gap width={15} height={0} />
        <button onClick={openModalTolakAll} className={styles.btnTolakAll}>
          <Image src={"/Tolak.svg"} width={25} height={25} />
          Tolak Semua
        </button>
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
        <Modal
          isOpen={modalTolakAllIsOpen}
          onAfterOpen={afterOpenModalTolakAll}
          onRequestClose={closeModal}
          style={custom}
          contentLabel="Example Modal"
        >
          <h2 className={styles.headerTxtModal}>Tolak Semua Renaksi</h2>
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
        </Modal> */}
      </div>
      <React.Fragment>
        <TableRow
          className={`${styles.tableRow} ${styleRow}`}
          // sx={{ "& > *": { borderBottom: "" } }}
        >
          <TableCell onClick={clickRow}>
            <p style={style1}>{row.sub_bidang}</p>
          </TableCell>
          <TableCell onClick={clickRow}>
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

export const CUbahJadwalRenaksi = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [asn, setAsn] = useState("");
  const [thnSkrg, setThnSkrg] = useState("");
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [subid, setSubid] = useState("");

  const [pegawaiSubag, setPegawaiSubag] = useState([]);
  const [pegawaiSubid, setPegawaiSubid] = useState([]);
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      Axios.get("http://localhost:3001/ambilKasubid").then((ambilKasubid) => {
        Axios.get("http://localhost:3001/kabanAmbilRenaksiMJD").then(
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
    zIndex: 998,
    paddingBottom: 20,
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitle}>
              <div>
                <Image src={"/UbahJadwalTitle.svg"} width={40} height={40} />
              </div>
              <p
                style={{
                  marginLeft: 5,
                  marginBottom: 10,
                  color: "rgba(221, 202, 27, 1)",
                }}
              >
                UBAH JADWAL
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
                  {pegawaiSubid.map((row) => (
                    <Row
                      key={row.id_renaksi}
                      row={row}
                      stateChanger={setPegawaiSubid}
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
