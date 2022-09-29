import React, { useEffect, useState, useRef } from "react";
import styles from "./tinjauRenaksi.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "../Button";
import Axios from "axios";

export default function CTinjauRenaksi(props: {
  row: ReturnType<typeof createData>;
}) {
  const { row } = props;
  const [pegawai, setPegawai] = useState([]);

  const btnTerima = () => {
    console.log(row.nama);
  };

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/kasubidAmbilPegawai").then(
          (ambilPegawai) => {
            ambilPegawai.data.map((pegawai) => {
              if (masuk.data.user[0].sub_bidang === pegawai.sub_bidang) {
                setPegawai((nextData) => {
                  return [...nextData, pegawai];
                });
              }
            });
          }
        );
      });
    }
  }, []);

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
                <TableCell>Pegawai</TableCell>
                <TableCell>Sub Bidang</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={styles.hover}>
              {pegawai.map((row) => (
                <TableRow className={styles.styleRow} key={row.nip}>
                  <TableCell>{row.nama}</TableCell>
                  <TableCell>{row.sub_bidang}</TableCell>
                  <TableCell>
                    <div>
                      <Button title="terima" onClick={btnTerima} />
                      <Button title="tolak" />
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
