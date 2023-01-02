import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
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
import Gap from "../Gap";

Axios.defaults.withCredentials = true;

export default function CLihatSemuaRenaksiFeedback() {
  const router = useRouter();
  const shouldLog = useRef(true);
  useEffect(() => {
    if (!router.isReady) return;
    if (shouldLog.current) {
      shouldLog.current = false;

      Axios.get("http://localhost:3001/KabanAmbilRenaksiMRD").then(
        (ambilRenaksi) => {
          ambilRenaksi.data.map((renaksi) => {
            if (
              renaksi.sub_bidang === router.query.subid &&
              renaksi.ditolak == "Kaban"
            ) {
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
  };
  const [semuaRenaksi, setSemuaRenaksi] = useState([]);

  const columns = [
    { id: "jabatan", label: "Jabatan" },
    {
      id: "asn",
      label: "ASN",
    },
    {
      id: "program",
      label: "Program",
    },
    {
      id: "kegiatan",
      label: "Kegiatan",
      // maxWidth: 10
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
      id: "rencana",
      label: "Rencana",
    },
    {
      id: "tanggapan",
      label: "Tanggapan",
      minWidth: 100,
    },
  ];

  const styleData = {
    border: 1,
    borderColor: "#1BDDBB",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 18,
    width: 60,
    overflow: "hidden",
  };

  const styleHeaders = {
    background: "rgba(27, 221, 187, 1)",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 22,
    color: "#fff",
    maxWidth: 50,
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
      width: 0,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
    },
  };

  return (
    <div className={styles.container}>
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

      <Gap height={100} width={0} />
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
                  sx={styleHeaders}
                  key={column.id}
                  align="center"
                  style={{ maxWidth: column.maxWidth }}
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
                    <TableCell align="center" sx={styleData}>
                      {row.jabatan}
                    </TableCell>
                    <TableCell align="center" sx={styleData}>
                      {row.nama}
                    </TableCell>
                    <TableCell align="center" sx={styleData}>
                      {row.program}
                    </TableCell>
                    <TableCell align="center" sx={styleData}>
                      {row.kegiatan}
                    </TableCell>
                    <TableCell align="center" sx={styleData}>
                      {row.sub_kegiatan}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={styleData}
                    >
                      {row.tupoksi_inti}
                    </TableCell>
                    <TableCell align="center" sx={styleData}>
                      {`${moment(row.start_date).format("MMM")} -
                        ${moment(row.end_date).format("MMM")}`}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={styleData}
                      style={{ width: 150 }}
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
