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

  const btnTerima = () => {
    Axios.get("http://localhost:3001/adminAmbilRenaksiSelesai").then(
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
        Axios.get("http://localhost:3001/adminAmbilRenaksiSelesai").then(
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

  const router = useRouter();

  const clickRow = () => {
    router.push({
      pathname: "/Admin/EvaluasiSubagSubid",
      query: {
        subid: row.sub_bidang,
        nip_kasubid: row.nip,
        bidang: row.bidang,
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

  const styleAksi = {
    flexDirection: "row",
    display: "flex",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 18,
    width: 130,
    justifyContent: "space-between",
    cursor: "pointer",
  };

  return (
    <>
      <React.Fragment>
        <TableRow
          className={`${styles.tableRow} ${styleRow}`}
          // sx={{ "& > *": { borderBottom: "" } }}
          hover
        >
          <TableCell>
            <p style={style1}>{row.sub_bidang}</p>
          </TableCell>
          <TableCell>
            <p style={style2}>{row.nama}</p>
          </TableCell>
          <TableCell>
            <div onClick={clickRow} style={styleAksi}>
              <Image src={"/LihatDetail.svg"} width={25} height={25} />
              Lihat detail
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
  const [ketAdmin, setKetAdmin] = useState("");
  const [dikunci, setDikunci] = useState("Tidak");

  const [pegawaiSubag, setPegawaiSubag] = useState([]);
  const [pegawaiSubid, setPegawaiSubid] = useState([]);
  const [deadline, setDeadline] = useState("");
  const [prevMonth, setPrevMonth] = useState("");
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);
      setDeadline(moment().format("YYYY-MM-05"));
      setPrevMonth(moment().subtract(1, "month").format("YYYY-MM-01"));

      Axios.get("http://localhost:3001/ambilKasubid").then((ambilKasubid) => {
        Axios.get("http://localhost:3001/adminAmbilRenaksiSelesai").then(
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

      Axios.get("http://localhost:3001/ambilRenaksi").then((ambilRenaksi) => {
        ambilRenaksi.data.map((renaksi) => {
          if (
            renaksi.kunci == "Ya" &&
            moment(renaksi.end_date).format("YYYY-MM-01") ==
              moment().subtract(1, "month").format("YYYY-MM-01")
          ) {
            setDikunci("Ya");
          }
        });
      });
    }
  }, []);

  const btnFilterBulan = () => {
    // setActiveDropdownBulan(!activeDropdownBulan);
    console.log(dataRenaksi);
  };

  const [modalTutup, setModalTutup] = useState(false);

  const btnTutup = () => {
    setModalTutup(true);
  };

  const btnDeadline = () => {
    if (
      moment().format("YYYY-MM-DD") == moment(deadline).format("YYYY-MM-DD")
    ) {
      Axios.get("http://localhost:3001/ambilRenaksi").then((ambilRenaksi) => {
        ambilRenaksi.data.map((renaksi) => {
          if (
            moment(renaksi.end_date).format("YYYY-MM-DD") ==
            moment(prevMonth).format("YYYY-MM-DD")
          ) {
            Axios.post("http://localhost:3001/deadline", {
              idRenaksi: renaksi.id_renaksi,
            }).then((result) => console.log(result));
          }
        });
      });

      closeModal();
    } else {
      null;
    }
  };

  const btnTutupForm = () => {
    Axios.get("http://localhost:3001/ambilRenaksi").then((ambilRenaksi) => {
      ambilRenaksi.data.map((renaksi) => {
        if (
          moment(renaksi.end_date).format("YYYY-MM-DD") ==
          moment(prevMonth).format("YYYY-MM-DD")
        ) {
          Axios.post("http://localhost:3001/deadline", {
            idRenaksi: renaksi.id_renaksi,
          }).then((result) => console.log(result));
        }
      });
    });

    closeModal();
  };

  const btnKirim = () => {
    closeModalBuka();
    Axios.post("http://localhost:3001/reqBukaForm", {
      ketAdmin: ketAdmin,
    });
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

  const custom = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 491,
      height: 219,
      borderRadius: 20,
      paddingTop: 20,
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

  const customBuka = {
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

  const [modalIsTutup, setIsTutupModal] = useState(false);
  const [modalIsOpen, setIsOpenModal] = useState(false);

  function openModal() {
    setIsTutupModal(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsTutupModal(false);
  }

  function openModalBuka() {
    setIsOpenModal(true);
  }

  function afterOpenModalBuka() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModalBuka() {
    setIsOpenModal(false);
  }

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
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

            <div className={styles.wrapTutupFilter}>
              {dikunci == "Ya" ? (
                <button className={styles.btnBukaForum} onClick={openModalBuka}>
                  <p>Buka Form</p>
                </button>
              ) : (
                <button className={styles.btnTutupForum} onClick={openModal}>
                  <Image src={"/TutupForum.svg"} width={25} height={25} />
                  <p>Tutup Form</p>
                </button>
              )}
            </div>
            <Modal
              isOpen={modalIsTutup}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={custom}
              contentLabel="Example Modal"
              className={styles.modal}
            >
              <h2 className={styles.headerTxtModal}>Tutup Form</h2>
              <h2 className={styles.dialog}>
                Apakah anda yakin ingin menutup Form?
              </h2>
              <Gap height={20} width={0} />
              <div className={styles.wrapperBtnModal}>
                <button onClick={btnTutupForm} className={styles.btnYa}>
                  <p className={styles.txt}>Ya</p>
                </button>
                <button onClick={closeModal} className={styles.btnTidak}>
                  <p>Tidak</p>
                </button>
              </div>
            </Modal>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModalBuka}
              onRequestClose={closeModalBuka}
              style={customBuka}
              contentLabel="Example Modal"
            >
              <h2 className={styles.headerTxtModalBuka}>Keterangan</h2>
              <Gap height={20} width={0} />
              <input
                className={styles.inputBuktiLapB}
                placeholder="Tambah keterangan"
                onChange={(e) => setKetAdmin(e.target.value)}
              />
              <Gap height={20} width={0} />
              <div className={styles.wrapBtnModalB}>
                <button onClick={closeModalBuka} className={styles.btnKirimB}>
                  <img src={"/BatalIcon.svg"} width={20} height={20} />
                  <p className={styles.txtB}>Batal</p>
                </button>
                <Gap width={24} height={0} />
                <button onClick={btnKirim} className={styles.btnBatalB}>
                  <img src={"/Tolak.svg"} width={20} height={20} />
                  <p>Kirim</p>
                </button>
              </div>
            </Modal>
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
