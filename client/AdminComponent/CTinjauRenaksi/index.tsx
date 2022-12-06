import React, { useEffect, useRef, useState } from "react";
import stylesS from "./cUbahJadwalRenaksi.module.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Axios from "axios";
import "jspdf-autotable";
import Image from "next/future/image";
import { useRouter } from "next/router";
import Gap from "../Gap";
import styles from "./TableMUI.module.css";

Axios.defaults.withCredentials = true;

function Row(props) {
  const { row, stateChanger, arrSubid } = props;
  const [open, setOpen] = React.useState(false);
  const [ketKaban, setKetKaban] = useState("");

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
    Axios.get("http://localhost:3001/adminAmbilRenaksiMRD").then(
      (ambilRenaksi) => {
        ambilRenaksi.data.map((renaksi) => {
          if (row.sub_bidang === renaksi.sub_bidang) {
            Axios.post("http://localhost:3001/adminMenerimaRenaksiFinal", {
              idRenaksi: renaksi.id_renaksi,
            });
          }
        });
      }
    );

    stateChanger([]);
    setTimeout(() => {
      Axios.get("http://localhost:3001/ambilKasubid").then((ambilKasubid) => {
        Axios.get("http://localhost:3001/adminAmbilRenaksiMRD").then(
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

  const router = useRouter();

  const clickRow = () => {
    router.push({
      pathname: "/Admin/TinjauRenaksiLihatSemua",
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
      <div className={stylesS.wrapFilter}>
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
        <TableRow className={`${styles.tableRow} ${styleRow}`}hover>
          <TableCell>
            <p style={style1}>{row.sub_bidang}</p>
          </TableCell>
          <TableCell>
            <div onClick={clickRow} style={styleAksi}>
              <Image src={"/LihatDetail.svg"} width={25} height={25} />
              Lihat detail
            </div>
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
              </div>
            </div>
          </TableCell>
        </TableRow>
      </React.Fragment>
    </>
  );
}

export const CTinjauRenaksi = () => {
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
        Axios.get("http://localhost:3001/adminAmbilRenaksiMRD").then(
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

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitle}>
              <div>
                <Image src={"/TinjauRenaksiTitle.svg"} width={40} height={40} />
              </div>
              <p style={{ marginLeft: 5, marginBottom: 10 }}>TINJAU RENAKSI</p>
            </div>
            <Gap height={150} width={0} />
            <TableContainer style={styleContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={style} width={700}>
                      Sub Bidang
                    </TableCell>
                    <TableCell style={style} width={700}>
                      Keterangan Kaban
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
                      Keterangan Kaban
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
