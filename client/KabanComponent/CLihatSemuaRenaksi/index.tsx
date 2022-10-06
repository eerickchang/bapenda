import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import styles from "./lihatSemuaRenaksi.module.css";

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
import next from "next";

Axios.defaults.withCredentials = true;

export default function CLihatSemuaRenaksi() {
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      // let semuaRenaksi = [];

      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        setSubid(masuk.data.user[0].sub_bidang);
        Axios.get("http://localhost:3001/ambilRenaksi").then((ambilRenaksi) => {
          // for (var key in ambilRenaksi.data) {
          //   semuaRenaksi.push(ambilRenaksi.data[key]);
          // }
          // console.log(ambilRenaksi.data);
          ambilRenaksi.data.map((renaksi) => {
            if (
              renaksi.sub_bidang === masuk.data.user[0].sub_bidang &&
              moment(renaksi.end_date).format("YYYY") ===
                moment().format("YYYY")
            ) {
              setSemuaRenaksi((nextData) => {
                return [renaksi, ...nextData];
              });
            }
          });
        });
      });

      setTahunClick(moment().format("YYYY"));

      // console.log(semuaRenaksi);
    }
  }, []);

  const router = useRouter();

  const clickBack = () => {
    router.push("/Kaban/TinjauRenaksi");
    // console.log(dataCakin);
  };

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);
  const [activeDropdownUnduh, setActiveDropdownUnduh] = useState(false);

  const [dataCakin, setDataCakin] = useState([]);
  const [tahunClick, setTahunClick] = useState("");
  const [nama, setNama] = useState("");
  const [semuaRenaksi, setSemuaRenaksi] = useState([]);
  const [subid, setSubid] = useState();

  const tahun = [
    {
      id: 6,
      tahun: "2020",
      onclick: () => (
        setTahunClick("2020"),
        setSemuaRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((masuk) => {
          Axios.get("http://localhost:3001/ambilRenaksi").then(
            (ambilRenaksi) => {
              ambilRenaksi.data.map((renaksi) => {
                if (
                  renaksi.sub_bidang === masuk.data.user[0].sub_bidang &&
                  moment(renaksi.end_date).format("YYYY") ===
                    moment("2020").format("YYYY")
                ) {
                  setSemuaRenaksi((nextData) => {
                    return [renaksi, ...nextData];
                  });
                }
              });
            }
          );
        })
      ),
    },
    {
      id: 7,
      tahun: "2021",
      onclick: () => (
        setTahunClick("2021"),
        setSemuaRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((masuk) => {
          Axios.get("http://localhost:3001/ambilRenaksi").then(
            (ambilRenaksi) => {
              ambilRenaksi.data.map((renaksi) => {
                if (
                  renaksi.sub_bidang === masuk.data.user[0].sub_bidang &&
                  moment(renaksi.end_date).format("YYYY") ===
                    moment("2021").format("YYYY")
                ) {
                  setSemuaRenaksi((nextData) => {
                    return [renaksi, ...nextData];
                  });
                }
              });
            }
          );
        })
      ),
    },
    {
      id: 8,
      tahun: "2022",
      onclick: () => (
        setTahunClick("2022"),
        setSemuaRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((masuk) => {
          Axios.get("http://localhost:3001/ambilRenaksi").then(
            (ambilRenaksi) => {
              ambilRenaksi.data.map((renaksi) => {
                if (
                  renaksi.sub_bidang === masuk.data.user[0].sub_bidang &&
                  moment(renaksi.end_date).format("YYYY") ===
                    moment("2022").format("YYYY")
                ) {
                  setSemuaRenaksi((nextData) => {
                    return [renaksi, ...nextData];
                  });
                }
              });
            }
          );
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

  const btnDwExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(semuaRenaksi);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Data Renaksi");

    //BUFFER
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });

    //BINARY STRING
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

    //DOWNLOAD
    XLSX.writeFile(workBook, `Data Renaksi ${subid}.xlsx`);
  };

  const btnDwPDF = () => {
    const unit = "pt";
    const size = "A3";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = `Data Renaksi ${subid}`;
    const headers = [
      [
        "No",
        "Jabatan",
        "ASN",
        "THL",
        "Program",
        "Kegiatan",
        "Sub Kegiatan",
        "Tupoksi Inti",
        "Tupoksi Tambahan",
        "Rencana",
      ],
    ];

    const data = semuaRenaksi.map((item) => [
      item.id_renaksi,
      item.jabatan,
      item.nama,
      item.nama_thl,
      item.program,
      item.kegiatan,
      item.sub_kegiatan,
      item.tupoksi_inti,
      item.tupoksi_tambahan,
      `${moment(item.start_date).format("MMM")} - ${moment(
        item.end_date
      ).format("MMM")}`,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
      theme: "grid",
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`Data Renaksi ${subid}`);
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
    { id: "no", label: "No", align: "center" },
    { id: "jabatan", label: "Jabatan", align: "center" },
    {
      id: "asn",
      label: "ASN",
      minWidth: 50,
      align: "center",
      // format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "thl",
      label: "THL",
      align: "center",
      // format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "program",
      label: "Program",
      align: "center",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "kegiatan",
      label: "Kegiatan",
      minWidth: 50,
      align: "center",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "subkegiatan",
      label: "Sub Kegiatan",
      align: "center",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "tupoksiinti",
      label: "Tupoksi Inti",
      align: "center",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "tupoksitambahan",
      label: "Tupoksi Tambahan",
      align: "center",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "rencana",
      label: "Rencana",
      align: "center",
      // format: (value) => value.toFixed(2),
    },
  ];

  const rows = [
    {
      no: "1",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
    },
    {
      no: "2",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
    },
    {
      no: "3",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
    },
    {
      no: "4",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
    },
    {
      no: "5",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
    },
    {
      no: "6",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
    },
    {
      no: "7",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
    },
    {
      no: "8",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
    },
    {
      no: "9",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
    },
    {
      no: "10",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
    },
    {
      no: "11",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
    },
    {
      no: "12",
      jabatan: "Kabid",
      asn: "januari",
      thl: 10,
      program: 3,
      kegiatan: 7,
      subkegiatan: 30,
      tupoksiinti: 3,
      tupoksitambahan: 7,
      rencana: 30,
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
            <Image src={"/HapusRenaksiTitle.svg"} width={50} height={40} />
          </div>
          <p style={{ marginLeft: 5, marginBottom: 10 }}>RENAKSI subidang . . . . .</p>
        </div>
        <div className={styles.wrapperFilter}>
          <div className={styles.wrapperFilterTahun}>
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
                {tahun.map((item) => (
                  <p key={item.id} onClick={item.onclick}>
                    {item.tahun}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className={styles.wrapperUnduh}>
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

      <Gap height={100} />
      {/* <Paper sx={{ width: "100%", overflow: "hidden" }}> */}
      <TableContainer
        sx={{
          maxHeight: 810,
          width: 1680,
          marginTop: 4,
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
        }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ tableLayout: "auto" }}
        >
          <TableHead sx={{ borderTopRightRadius: 20 }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{
                    background: "rgba(27, 221, 187, 1)",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: 22,
                    color: "#fff",
                  }}
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
            {semuaRenaksi
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                        width: 60,
                      }}
                    >
                      {moment(row.end_date).format("YYYY")}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                        width: 60,
                        // maxWidth: 160,
                      }}
                    >
                      <p style={{ width: 50 }}>{row.jabatan}</p>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                        width: 160,
                      }}
                    >
                      {row.nama}
                      {/* {moment(row.asn).format("MMM")} */}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                        width: 160,
                      }}
                    >
                      {row.nama_thl}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                        width: 160,
                      }}
                    >
                      {row.program}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                        width: 160,
                      }}
                    >
                      {row.kegiatan}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                        width: 160,
                      }}
                    >
                      {row.sub_kegiatan}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                        width: 160,
                      }}
                    >
                      {row.tupoksi_inti}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                        width: 160,
                      }}
                    >
                      {row.tupoksi_tambahan}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                        width: 160,
                      }}
                    >
                      {`${moment(row.start_date).format("MMM")} -
                        ${moment(row.end_date).format("MMM")}`}
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
