import React from "react";
import styles from "./tinjauRenaksi.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "../Button";

export default function CTinjauRenaksi() {
  const rowsSubagian = [
    {
      id: 1,
      sub: "Hukum",
      keterangan: "tolong akang",
      aksi: (
        <div>
          <Button title="terima" />
          <Button title="terima" />
        </div>
      ),
    },
    {
      id: 2,
      sub: "Hukum",
      keterangan: "tolong akang",
      aksi: (
        <div>
          <Button title="terima" />
          <Button title="terima" />
        </div>
      ),
    },
    {
      id: 3,
      sub: "Hukum",
      keterangan: "tolong akang",
      aksi: (
        <div>
          <Button title="terima" />
          <Button title="terima" />
        </div>
      ),
    },
  ];

  return (
    <div className={styles.container}>
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
              <TableRow>
                <TableCell>Sub Bagian</TableCell>
                <TableCell>Keterangan Dari Kepala Badan</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={styles.hover}>
              {rowsSubagian.map((row) => (
                <TableRow className={styles.styleRow} key={row.id}>
                  <TableCell>{row.sub}</TableCell>
                  <TableCell>{row.keterangan}</TableCell>
                  <TableCell>{row.aksi}</TableCell>
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
                <TableCell>Sub Bidang</TableCell>
                <TableCell>Keterangan Dari Kepala Badan</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={styles.hover}>
              {rowsSubagian.map((row) => (
                <TableRow className={styles.styleRow} key={row.id}>
                  <TableCell>{row.sub}</TableCell>
                  <TableCell>{row.keterangan}</TableCell>
                  <TableCell>{row.aksi}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
