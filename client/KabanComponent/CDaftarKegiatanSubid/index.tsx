import stylesS from "./ContentDaftarKegiatan.module.css";

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

import Checkbox from "@mui/material/Checkbox";

Axios.defaults.withCredentials = true;

function Row(props) {
  const { row, stateChange, subid } = props;
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

  const filter = [
    {
      id: 1,
      status: "Semua",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksi").then((ambilRenaksi) => {
          ambilRenaksi.data.map((renaksi) => {
            if (renaksi.sub_bidang === subid) {
              stateChange((nextData) => {
                return [renaksi, ...nextData];
              });
            }
          });
        })
      ),
    },
    {
      id: 2,
      status: "Jadwal diubah",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksiJadwalDiubah").then(
          (ambilRenaksi) => {
            ambilRenaksi.data.map((renaksi) => {
              if (renaksi.sub_bidang === subid) {
                stateChange((nextData) => {
                  return [renaksi, ...nextData];
                });
              }
            });
          }
        )
      ),
    },

    {
      id: 3,
      status: "Sementara",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksiSementara").then(
          (ambilRenaksi) => {
            ambilRenaksi.data.map((renaksi) => {
              if (renaksi.sub_bidang === subid) {
                stateChange((nextData) => {
                  return [renaksi, ...nextData];
                });
              }
            });
          }
        )
      ),
    },

    {
      id: 5,
      status: "Selesai",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksiSelesai").then(
          (ambilRenaksi) => {
            ambilRenaksi.data.map((renaksi) => {
              if (renaksi.sub_bidang === subid) {
                stateChange((nextData) => {
                  return [renaksi, ...nextData];
                });
              }
            });
          }
        )
      ),
    },

    {
      id: 6,
      status: "Hapus",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksiDihapus").then(
          (ambilRenaksi) => {
            ambilRenaksi.data.map((renaksi) => {
              if (renaksi.sub_bidang === subid) {
                stateChange((nextData) => {
                  return [renaksi, ...nextData];
                });
              }
            });
          }
        )
      ),
    },

    {
      id: 7,
      status: "Ditambah",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksiMenunggu").then(
          (ambilRenaksi) => {
            ambilRenaksi.data.map((renaksi) => {
              if (renaksi.sub_bidang === subid) {
                stateChange((nextData) => {
                  return [renaksi, ...nextData];
                });
              }
            });
          }
        )
      ),
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(false);

  const btnFilter = () => {
    setActiveDropdown(!activeDropdown);
    // console.log(dataRenaksi);
  };

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);

  return (
    <>
      <div className={stylesS.wrapperFilter}>
        <div className={stylesS.btnFilter} onClick={btnFilter}>
          <Image src={"/Filter.svg"} width={23} height={23} />
          <p>Filter</p>
        </div>
        {activeDropdown && (
          <div
            className={stylesS.wrapperSelectStatus}
            onClick={() => setActiveDropdown(false)}
          >
            {filter.map((item) => (
              <p key={item.id} onClick={item.onclick}>
                {item.status}
              </p>
            ))}
          </div>
        )}
      </div>
      <React.Fragment>
        <TableRow hover className={styles.styleRow}>
          <div style={{ display: "flex", padding: 30, alignItems: "center" }}>
            {row.foto === "" ? (
              <Image
                src={"/SidebarProfile.svg"}
                width={70}
                height={70}
                alt="User 2"
                style={{ borderRadius: 150 }}
              />
            ) : (
              <Image
                src={row.foto}
                width={70}
                height={70}
                alt="User 2"
                style={{ borderRadius: 150 }}
              />
            )}
            {/* //!{ambil data} */}
            <div style={{ marginLeft: 20 }}>
              <p className={stylesS.rekanNama}>{row.nama}</p>
              <p className={stylesS.rekanPegawai}>{row.jabatan}</p>
              <p className={stylesS.rekanAsn}>ASN</p>
            </div>
          </div>
          <TableCell>
            <p className={stylesS.styleTxtRow}>{row.program}</p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>{row.kegiatan}</p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>{row.sub_kegiatan}</p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTupoksi}>Inti</p>
            <p className={stylesS.styleTxtRow}>{row.tupoksi_inti}</p>
            <p className={stylesS.styleTupoksiTambahan}>Tambahan</p>
            <p className={stylesS.styleTxtRow}>{row.tupoksi_tambahan}</p>
          </TableCell>
          <TableCell>
            {/* ambil data rencana */}
            <p className={stylesS.styleTxtRowRencana}>
              {moment(row.start_date).format("MMM")} -{" "}
              {moment(row.end_date).format("MMM")}
            </p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>{row.status}</p>
          </TableCell>
        </TableRow>
      </React.Fragment>
    </>
  );
}

export default function CDaftarKegiatanSubid() {
  const router = useRouter();
  const [domLoaded, setDomLoaded] = useState(false);
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [pegawai, setPegawai] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (!router.isReady) return;
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      Axios.get("http://localhost:3001/ambilRenaksi").then((ambilRenaksi) => {
        ambilRenaksi.data.map((renaksi) => {
          if (renaksi.sub_bidang === router.query.subid) {
            setPegawai((nextData) => {
              return [renaksi, ...nextData];
            });
          }
        });
      });
    }
  }, [router.query, router.isReady]);

  const clickBack = () => {
    router.push("/Kaban/DaftarKegiatan");
    // console.log(dataCakin);
  };

  const styleHeader = {
    fontFamily: "Poppins",
    fontSize: 21,
    fontWeight: 600,
    color: "rgba(149, 149, 149, 1)",
  };

  const styleContainer = {
    paddingLeft: 50,
    paddingRight: 40,
    zIndex: 99,
    paddingBottom: 30,
  };
  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitle}>
              <Image
                style={{ cursor: "pointer" }}
                onClick={clickBack}
                src={"/Back.svg"}
                width={50}
                height={50}
              />
              <div style={{ marginTop: 10 }}>
                <Image src={"/DaftarKegiatan2.svg"} width={40} height={40} />
              </div>
              <p style={{ marginLeft: 10 }}>DAFTAR KEGIATAN</p>
            </div>
            <Gap height={100} width={0} />
          </div>
          <Gap height={106} width={0} />
          <TableContainer style={styleContainer}>
            <Table sx={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={styleHeader}>Profile</TableCell>
                  <TableCell sx={styleHeader}>Program</TableCell>
                  <TableCell sx={styleHeader}>Kegiatan</TableCell>
                  <TableCell sx={styleHeader}>Sub Kegiatan</TableCell>
                  <TableCell sx={styleHeader}>Tupoksi</TableCell>
                  <TableCell sx={styleHeader}>Rencana</TableCell>
                  <TableCell sx={styleHeader}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pegawai.map((row) => (
                  <Row
                    key={row.nip}
                    row={row}
                    stateChange={setPegawai}
                    subid={router.query.subid}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}
