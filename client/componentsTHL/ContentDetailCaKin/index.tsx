import Image from "next/future/image";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import styles from "./ContentDetailCakin.module.css";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Gap from "../Gap";
import Axios from "axios";
import moment from "moment";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

Axios.defaults.withCredentials = true;

export default function ContentDetailCaKin() {
  const shouldLog = useRef(true);
  const [year, setYear] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      Axios.get("http://localhost:3001/masuk").then((dataAsn) => {
        setNama(dataAsn.data.user[0].nama);
        setImage(dataAsn.data.user[0].foto);
        //
        Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
          ambilCakin.data.map((cakin) => {
            if (
              moment(cakin.bulan).format("YYYY") === moment().format("YYYY") &&
              cakin.nip == dataAsn.data.user[0].nip
            ) {
              setDataCakin((nextData) => {
                return [...nextData, cakin];
              });
            }
          });
        });

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
                          cakin.nip == dataAsn.data.user[0].nip
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
      });
    }
  }, []);

  const router = useRouter();

  const clickBack = () => {
    router.push("/THL/Profil");
    // console.log(dataCakin);
  };

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);
  const [activeDropdownUnduh, setActiveDropdownUnduh] = useState(false);

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

  const [dataCakin, setDataCakin] = useState([]);
  const [tahunClick, setTahunClick] = useState("");
  const [nama, setNama] = useState("");

  const tahun = [
    {
      id: 6,
      tahun: "2020",
      onclick: () => (
        setTahunClick("2020"),
        setDataCakin([]),
        Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
          ambilCakin.data.map((cakin) => {
            if (
              moment(cakin.bulan).format("YYYY") ===
              moment("2020").format("YYYY")
            ) {
              setDataCakin((nextData) => {
                return [...nextData, cakin];
              });
            }
          });
        })
      ),
    },
    {
      id: 7,
      tahun: "2021",
      onclick: () => (
        setTahunClick("2021"),
        setDataCakin([]),
        Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
          ambilCakin.data.map((cakin) => {
            if (
              moment(cakin.bulan).format("YYYY") ===
              moment("2021").format("YYYY")
            ) {
              setDataCakin((nextData) => {
                return [...nextData, cakin];
              });
            }
          });
        })
      ),
    },
    {
      id: 8,
      tahun: "2022",
      onclick: () => (
        setTahunClick("2022"),
        setDataCakin([]),
        Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
          ambilCakin.data.map((cakin) => {
            if (
              moment(cakin.bulan).format("YYYY") ===
              moment("2022").format("YYYY")
            ) {
              setDataCakin((nextData) => {
                return [...nextData, cakin];
              });
            }
          });
        })
      ),
    },
    {
      id: 9,
      tahun: "2023",
    },
    {
      id: 10,
      tahun: "2024",
    },
    {
      id: 11,
      tahun: "2025",
    },
  ];

  const rowsGeo = [
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-01-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 3,
      lampiran_bsubmit: 7,
      hasil_kinerja: 30,
    },
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-02-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 5,
      lampiran_bsubmit: 5,
      hasil_kinerja: 50,
    },
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-03-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 9,
      lampiran_bsubmit: 1,
      hasil_kinerja: 90,
    },
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-04-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 3,
      lampiran_bsubmit: 7,
      hasil_kinerja: 30,
    },
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-05-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 3,
      lampiran_bsubmit: 7,
      hasil_kinerja: 30,
    },
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-06-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 3,
      lampiran_bsubmit: 7,
      hasil_kinerja: 30,
    },
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-07-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 3,
      lampiran_bsubmit: 7,
      hasil_kinerja: 30,
    },
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-08-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 3,
      lampiran_bsubmit: 7,
      hasil_kinerja: 30,
    },
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-09-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 3,
      lampiran_bsubmit: 7,
      hasil_kinerja: 30,
    },
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-10-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 3,
      lampiran_bsubmit: 7,
      hasil_kinerja: 30,
    },
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-11-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 3,
      lampiran_bsubmit: 7,
      hasil_kinerja: 30,
    },
    {
      nama: "George Olaf",
      jabatan: "Staff",
      bulan: "2022-12-01",
      jumlah_kegiatan: 10,
      lampiran_disubmit: 3,
      lampiran_bsubmit: 7,
      hasil_kinerja: 30,
    },
  ];

  const btnDwExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(dataCakin);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "dataCakin");

    //BUFFER
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });

    //BINARY STRING
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

    //DOWNLOAD
    XLSX.writeFile(workBook, `Data Cakin ${nama}.xlsx`);
  };

  const btnDwPDF = () => {
    const unit = "pt";
    const size = "A3";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = `Data Cakin ${nama}`;
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
    doc.save(`Data Cakin ${nama}`);
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
    height: 780,
    marginTop: 3,
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
            Detail Capaian Kinerja - {nama}
          </p>
        </div>

        <div className={styles.wrapperFilter}>
          <div className={styles.wrapperFilterTahun} ref={menuRefTahun}>
            <div
              className={styles.btnFilterTahun}
              onClick={() => setActiveDropdownTahun(!activeDropdownTahun)}
            >
              <Image src={"/TahunIcon.svg"} width={23} height={23} />
              <p>Tahun</p>
            </div>
            {activeDropdownTahun && (
              <div
                className={styles.wrapperSelectFilterTahun}
                onClick={() => setActiveDropdownTahun(false)}
              >
                {year.map((item) => (
                  <p key={item.nip} onClick={item.onclick}>
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
            {dataCakin
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover>
                    <TableCell align="center" sx={styleRowNama}>
                      {!image ? (
                        <Image
                          src={"/User1.svg"}
                          width={50}
                          height={50}
                          alt="User 2"
                          style={{ borderRadius: 50 }}
                        />
                      ) : (
                        <Image
                          src={image}
                          width={50}
                          height={50}
                          alt="User 2"
                          style={{ borderRadius: 50 }}
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
                      {row.lampiran_disubmit}
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
