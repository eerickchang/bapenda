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

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // An function that increment 👆🏻 the previous state like here
  // is better than directly setting `value + 1`
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row, stateChange } = props;
  const [open, setOpen] = React.useState(false);

  // ? CUSTOM STYLE MODAL UNGGAH N HAPUS RENAKSI
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

  // ? CUSTOM STYLE MODAL UBAH JADWAL RENAKSI
  const customUbah = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 878,
      borderRadius: 20,
      paddingLeft: 61,
      height: 433,
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

  //style row
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");

  const [renaksiPegawai, setRenaksiPegawai] = useState([]);

  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalUbahJadwalIsOpen, setIsOpenModalUbahJadwal] = useState(false);
  const [modalHapusRenaksiIsOpen, setIsOpenMOdalHapusRenaksi] = useState(false);
  //!modals
  const [showModal, setShowModal] = useState(false);
  const [showModal_Ubah, setShowModal_Ubah] = useState(false);
  const [showModal_Hapus, setShowModal_Hapus] = useState(false);

  const btnUnggah = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const btnUbah = () => {
    setShowModal_Ubah(true);
    setTimeout(() => {
      setShowModal_Ubah(false);
    }, 3000);
  };

  const btnHapus = () => {
    setShowModal_Hapus(true);
    setTimeout(() => {
      setShowModal_Hapus(false);
    }, 3000);
  };

  const btnTerima = () => {
    Axios.get("http://localhost:3001/kabidAmbilRenaksiHapus").then(
      (ambilRenaksi) => {
        ambilRenaksi.data.map((renaksiSelesai) => {
          if (row.sub_bidang === renaksiSelesai.sub_bidang) {
            Axios.post("http://localhost:3001/kabidMenerimaRenaksi", {
              idRenaksi: renaksiSelesai.id_renaksi,
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
        Axios.get("http://localhost:3001/ambilKasubid").then((ambilKasubid) => {
          Axios.get("http://localhost:3001/kabidAmbilRenaksiHapus").then(
            (ambilRenaksi) => {
              let bidangUserSDKabid = [];
              let pegawaiYgAdaRenaksi = [];
              let userLoggedIn = masuk.data.user;
              let kasubid = ambilKasubid.data;
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
                stateChange((nextData) => {
                  return [item, ...nextData];
                });
              });

              console.log("Bidang Sama: ", bidangUserSDKabid);
              console.log("Pegawai Ada Renaksi: ", pegawaiYgAdaRenaksi);
            }
          );
        });
      });
    }, 100);
  };

  // ! MODAL UNGGAH LAPORAN
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

  // ! MODAL UBAH JADAWAL
  function openModalUbah() {
    setIsOpenModalUbahJadwal(true);
  }

  function afterOpenModalUbah() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModalUbah() {
    setIsOpenModalUbahJadwal(false);
  }

  // ! MODAL HAPUS RENAKSI
  function openModalHapus() {
    setIsOpenMOdalHapusRenaksi(true);
  }

  function afterOpenModalHapus() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModalHapus() {
    setIsOpenMOdalHapusRenaksi(false);
  }

  // call your hook here
  const forceUpdate = useForceUpdate();

  const router = useRouter();

  const clickRow = () => {
    router.push({
      pathname: "/Kabid/HapusRenaksiSubidPegawai",
      query: { sub_bidang: row.sub_bidang },
    });
  };

  const style1 = {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 600,
    color: "#000",
    cursor: "pointer",
  };
  const style2 = {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 400,
    color: "#000",
    cursor: "pointer",
  };

  return (
    <React.Fragment>
      <TableRow hover className={styles.styleRow}>
        <TableCell onClick={() => clickRow()} style={style1}>
          <p style={{ fontWeight: 600 }}>{row.sub_bidang}</p>
        </TableCell>
        <TableCell style={style2}>{row.nama}</TableCell>
        <TableCell>
          <div style={style2}>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <button className={styles.btnTerima} onClick={() => btnTerima()}>
                <Image src={"/Terima.svg"} width={20} height={20} /> Terima
              </button>
              {showModal ? (
                <div
                  className={styles.modal}
                  onClick={() => setShowModal(false)}
                >
                  <p>
                    Input Renaksi Feren <b>Berhasil</b>
                    <div className={styles.checkCircle}>
                      <Image src={"/Check-circle.svg"} width={25} height={25} />
                    </div>
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CHapusRenaksi() {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [pegawai, setPegawai] = useState([]);
  const [subBidang, setSubBidang] = useState([]);
  const [bidang, setBidang] = useState("");

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        setBidang(masuk.data.user[0].bidang);
        Axios.get("http://localhost:3001/ambilKasubid").then((ambilKasubid) => {
          Axios.get("http://localhost:3001/kabidAmbilRenaksiHapus").then(
            (ambilRenaksi) => {
              let bidangUserSDKabid = [];
              let pegawaiYgAdaRenaksi = [];
              let userLoggedIn = masuk.data.user;
              let kasubid = ambilKasubid.data;
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
                <Image src={"/HapusRenaksiTitle.svg"} width={45} height={45} />
              </div>
              <p style={{ marginLeft: 5 }}> HAPUS RENAKSI </p>
            </div>
            <Gap height={88} width={0} />
            <p className={stylesS.titleBidang}>Bidang {bidang}</p>
            <Gap height={50} width={0} />
            <TableContainer
              style={{
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
