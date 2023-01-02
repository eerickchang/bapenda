import React, { useEffect, useState, useRef } from "react";
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
import Axios from "axios";

Axios.defaults.withCredentials = true;

export default function ContentDaftarKegiatanSubid() {
  const [kasubid, setKasubid] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/pegawai").then((ambilPegawai) => {
          ambilPegawai.data.map((pegawai) => {
            if (
              pegawai.jabatan == "Kasubid" &&
              pegawai.bidang == masuk.data.user[0].bidang
            ) {
              setKasubid((nextData) => {
                return [...nextData, pegawai];
              });
            }
          });
        });
      });
    }
  }, []);

  const router = useRouter();

  const clickRow = (data) => {
    router.push({
      pathname: "/Sekretaris/RiwayatKegiatan",
      query: {
        subid: data,
      },
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
        <TableContainer style={styleContainer}>
          <Table sx={{ tableLayout: "fixed" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={style}>Kepala Sub Bidang</TableCell>
                <TableCell style={style}>Sub Bidang</TableCell>
                <TableCell style={style}>Bidang</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {kasubid.map((row) => (
                <TableRow hover className={styles.styleRow} key={row.nip}>
                  <TableCell
                    onClick={() => clickRow(row.sub_bidang)}
                    style={style2}
                  >
                    <div className={styles.styleProfileKasub}>
                      {row.foto != "" ? (
                        <Image src={row.foto} width={45} height={45} />
                      ) : (
                        <Image src={"/User1.svg"} width={45} height={45} />
                      )}

                      <p>{row.nama}</p>
                    </div>
                  </TableCell>
                  <TableCell
                    onClick={() => clickRow(row.sub_bidang)}
                    style={style2}
                  >
                    <p style={{ fontWeight: 600 }}>{row.sub_bidang}</p>
                  </TableCell>
                  <TableCell
                    onClick={() => clickRow(row.sub_bidang)}
                    style={style2}
                  >
                    {row.bidang}
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
