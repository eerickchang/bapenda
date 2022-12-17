import React from "react";
import styles from "./riwayatKegiatanAdm.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "../Button";
import Image from "next/future/image";
import { useRouter } from "next/router";
import Gap from "../Gap";

export default function CTinjauRenaksi() {
  const rowsSubagian = [
    {
      id: 1,
      sub: "nama",
      keterangan: "tolong akang",
    },
    {
      id: 2,
      sub: "nama",
      keterangan: "tolong akang",
    },
    {
      id: 3,
      sub: "nama",
      keterangan: "tolong akang",
    },
  ];

  const router = useRouter();

  const clickRow = () => {
    router.push({
      pathname: "/Admin/RiwayatKegiatanSubid",
      // query: {
      //   subid: row.sub_bidang,
      // },
    });
  };

  const style = {
    fontFamily: "Poppins",
    fontSize: 17,
    fontWeight: 600,
    color: "#959595",
  };

  const style2 = {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 400,
    color: "#000",
    cursor: "pointer",
  };

  const styleContainer = {
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 40,
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitle}>
        <div>
          <Image src={"/RiwayatIcon.svg"} width={40} height={40} />
        </div>
        <p style={{ marginLeft: 8, marginBottom: 10 }}>RIWAYAT KEGIATAN</p>
      </div>
      <Gap height={153} width={0} />
      <div className={styles.wrapTable}>
        <TableContainer
          style={styleContainer}
        >
          <Table sx={{ tableLayout: "fixed" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={style}>Kepala Sub Bagian</TableCell>
                <TableCell style={style}>Sub Bagian</TableCell>
                <TableCell style={style}>Bagian</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsSubagian.map((row) => (
                <TableRow hover className={styles.styleRow} key={row.id}>
                  <TableCell onClick={clickRow} style={style2}>
                    <div className={styles.styleProfileKasub}>
                      <Image src={"/User1.svg"} width={45} height={45} />{" "}
                      <p>{row.sub}</p>
                    </div>
                  </TableCell>
                  <TableCell onClick={clickRow} style={style2}>
                    <p style={{ fontWeight: 600 }}>{row.sub}</p>
                  </TableCell>
                  <TableCell onClick={clickRow} style={style2}>
                    {row.keterangan}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer
          style={styleContainer}
        >
          <Table sx={{ tableLayout: "fixed" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={style}>Kepala Sub Bidang</TableCell>
                <TableCell style={style}>Sub Bidang</TableCell>
                <TableCell style={style}>Bidang</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsSubagian.map((row) => (
                <TableRow hover className={styles.styleRow} key={row.id}>
                  <TableCell onClick={clickRow} style={style2}>
                    <div className={styles.styleProfileKasub}>
                      <Image src={"/User1.svg"} width={45} height={45} />{" "}
                      <p>{row.sub}</p>
                    </div>
                  </TableCell>
                  <TableCell onClick={clickRow} style={style2}>
                    <p style={{ fontWeight: 600 }}>{row.sub}</p>
                  </TableCell>
                  <TableCell onClick={clickRow} style={style2}>
                    {row.keterangan}
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
