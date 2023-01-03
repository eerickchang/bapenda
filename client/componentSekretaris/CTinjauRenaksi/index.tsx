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
import Image from "next/future/image";
import moment from "moment";

import Modal from "react-modal";
import Gap from "../Gap";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";
import Axios from "axios";
import { useRouter } from "next/router";
import AmbilDataRenaksi from "../AmbilDataRenaksi";

Axios.defaults.withCredentials = true;

function Row(props) {
  const { row, stateChange } = props;
  const [open, setOpen] = React.useState(false);
  const [ketAdmin, setKetAdmin] = useState("");

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
    Axios.get("http://localhost:3001/kabidAmbilRenaksiMRD").then(
      (ambilRenaksi) => {
        ambilRenaksi.data.map((renaksiMRD) => {
          if (row.sub_bidang === renaksiMRD.sub_bidang) {
            Axios.post("http://localhost:3001/kabidMenerimaRenaksi", {
              idRenaksi: renaksiMRD.id_renaksi,
            });
          }
        });
      }
    );
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);

    stateChange([]);
    setTimeout(() => {
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/ambilKasubag").then((ambilKasubag) => {
          Axios.get("http://localhost:3001/kabidAmbilRenaksiMRD").then(
            (ambilRenaksi) => {
              let bidangUserSDKabid = [];
              let pegawaiYgAdaRenaksi = [];
              let userLoggedIn = masuk.data.user;
              let kasubid = ambilKasubag.data;
              let renaksi = ambilRenaksi.data;

              bidangUserSDKabid = kasubid.filter((elA) => {
                return userLoggedIn.some(
                  (elB) => elA["bidang"] === elB["bidang"]
                );
              });

              pegawaiYgAdaRenaksi = bidangUserSDKabid.filter((elA) => {
                return renaksi.some(
                  (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                );
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
    Axios.get("http://localhost:3001/kabidAmbilRenaksiMRD").then(
      (ambilRenaksi) => {
        ambilRenaksi.data.map((renaksiMRD) => {
          if (row.sub_bidang === renaksiMRD.sub_bidang) {
            Axios.post("http://localhost:3001/kabidMenolakRenaksi", {
              idRenaksi: renaksiMRD.id_renaksi,
              ketAdmin: ketAdmin,
            });
          }
        });
      }
    );

    stateChange([]);
    setTimeout(() => {
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/ambilKasubag").then((ambilKasubag) => {
          Axios.get("http://localhost:3001/kabidAmbilRenaksiMRD").then(
            (ambilRenaksi) => {
              let bidangUserSDKabid = [];
              let pegawaiYgAdaRenaksi = [];
              let userLoggedIn = masuk.data.user;
              let kasubid = ambilKasubag.data;
              let renaksi = ambilRenaksi.data;

              bidangUserSDKabid = kasubid.filter((elA) => {
                return userLoggedIn.some(
                  (elB) => elA["bidang"] === elB["bidang"]
                );
              });

              pegawaiYgAdaRenaksi = bidangUserSDKabid.filter((elA) => {
                return renaksi.some(
                  (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                );
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
  const clickRowSubid = () => {
    router.push({
      pathname: "/Sekretaris/TinjauRenaksiSubidang",
      query: { sub_bidang: row.sub_bidang },
    });
  };

  const clickRowSubidFeedback = () => {
    router.push({
      pathname: "/Sekretaris/TinjauRenaksiSubidangFeedback",
      query: { sub_bidang: row.sub_bidang },
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
      <React.Fragment>
        <TableRow hover className={styles.styleRow}>
          <TableCell
            onClick={() => clickRowSubid()}
            className={styles.styleData}
            style={style2}
          >
            {row.sub_bidang}
          </TableCell>
          <TableCell
            onClick={() => clickRowSubid()}
            className={styles.styleData}
            style={style1}
          >
            <p style={{ fontWeight: 600 }}>{row.nama}</p>
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
                      Renaksi Renbang <b>Diterima</b>
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
                <div
                  onClick={() => clickRowSubidFeedback()}
                  style={{
                    position: "absolute",
                    // marginTop: -35,
                    right: 43,
                    cursor: "pointer",
                  }}
                >
                  <Image src={"/Tanggapan.svg"} width={40} height={40} />
                </div>
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
                {showModal ? (
                  <div
                    className={styles.modal}
                    onClick={() => setShowModal(false)}
                  >
                    <p>
                      Renaksi Sub Bidang Renbang <b>Ditolak</b>
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
        <Gap height={16} width={0} />
      </React.Fragment>
    </>
  );
}

export default function CTinjauRenaksi() {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [subBidang, setSubBidang] = useState([]);
  const [bidang, setBidang] = useState("");

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        setBidang(masuk.data.user[0].bidang);
        Axios.get("http://localhost:3001/ambilKasubag").then((ambilKasubag) => {
          Axios.get("http://localhost:3001/kabidAmbilRenaksiMRD").then(
            (ambilRenaksi) => {
              let bidangUserSDKabid = [];
              let pegawaiYgAdaRenaksi = [];
              let userLoggedIn = masuk.data.user;
              let kasubid = ambilKasubag.data;
              let renaksi = ambilRenaksi.data;
              console.log("User Logged In: ", userLoggedIn);
              console.log("Kasubid: ", kasubid);
              console.log("Renaksi: ", renaksi);

              bidangUserSDKabid = kasubid.filter((elA) => {
                return userLoggedIn.some(
                  (elB) => elA["bidang"] === elB["bidang"]
                );
              });

              pegawaiYgAdaRenaksi = bidangUserSDKabid.filter((elA) => {
                return renaksi.some(
                  (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                );
              });

              pegawaiYgAdaRenaksi.map((item) => {
                setSubBidang((nextData) => {
                  return [item, ...nextData];
                });
              });

              console.log("Bidang Sama: ", bidangUserSDKabid);
              console.log("Pegawai Ada Renaksi: ", pegawaiYgAdaRenaksi);
            }
          );
        });
      });
    }
  }, []);

  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const style = {
    fontFamily: "Poppins",
    fontSize: 17,
    fontWeight: 600,
    color: "#959595",
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitle}>
              <div>
                <Image src={"/TinjauRenaksiTitle.svg"} width={50} height={40} />
              </div>
              <p style={{ marginLeft: 5, marginBottom: 10 }}>
                {" "}
                TINJAU RENAKSI{" "}
              </p>
            </div>
            <Gap height={88} width={0} />
            <p className={stylesS.titleBidang}>Bidang {bidang}</p>
            <Gap height={50} width={0} />
            <TableContainer
              style={{
                paddingLeft: 2,
                paddingRight: 40,
                paddingBottom: 20,
              }}
            >
              <Table sx={{ tableLayout: "fixed" }}>
                <TableHead>
                  <TableRow>
                    <TableCell style={style}>Sub Bidang</TableCell>
                    <TableCell style={style}>Kepala Sub Bidang</TableCell>
                    <TableCell style={style}>Aksi</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subBidang.map((row) => (
                    <Row key={row.nip} row={row} stateChange={setSubBidang} />
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
