import React from "react";
import styles from "./cUbahJadwalRenaksi.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "../Button";
import Image from "next/image";
import Gap from "../../KabidComponent/Gap";

export default function CUbahJadwalRenaksi() {
  const rowsSubagian = [
    {
      id: 1,
      nama: "Jerry Sumendap",
      keterangan: "tolong akang",
      dari: "Januari",
      sampai: "Desember",
    },
    {
      id: 2,
      nama: "Jerry Sumendap",
      keterangan: "tolong akang",
      dari: "Januari",
      sampai: "Desember",
    },
    {
      id: 3,
      nama: "Jerry Sumendap",
      keterangan: "tolong akang",
      dari: "Januari",
      sampai: "Desember",
    },
    {
      id: 4,
      nama: "Jerry Sumendap",
      keterangan: "tolong akang",
      dari: "Januari",
      sampai: "Desember",
    },
    {
      id: 5,
      nama: "Jerry Sumendap",
      keterangan: "tolong akang",
      dari: "Januari",
      sampai: "Desember",
    },
    {
      id: 6,
      nama: "Jerry Sumendap",
      keterangan: "tolong akang",
      dari: "Januari",
      sampai: "Desember",
    },
    {
      id: 7,
      nama: "Jerry Sumendap",
      keterangan: "tolong akang",
      dari: "Januari",
      sampai: "Desember",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleDaftarKegiatan}>
        <Image src={"/RiwayatIcon.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>Ubah Jadwal Renaksi</p>
      </div>
      {/* <div className={styles.wrapTable}> */}
      <TableContainer
        style={{
          paddingLeft: 40,
          paddingRight: 40,
          zIndex: 998,
          paddingBottom: 40,
        }}
      >
        <Table sx={{ tableLayout: "fixed" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={styles.styleHeader}>Pegawai</TableCell>
              <TableCell className={styles.styleHeader}>Tupoksi</TableCell>
              <TableCell className={styles.styleHeader}>Rencana</TableCell>
              <TableCell className={styles.styleHeader}>Lampiran</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsSubagian.map((row) => (
              <TableRow hover className={styles.styleRow} key={row.id}>
                <TableCell className={styles.styleData}>
                  <p style={{ fontWeight: 600 }}>{row.nama}</p>
                </TableCell>
                <TableCell className={styles.styleData}>
                  {row.keterangan}
                </TableCell>
                <TableCell className={styles.styleData}>
                  {row.dari} - {row.sampai}
                </TableCell>
                <TableCell className={styles.styleData}>
                  {/* {row.keterangan} */}
                  <div className={styles.wrapFileLampiran}>
                    <div style={{ display: "flex" }}>
                      <div style={{ marginRight: 10 }}>
                        <Image src={"/IconPDF.svg"} width={25} height={28} />
                      </div>
                      1 files
                    </div>
                    <Gap width={0} height={10} />
                    <div style={{ display: "flex" }}>
                      <div style={{ marginRight: 10 }}>
                        <Image src={"/IconPDF.svg"} width={25} height={28} />
                      </div>
                      2 files
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* </div> */}
    </div>
  );
}
