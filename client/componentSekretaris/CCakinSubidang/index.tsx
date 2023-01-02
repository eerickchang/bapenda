// import Image from "next/future/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ContentDetailCakin.module.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";
import Image from "next/future/image";
import * as XLSX from "xlsx";
import Gap from "../Gap";

import Modal from "react-modal";

Axios.defaults.withCredentials = true;

export default function CCaKinSubidang() {
  const router = useRouter();
  const shouldLog = useRef(true);

  const [dataCakin, setDataCakin] = useState([]);
  const [nama, setNama] = useState("");
  const [image, setImage] = useState("");
  const [pegawai, setPegawai] = useState([]);
  const [titleUs, setTitleUs] = useState("");
  const [selected, setSelected] = useState("");
  const [year, setYear] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    if (shouldLog.current) {
      shouldLog.current = false;

      setTitleUs(router.query.nama);
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        setImage(masuk.data.user[0].foto);

        Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
          ambilCakin.data.map((cakin) => {
            if (
              moment(cakin.bulan).format("YYYY") === moment().format("YYYY") &&
              cakin.nip == router.query.nipKasub
            ) {
              setDataCakin((nextData) => {
                return [...nextData, cakin];
              });
            }
          });
        });

        setPegawai((nextData) => {
          return [
            ...nextData,
            { nama: "Semua Pegawai", nip: router.query.nipKasub },
          ];
        });

        Axios.get("http://localhost:3001/pegawai").then((ambilPegawai) => {
          ambilPegawai.data.map((pegawai) => {
            if (
              pegawai.sub_bidang == router.query.subid &&
              pegawai.jabatan == "Staff"
            ) {
              if (pegawai.foto != "") {
                setPegawai((nextData) => {
                  return [
                    ...nextData,
                    {
                      nama: pegawai.nama,
                      nip: pegawai.nip,
                      foto: (
                        <Image
                          src={`${pegawai.foto}`}
                          width={50}
                          height={50}
                          style={{ borderRadius: 50 }}
                        />
                      ),
                    },
                  ];
                });
              } else {
                setPegawai((nextData) => {
                  return [
                    ...nextData,
                    {
                      nama: pegawai.nama,
                      nip: pegawai.nip,
                      foto: <Image src={"/User1.svg"} width={50} height={50} style={{borderRadius: 50}}/>,
                    },
                  ];
                });
              }
            }
          });
        });
      });
    }
  }, [router.query, router.isReady]);

  const clickBack = () => {
    router.push({
      pathname: "/Sekretaris/Profil",
    });
  };

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);
  const [activeDropdownUnduh, setActiveDropdownUnduh] = useState(false);
  const [activeDropdownPegawai, setActiveDropdownPegawai] = useState(false);

  const menuRefTahun = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRefTahun.current.contains(e.target)) {
        setActiveDropdownTahun(false);
        console.log(menuRefTahun.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const menuRefUnduh = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRefUnduh.current.contains(e.target)) {
        setActiveDropdownUnduh(false);
        console.log(menuRefUnduh.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const menuRefPegawai = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRefPegawai.current.contains(e.target)) {
        setActiveDropdownPegawai(false);
        console.log(menuRefPegawai.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const custom = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 491,
      // height: 210,
      borderRadius: 20,
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

  const [modalIsOpen, setIsOpenModal] = useState(false);

  setTimeout(() => {}, 3000);
  function openModal() {
    setIsOpenModal(true);
    setTimeout(() => {
      setIsOpenModal(false);
    }, 4000);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpenModal(false);
  }



  const btnDwExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(dataCakin);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "dataCakin");

    //BUFFER
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });

    //BINARY STRING
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

    //DOWNLOAD
    XLSX.writeFile(workBook, `Data Cakin ${titleUs}.xlsx`);
  };

  const btnDwPDF = () => {
    const unit = "pt";
    const size = "A3";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = `Data Cakin ${titleUs}`;
    const headers = [
      [
        "Nama",
        "Jabatan",
        "Bulan",
        "Jumlah Kegiatan",
        "Realisasi Kegiatan",
        "Belum Dilaksanakan",
        "Hasil Kinerja",
      ],
    ];

    const data = dataCakin.map((item) => [
      item.nama,
      item.jabatan,
      moment(item.bulan).format("MMM"),
      item.jumlah_kegiatan,
      item.lampiran_disubmit,
      item.lampiran_bsubmit,
      item.hasil_kinerja,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
      theme: "grid",
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`Data Cakin ${titleUs}`);
  };

  const unduh = [
    {
      id: 1,
      unduh: "Excel",
      // image: <Image src={"/Pdf.svg"} width={38} height={35} />,
      onclick: btnDwExcel,
    },
    {
      id: 2,
      unduh: "PDF",
      // image: <Image src={"/Pdf.svg"} width={35} height={35} />,
      onclick: btnDwPDF,
    },
  ];

  const columns = [
    { id: "nama", label: "Nama", align: "center", minWidth: 100 },
    { id: "jabatan", label: "Jabatan", align: "center", minWidth: 50 },
    {
      id: "bulan",
      label: "Bulan",
      minWidth: 100,
      align: "center",
      // format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "jumlahkegiatan",
      label: "Jumlah Kegiatan",
      minWidth: 100,
      align: "center",
      // format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "realisasikegiatan",
      label: "Realisasi Kegiatan",
      minWidth: 100,
      align: "center",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "belumdilaksanakan",
      label: "Belum Dilaksanakan",
      minWidth: 100,
      align: "center",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "hasilkinerja",
      label: "Hasil Kinerja",
      minWidth: 100,
      align: "center",
      // format: (value) => value.toFixed(2),
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const tahun = () => {};

  const clickPegawai = (data) => {
    setDataCakin([]);
    setSelected(data);

    Axios.get("http://localhost:3001/pegawai").then((ambilPegawai) => {
      ambilPegawai.data.map((pegawai_us) => {
        if (pegawai_us.nip == data) {
          if (pegawai_us.jabatan == "Kasubid") {
            setImage(pegawai_us.foto);
            setTitleUs(pegawai_us.sub_bidang);
          } else if (pegawai_us.jabatan == "Kabid") {
            setImage(pegawai_us.foto);
            setTitleUs(pegawai_us.bidang);
          } else {
            setImage(pegawai_us.foto);
            setTitleUs(pegawai_us.nama);
          }
        }
      });
    });

    Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
      ambilCakin.data.map((cakin) => {
        if (
          moment(cakin.bulan).format("YYYY") === moment().format("YYYY") &&
          cakin.nip == data
        ) {
          setDataCakin((nextData) => {
            return [...nextData, cakin];
          });
        }
      });
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const styleContainer = {
    maxHeight: 810,
    width: 1660,
    marginTop: 3,
    height: 780,
    // marginBottom: 8,
    color: "rgba(27, 221, 187, 1)",
    border: 2,
    borderRadius: 6,
    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    overflowX: "scroll",
    "::-webkit-scrollbar": {
      width: 15,
      height: 0,
    },
    "::-webkit-scrollbar-thumb": {
      background: "rgba(21, 221, 187)",
      // height: 100
      width: 0,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
    },
  };

  const styleHeader = {
    background: "rgba(27, 221, 187, 1)",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 22,
    color: "#fff",
  };

  const styleRow = {
    border: 1,
    borderColor: "#1BDDBB",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 18,
  };

  const styleRowNama = {
    border: 1,
    borderColor: "#1BDDBB",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className={styles.container}>
      <div>
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
            <Image src={"/DetailCakin.svg"} width={50} height={40} />
          </div>
          <p style={{ marginLeft: 5, marginBottom: 10 }}>
            Detail Capaian Kinerja - {router.query.nama}
          </p>
        </div>

        <div className={styles.wrapperFilter}>
          <div className={styles.wrapperFilterPegawai} ref={menuRefPegawai}>
            <div
              className={styles.btnFilterPegawai}
              onClick={() => setActiveDropdownPegawai(!activeDropdownPegawai)}
            >
              <Image src={"/Pegawai.svg"} width={23} height={23} />
              <p>Pegawai</p>
            </div>
            {activeDropdownPegawai && (
              <div
                className={styles.wrapperSelectFilterPegawai}
                onClick={() => {
                  setActiveDropdownPegawai(false);
                }}
              >
                {pegawai.map((item) => (
                  <div
                    className={styles.wrapNama}
                    key={item.nip}
                    onClick={() => {
                      setYear([]);
                      clickPegawai(item.nip);
                      for (let i = 2020; i <= 2030; i++) {
                        setYear((nextData) => {
                          return [
                            ...nextData,
                            {
                              tahun: i,
                              onclick: () => (
                                setDataCakin([]),
                                Axios.get("http://localhost:3001/cakin").then(
                                  (ambilCakin) => {
                                    ambilCakin.data.map((cakin) => {
                                      if (
                                        moment(cakin.bulan).format("YYYY") ===
                                          moment(`${i}`).format("YYYY") &&
                                        cakin.nip == item.nip
                                      ) {
                                        setDataCakin((nextData) => {
                                          return [...nextData, cakin];
                                        });
                                      }
                                    });
                                  }
                                )
                              ),
                            },
                          ];
                        });
                      }
                    }}
                  >
                    <div className={styles.hoverNama}>
                      {item.foto}
                      <div style={{ marginLeft: 20 }}>{item.nama}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.wrapperFilterTahun} ref={menuRefTahun}>
            <div
              className={styles.btnFilterTahun}
              onClick={() => {
                year.length == 0
                  ? openModal()
                  : setActiveDropdownTahun(!activeDropdownTahun);
              }}
            >
              <Image src={"/TahunIcon.svg"} width={23} height={23} />
              <p>Tahun</p>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={custom}
              contentLabel="Example Modal"
              className={styles.modal}
            >
              <h2 className={styles.headerPesan}>Pesan</h2>
              <h2 className={styles.dialogPesan}>
                Silahkan pilih Pegawai terlebih dahulu
              </h2>
            </Modal>
            {activeDropdownTahun && (
              <div
                className={styles.wrapperSelectFilterTahun}
                onClick={() => {
                  setActiveDropdownTahun(false);
                }}
              >
                {year.map((item) => (
                  <p key={item.tahun} onClick={item.onclick}>
                    {item.tahun}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className={styles.wrapperUnduh} ref={menuRefUnduh}>
            <div
              className={styles.btnUnduh}
              onClick={() => setActiveDropdownUnduh(!activeDropdownUnduh)}
            >
              <Image src={"/UnduhIcon.svg"} width={23} height={23} />
              <p>Unduh</p>
            </div>
            {activeDropdownUnduh && (
              <div
                className={styles.wrapperSelectUnduh}
                onClick={() => setActiveDropdownUnduh(false)}
              >
                {unduh.map((item) => (
                  <div
                    style={{
                      display: "flex",
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: 22,
                    }}
                    key={item.id}
                    onClick={item.onclick}
                  >
                    <p>{item.unduh}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Gap height={100} width={0} />
      {/* <Paper sx={{ width: "100%", overflow: "hidden" }}> */}
      <TableContainer sx={styleContainer}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{
            tableLayout: "fixed",
          }}
        >
          <TableHead sx={{ borderTopRightRadius: 20 }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={styleHeader}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* AMBIL DATA ROW */}

            {dataCakin.map((row) => {
              return (
                <TableRow hover>
                  <TableCell align="center" sx={styleRowNama}>
                    {!image ? (
                      <Image
                        src={"/User1.svg"}
                        width={50}
                        height={50}
                        alt="User 2"
                        style={{ borderRadius: 150 }}
                      />
                    ) : (
                      <Image
                        src={image}
                        width={50}
                        height={50}
                        alt="User 2"
                        style={{ borderRadius: 150 }}
                      />
                    )}
                    <p style={{ margin: 0, marginLeft: 10 }}>{row.nama}</p>
                  </TableCell>
                  <TableCell align="center" sx={styleRow}>
                    {row.jabatan}
                  </TableCell>
                  <TableCell align="center" sx={styleRow}>
                    {moment(row.bulan).format("MMM")}
                  </TableCell>
                  <TableCell align="center" sx={styleRow}>
                    {row.jumlah_kegiatan}
                  </TableCell>
                  <TableCell align="center" sx={styleRow}>
                    {row.lampiran_diterima}
                  </TableCell>
                  <TableCell align="center" sx={styleRow}>
                    {row.lampiran_bsubmit}
                  </TableCell>
                  <TableCell align="center" sx={styleRow}>
                    {row.hasil_kinerja}
                  </TableCell>

                  {/* {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          sx={{
                            border: 1,
                            borderColor: "#1BDDBB",
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            fontSize: 18,
                          }}
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })} */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{background: '#fff', fontFamily: 'Poppins', fontWeight: 600, fontSize: 18}}
      /> */}
      {/* </Paper> */}
    </div>
  );
}
