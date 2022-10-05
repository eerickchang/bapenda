import React from "react";
import styles from "./evaluasiLampiran.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "../Button";
import Image from "next/image";

export default function CTinjauRenaksi() {
  const rowsSubagian = [
    {
      id: 1,
      sub: "Hukum",
      keterangan: "tolong akang",
    },
    {
      id: 2,
      sub: "Hukum",
      keterangan: "tolong akang",
    },
    {
      id: 3,
      sub: "Hukum",
      keterangan: "tolong akang",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleDaftarKegiatan}>
        <Image src={"/EvaluasiLampiranTitle.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>Evaluasi Lampiran</p>
      </div>
      <div className={styles.wrapTable}>
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
              <TableRow className={styles.styleHeader}>
                <TableCell className={styles.styleHeader}>Sub Bagian</TableCell>
                <TableCell className={styles.styleHeader}>Program</TableCell>
                <TableCell className={styles.styleHeader}>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={styles.hover}>
              {rowsSubagian.map((row) => (
                <TableRow className={styles.styleRow} key={row.id}>
                  <TableCell className={styles.styleData}>
                    <p style={{ fontWeight: 600 }}>{row.sub}</p>
                  </TableCell>
                  <TableCell className={styles.styleData}>
                    {row.keterangan}
                  </TableCell>
                  <TableCell>
                    <div className={styles.styleLihatDetail}>
                      <Image src={"/LihatSemua.svg"} width={24} height={24} />{" "}
                      <p>Lihat Detail</p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

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
                <TableCell className={styles.styleHeader}>Sub Bagian</TableCell>
                <TableCell className={styles.styleHeader}>Program</TableCell>
                <TableCell className={styles.styleHeader}>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsSubagian.map((row) => (
                <TableRow hover className={styles.styleRow} key={row.id}>
                  <TableCell className={styles.styleData}>
                    <p style={{ fontWeight: 600 }}>{row.sub}</p>
                  </TableCell>
                  <TableCell className={styles.styleData}>
                    {row.keterangan}
                  </TableCell>
                  <TableCell>
                    <div className={styles.styleLihatDetail}>
                      <Image src={"/LihatSemua.svg"} width={24} height={24} />{" "}
                      <p>Lihat Detail</p>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
