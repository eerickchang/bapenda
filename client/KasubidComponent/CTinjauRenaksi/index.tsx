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

  const [file, setFile] = useState(null);
  const [ketPegawai, setKetPegawai] = useState("");
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  const btnUnggahExp = () => {
    const data = new FormData();
    data.append("file", file);

    Axios.post("http://localhost:3001/uploadFile", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          Axios.post("http://localhost:3001/unggahLaporan", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
            fileURL: response.data.file,
          }).then((unggahLaporan) => {
            console.log(unggahLaporan);
          });
        } else {
          Axios.post("http://localhost:3001/unggahLaporan", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
          }).then((unggahLaporan) => {
            console.log(unggahLaporan);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    closeModal();
    btnUnggah();
  };

  const btnUbahJadwalExp = () => {
    const data = new FormData();
    data.append("file", file);

    Axios.post("http://localhost:3001/uploadFile", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          Axios.post("http://localhost:3001/ubahJadwal", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
            fileURL: response.data.file,
            startDate: startDate,
            endDate: endDate,
          }).then((ubahJadwal) => {
            console.log(ubahJadwal);
          });
        } else {
          Axios.post("http://localhost:3001/ubahJadwal", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
            startDate: startDate,
            endDate: endDate,
          }).then((ubahJadwal) => {
            console.log(ubahJadwal);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    closeModalUbah();
    btnUbah();
  };

  const btnHapusExp = () => {
    const data = new FormData();
    data.append("file", file);

    Axios.post("http://localhost:3001/uploadFile", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          Axios.post("http://localhost:3001/hapusRenaksi", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
            fileURL: response.data.file,
          }).then((hapusRenaksi) => {
            console.log(hapusRenaksi);
          });
        } else {
          Axios.post("http://localhost:3001/hapusRenaksi", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
          }).then((hapusRenaksi) => {
            console.log(hapusRenaksi);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    closeModalHapus();
    btnHapus();
  };

  return (
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
        {/* //! DATA ROW */}
        <TableCell>
          <p className={stylesS.styleTxtRow}>{row.program}</p>
        </TableCell>
        <TableCell>
          <p className={stylesS.styleTxtRow}>{row.kegiatan}</p>
        </TableCell>
        <TableCell>
          <p className={stylesS.styleTxtRow}>
            <div style={{ flexDirection: "row", display: "flex" }}>
              <button className={styles.btnTerima}>
                <Image src={"/Terima.svg"} width={20} height={20} /> Terima
              </button>
              <Gap width={40} height={0} />
              <button className={styles.btnTolak}>
                <Image src={"/Tolak.svg"} width={20} height={20} /> Tolak
              </button>
            </div>
          </p>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ContentDaftarKegiatan() {
  const dataPegawai = [
    {
      id: 1,
      image: <Image src="/SidebarProfile.svg" width={90} height={90} />,
      nama: "June E. Silangen,  SE, Ak, ME",
      jabatan: "Kepala Bidang  Pajak Daerah",
      pegawai: "ASN",
    },
  ];

  const filter = [
    {
      id: 1,
      status: "Semua",
      onclick: () => (
        setDataRenaksi([]),
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
        })
      ),
    },
    {
      id: 2,
      status: "Jadwal diubah",
      onclick: () => (
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/ambilRenaksiJadwalDiubah").then(
          (result) => {
            result.data.map((item) => {
              if (
                moment(item.end_date).format("YYYY") === moment().format("YYYY")
              ) {
                setDataRenaksi((nextData) => {
                  return [...nextData, item];
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
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/ambilRenaksiSementara").then(
          (result) => {
            result.data.map((item) => {
              if (
                moment(item.end_date).format("YYYY") === moment().format("YYYY")
              ) {
                setDataRenaksi((nextData) => {
                  return [...nextData, item];
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
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/ambilRenaksiSelesai").then(
          (result) => {
            result.data.map((item) => {
              if (
                moment(item.end_date).format("YYYY") === moment().format("YYYY")
              ) {
                setDataRenaksi((nextData) => {
                  return [...nextData, item];
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
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/ambilRenaksiDihapus").then(
          (result) => {
            result.data.map((item) => {
              if (
                moment(item.end_date).format("YYYY") === moment().format("YYYY")
              ) {
                setDataRenaksi((nextData) => {
                  return [...nextData, item];
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
      onclick: () => console.log(dataRenaksi),
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [asn, setAsn] = useState("");
  const [image, setImage] = useState(null);
  const [dataRenaksi, setDataRenaksi] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);
      Axios.get("http://localhost:3001/masuk").then((response) => {
        setAsn(response.data.user[0]);
        setImage(response.data.user[0].foto);

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
      });
    }
  }, []);

  const router = useRouter();



  const lihatSemua = () => {
    // setActiveDropdown(!activeDropdown);
    // console.log(dataRenaksi);
    router.push("/Kasubid/TinjauRenaksiLihatRenaksi");
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitleDaftarKegiatan}>
              <Image src={"/TinjauRenaksiTitle.svg"} width={50} height={50} />
              <p className={stylesS.txtTitle}>Tinjau Renaksi</p>
            </div>
            {/* {dataPegawai.map((item) => (
              <div className={stylesS.wrapperDataPegawai} key={item.id}>
                <div>
                  {!image ? (
                    <Image src="/SidebarProfile.svg" width={90} height={90} />
                  ) : (
                    <Image
                      src={image}
                      width={90}
                      height={90}
                      style={{ borderRadius: 90 }}
                    />
                  )}
                </div>
                <div className={stylesS.wrapperTxt}>
                  <p className={stylesS.txtNama}>{asn.nama}</p>
                  <p className={stylesS.txtJabatan}>
                    {`${asn.jabatan}
                    ${asn.sub_bidang}`}
                  </p>
                  <p className={stylesS.txtPegawai}>{item.pegawai}</p>
                </div>
              </div>
            ))} */}
            {/* <div className={stylesS.wrapperFilter}> */}
            <div className={stylesS.wrapFilter}>
              <button className={styles.btnTerimaAll}>
                <Image src={"/Terima.svg"} width={20} height={20} /> Terima
              </button>
              <Gap width={15} height={0} />
              <button className={styles.btnTolakAll}>
                <Image src={"/Tolak.svg"} width={20} height={20} /> Tolak
              </button>
              <button className={stylesS.btnFilter} onClick={lihatSemua}>
                <Image src={"/LihatSemuaFilter.svg"} width={23} height={23} />
                <p>Lihat Semua</p>
              </button>
            </div>
            {/* </div> */}
          </div>
          <Gap height={106} width={0} />
          <TableContainer
            style={{ paddingLeft: 50, paddingRight: 40, zIndex: 998 }}
          >
            <Table sx={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell className={styles.headerTable} width={0}>
                    Pegawai
                  </TableCell>
                  <TableCell className={styles.headerTable} width={0}>
                    Sub Bidang
                  </TableCell>
                  <TableCell className={styles.headerTable} width={0}>
                    Aksi
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
      )}
    </>
  );
}
