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
import btnStyles from "../Button/button.module.css";
import Axios from "axios";
import { useRouter } from "next/router";
import AmbilDataRenaksi from "../AmbilDataRenaksi";
import Link from "next/link";

Axios.defaults.withCredentials = true;

function Row(props) {
  const { row, stateChange } = props;
  const [open, setOpen] = React.useState(false);

  //style row
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");

  const [renaksiPegawai, setRenaksiPegawai] = useState([]);

  // const btnUnggah = () => {
  //   setShowModal(true);
  //   setTimeout(() => {
  //     setShowModal(false);
  //   }, 3000);
  // };

  // const btnUbah = () => {
  //   setShowModal_Ubah(true);
  //   setTimeout(() => {
  //     setShowModal_Ubah(false);
  //   }, 3000);
  // };

  // const btnHapus = () => {
  //   setShowModal_Hapus(true);
  //   setTimeout(() => {
  //     setShowModal_Hapus(false);
  //   }, 3000);
  // };

  const btnTerima = () => {
    Axios.get("http://localhost:3001/kasubidAmbilRenaksiMRD").then(
      (ambilRenaksi) => {
        ambilRenaksi.data.map((renaksiMRD) => {
          if (row.nip === renaksiMRD.nip) {
            Axios.post("http://localhost:3001/kasubidMenerimaRenaksi", {
              idRenaksi: renaksiMRD.id_renaksi,
            });
          }
        });
      }
    );

    // setShowModal(true);
    // setTimeout(() => {
    //   setShowModal(false);
    // }, 2000);

    setTimeout(() => {
      stateChange([]);

      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/ambilPegawai").then((ambilPegawai) => {
          Axios.get("http://localhost:3001/kasubidAmbilRenaksiMRD").then(
            (ambilRenaksi) => {
              let userLoggedIn = masuk.data.user;
              let pegawaiSubid = ambilPegawai.data;
              let renaksi = ambilRenaksi.data;

              let subidUserSDPegawai = [];
              let pegawaiYgAdaRenaksi = [];

              subidUserSDPegawai = pegawaiSubid.filter((elA) => {
                return userLoggedIn.some(
                  (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                );
              });

              pegawaiYgAdaRenaksi = subidUserSDPegawai.filter((elA) => {
                return renaksi.some((elB) => elA["nip"] === elB["nip"]);
              });

              pegawaiYgAdaRenaksi.map((item) => {
                stateChange((nextData) => {
                  return [item, ...nextData];
                });
              });
            }
          );
        });
      });
    }, 100);
  };

  // ! MODAL TERIMA TOLAK SEMUA
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

  const btnTerimaSemua = () => {
    Axios.get("http://localhost:3001/masuk").then((masuk) => {
      Axios.get("http://localhost:3001/kasubidAmbilRenaksiMRD").then(
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

    setShowModalTerimaAll(true);
    setTimeout(() => {
      setShowModalTerimaAll(false);
    }, 3000);

    stateChange([]);
  };

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

  const router = useRouter();
  const clickRowPegawai = () => {
    router.push({
      pathname: "/Kasubag/TinjauRenaksiPegawai",
      query: { nip: row.nip },
    });
    // <Link href={"/TinjauRenaksi/" + row.nip}></Link>;
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
        <Gap width={15} height={0} />
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
        </Modal>
      </div>
      <React.Fragment>
        <TableRow
          // onClick={() => clickRowPegawai()}
          // hover
          className={styles.styleRow}
        >
          <TableCell onClick={() => clickRowPegawai()}>
            <p style={style1}>{row.nama}</p>
          </TableCell>
          <TableCell onClick={() => clickRowPegawai()} style={style2}>
            {row.sub_bidang}
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
                      Renaksi {row.nama} <b>Ditolak</b>
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

export default function ContentDaftarKegiatan() {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [pegawai, setPegawai] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/ambilPegawai").then((ambilPegawai) => {
          Axios.get("http://localhost:3001/kasubidAmbilRenaksiMRD").then(
            (ambilRenaksi) => {
              let userLoggedIn = masuk.data.user;
              let pegawaiSubid = ambilPegawai.data;
              let renaksi = ambilRenaksi.data;
              // console.log("User Logged In: ", userLoggedIn);
              // console.log("Pegawai Subid: ", pegawaiSubid);
              // console.log("Renaksi: ", renaksi);

              let subidUserSDPegawai = [];
              let pegawaiYgAdaRenaksi = [];

              subidUserSDPegawai = pegawaiSubid.filter((elA) => {
                return userLoggedIn.some(
                  (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                );
              });

              pegawaiYgAdaRenaksi = subidUserSDPegawai.filter((elA) => {
                return renaksi.some((elB) => elA["nip"] === elB["nip"]);
              });

              pegawaiYgAdaRenaksi.map((item) => {
                setPegawai((nextData) => {
                  return [item, ...nextData];
                });
              });

              // console.log("Subid Sama: ", subidUserSDPegawai);
              // console.log("Pegawai Ada Renaksi: ", pegawaiYgAdaRenaksi);
            }
          );
        });
      });
    }
  }, []);

  const router = useRouter();

  const lihatSemua = () => {
    // setActiveDropdown(!activeDropdown);
    // console.log(dataRenaksi);
    router.push("/Kasubag/TinjauRenaksiLihatSemua");
  };

  const [showModal, setShowModal] = useState(false);

  const styleHeader = {
    fontFamily: "Poppins",
    fontSize: 22,
    fontWeight: 600,
    color: "rgba(149, 149, 149, 1)",
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
                <Image src={"/TinjauRenaksiTitle.svg"} width={40} height={40} />
              </div>
              <p style={{ marginLeft: 5, marginBottom: 10 }}>
                TINJAU RENAKSI
              </p>
            </div>
            <div className={stylesS.wrapLihatSemua}>
              <button onClick={lihatSemua} className={stylesS.btnFilter}>
                <Image src={"/LihatSemua.svg"} width={25} height={25} />
                Lihat Semua
              </button>
            </div>
            <Gap height={186} width={0} />
            <TableContainer
              style={styleContainer}
            >
              <Table sx={{ tableLayout: "fixed" }}>
                <TableHead>
                  <TableRow>
                    <TableCell style={styleHeader}>Pegawai</TableCell>
                    <TableCell style={styleHeader}>Sub Bidang</TableCell>
                    <TableCell style={styleHeader}>Aksi</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pegawai.map((row) => (
                    <Row key={row.nip} row={row} stateChange={setPegawai} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </>
  );
}
