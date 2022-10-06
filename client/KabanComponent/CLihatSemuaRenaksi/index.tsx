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
  const router = useRouter();
  const shouldLog = useRef(true);
  useEffect(() => {
    if (!router.isReady) return;
    if (shouldLog.current) {
      shouldLog.current = false;

      Axios.get("http://localhost:3001/KabanAmbilRenaksiMRD").then(
        (ambilRenaksi) => {
          ambilRenaksi.data.map((renaksi) => {
            if (renaksi.sub_bidang === router.query.subid) {
              setSemuaRenaksi((nextData) => {
                return [renaksi, ...nextData];
              });
            }
          });
        }
      );
    }
  }, [router.query, router.isReady]);

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
          <p style={{ marginLeft: 5, marginBottom: 10 }}>
            Renaksi Sub Bidang {router.query.subid}
          </p>
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
