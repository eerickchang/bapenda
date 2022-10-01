import React, { useEffect, useState, useRef } from "react";
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
import Axios from "axios";
import moment from "moment";

Axios.defaults.withCredentials = true;

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

  const [domLoaded, setDomLoaded] = useState(false);
  const [pegawai, setPegawai] = useState([]);
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/ambilPegawai").then((ambilPegawai) => {
          Axios.get("http://localhost:3001/kasubidAmbilRenaksiMJD").then(
            (ambilRenaksi) => {
              ambilRenaksi.data.map((renaksi) => {
                if (renaksi.sub_bidang === masuk.data.user[0].sub_bidang) {
                  setPegawai((nextData) => {
                    return [renaksi, ...nextData];
                  });
                }
              });
              // let userLoggedIn = masuk.data.user;
              // let pegawaiSubid = ambilPegawai.data;
              // let renaksi = ambilRenaksi.data;
              // console.log("User Logged In: ", userLoggedIn);
              // console.log("Pegawai Subid: ", pegawaiSubid);
              // console.log("Renaksi: ", renaksi);
              // let subidUserSDPegawai = [];
              // let pegawaiYgAdaRenaksi = [];
              // subidUserSDPegawai = pegawaiSubid.filter((elA) => {
              //   return userLoggedIn.some(
              //     (elB) => elA["sub_bidang"] === elB["sub_bidang"]
              //   );
              // });
              // pegawaiYgAdaRenaksi = subidUserSDPegawai.filter((elA) => {
              //   return renaksi.some((elB) => elA["nip"] === elB["nip"]);
              // });
              // pegawaiYgAdaRenaksi.map((item) => {
              //   setPegawai((nextData) => {
              //     return [item, ...nextData];
              //   });
              // });
              // console.log("Subid Sama: ", subidUserSDPegawai);
              // console.log("Pegawai Ada Renaksi: ", pegawaiYgAdaRenaksi);
            }
          );
        });
      });
    }
  }, []);

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
            {pegawai.map((row) => (
              <TableRow hover className={styles.styleRow} key={row.id_renaksi}>
                <TableCell className={styles.styleData}>
                  <p style={{ fontWeight: 600 }}>{row.nama}</p>
                </TableCell>
                <TableCell className={styles.styleData}>
                  {row.tupoksi_inti}
                </TableCell>
                <TableCell className={styles.styleData}>
                  {moment(row.start_date).format("MMM")} -{" "}
                  {moment(row.end_date).format("MMM")}
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
