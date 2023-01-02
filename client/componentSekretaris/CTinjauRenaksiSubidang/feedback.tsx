import Image from "next/future/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styles from "./lihatSemuaRenaksi.module.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Axios from "axios";
import "jspdf-autotable";
import moment from "moment";

Axios.defaults.withCredentials = true;

export default function CTinjauRenaksiSubidangFeedback() {
  const router = useRouter();
  const shouldLog = useRef(true);
  useEffect(() => {
    if (!router.isReady) return;
    if (shouldLog.current) {
      shouldLog.current = false;
      console.log(router.query.sub_bidang);

      Axios.get("http://localhost:3001/kabidAmbilRenaksiMRD").then(
        (ambilRenaksi) => {
          ambilRenaksi.data.map((renaksi) => {
            if (
              renaksi.sub_bidang === router.query.sub_bidang &&
              moment(renaksi.end_date).format("YYYY") ===
                moment().format("YYYY") &&
              renaksi.ditolak === "Sekretaris"
            ) {
              setSemuaRenaksi((nextData) => {
                return [renaksi, ...nextData];
              });
            }
          });
        }
      );

      setTahunClick(moment().format("YYYY"));

      // console.log(semuaRenaksi);
    }
  }, [router.query, router.isReady]);

  const clickBack = () => {
    router.push("/Sekretaris/TinjauRenaksi");
    // console.log(dataCakin);
  };

  const [tahunClick, setTahunClick] = useState("");
  const [semuaRenaksi, setSemuaRenaksi] = useState([]);

  const columns = [
    { id: "jabatan", label: "Jabatan", align: "center" },
    {
      id: "asn",
      label: "ASN",
      minWidth: 50,
      align: "center",
    },
    {
      id: "program",
      label: "Program",
      align: "center",
    },
    {
      id: "kegiatan",
      label: "Kegiatan",
      minWidth: 50,
      align: "center",
    },
    {
      id: "subkegiatan",
      label: "Sub Kegiatan",
      align: "center",
    },
    {
      id: "tupoksitambahan",
      label: "Tupoksi Tambahan",
      align: "center",
    },
    {
      id: "rencana",
      label: "Rencana",
      align: "center",
    },
    {
      id: "tanggapan",
      label: "Tanggapan",
      align: "center",
      minWidth: 100,
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

  const styleHeader = {
    background: "rgba(27, 221, 187, 1)",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 22,
    color: "#fff",
  };

  const styleContainer = {
    maxHeight: 810,
    width: 1680,
    marginTop: 16,
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
  const styleRow = {
    border: 1,
    borderColor: "#1BDDBB",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 18,
    width: 60,
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
              width={50}
              height={50}
            />
          </div>
          <div>
            <Image src={"/TinjauRenaksiTitle.svg"} width={50} height={40} />
          </div>
          <p style={{ marginLeft: 5, marginBottom: 10 }}>TINJAU RENAKSI</p>
        </div>
      </div>

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
                  style={styleHeader}
                  key={column.id}
                  align="center"
                  // style={{ minWidth: column.minWidth }}
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
                    <TableCell align="center" sx={styleRow}>
                      <p style={{ width: 50 }}>{row.jabatan}</p>
                    </TableCell>
                    <TableCell align="center" sx={styleRow}>
                      {row.nama}
                    </TableCell>
                    <TableCell align="center" sx={styleRow}>
                      {row.program}
                    </TableCell>
                    <TableCell align="center" sx={styleRow}>
                      {row.kegiatan}
                    </TableCell>
                    <TableCell align="center" sx={styleRow}>
                      {row.sub_kegiatan}
                    </TableCell>
                    <TableCell align="center" sx={styleRow}>
                      {row.tupoksi_inti}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={styleRow}
                      // style={{ width: 150 }}
                    >
                      {`${moment(row.start_date).format("MMM")} -
                        ${moment(row.end_date).format("MMM")}`}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={styleRow}
                      style={{ width: 250 }}
                    >
                      {row.ket_pegawai}
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
