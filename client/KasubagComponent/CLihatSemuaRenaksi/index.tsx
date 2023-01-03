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
        Axios.get("http://localhost:3001/kasubidAmbilRenaksiMRD").then(
          (ambilRenaksi) => {
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
          }
        );
      });

      setTahunClick(moment().format("YYYY"));

      // console.log(semuaRenaksi);
    }
  }, []);

  const router = useRouter();

  const clickBack = () => {
    router.push("/Kasubag/TinjauRenaksi");
  };

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);
  const [activeDropdownUnduh, setActiveDropdownUnduh] = useState(false);

  const [dataCakin, setDataCakin] = useState([]);
  const [tahunClick, setTahunClick] = useState("");
  const [nama, setNama] = useState("");
  const [semuaRenaksi, setSemuaRenaksi] = useState([]);
  const [subid, setSubid] = useState();

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

  const columns = [
    { id: "no", label: "No" },
    { id: "jabatan", label: "Jabatan" },
    {
      id: "asn",
      label: "ASN",
      minWidth: 50,
    },
    {
      id: "thl",
      label: "THL",
    },
    {
      id: "program",
      label: "Program",
    },
    {
      id: "kegiatan",
      label: "Kegiatan",
    },
    {
      id: "subkegiatan",
      label: "Sub Kegiatan",
    },
    {
      id: "tupoksiinti",
      label: "Tupoksi Inti",
    },
    {
      id: "tupoksitambahan",
      label: "Tupoksi Tambahan",
    },
    {
      id: "rencana",
      label: "Rencana",
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
  };

  const style = {
    border: 1,
    borderColor: "#1BDDBB",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 18,
    width: 60,
  };

  const styleHeader = {
    background: "rgba(27, 221, 187, 1)",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
  };

  return (
    <div className={styles.container}>
      {/* <div> */}
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
          <Image src={"/TinjauRenaksiTitle.svg"} width={50} height={40} />
        </div>
        <p style={{ marginLeft: 5, marginBottom: 10 }}>TINJAU RENAKSI</p>
      </div>

      {/* </div> */}
      <Gap height={100} width={0} />

      {/* <Paper sx={{ width: "100%", overflow: "hidden" }}> */}
      <TableContainer sx={styleContainer}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ tableLayout: "auto" }}
        >
          <TableHead sx={{ borderTopRightRadius: 20 }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={styleHeader}
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* AMBIL DATA ROW */}
            {semuaRenaksi.map((row) => {
              return (
                <TableRow hover>
                  <TableCell align="center" sx={style}>
                    {moment(row.end_date).format("YYYY")}
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    <p style={{ width: 50 }}>{row.jabatan}</p>
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    {row.nama}
                    {/* {moment(row.asn).format("MMM")} */}
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    {row.nama_thl}
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    {row.program}
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    {row.kegiatan}
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    {row.sub_kegiatan}
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    {row.tupoksi_inti}
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    {row.tupoksi_tambahan}
                  </TableCell>
                  <TableCell align="center" sx={style}>
                    {`${moment(row.start_date).format("MMM")} -
                        ${moment(row.end_date).format("MMM")}`}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
