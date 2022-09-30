import React, { useState } from "react";
import styles from "./tinjauRenaksi.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "../Button";
import Image from "next/image";
import Gap from "../Gap";

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

  const [showModal, setShowModal] = useState(false);

  const btnTerima = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleDaftarKegiatan}>
        <Image src={"/TinjauRenaksiTitle.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>Tinjau Renaksi</p>
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
              <TableRow>
                <TableCell className={styles.styleHeader}>Sub Bagian</TableCell>
                <TableCell className={styles.styleHeader}>
                  Keterangan Dari Kepala Badan
                </TableCell>
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
                    <div className={styles.styleTxtRow}>
                      <div style={{ flexDirection: "row", display: "flex" }}>
                        <button
                          className={styles.btnTerima}
                          onClick={btnTerima}
                        >
                          <Image src={"/Terima.svg"} width={20} height={20} />{" "}
                          Terima
                        </button>
                        <Gap width={40} height={0} />
                        <button
                          className={styles.btnTolak}
                          // onClick={() => console.log(renaksiPegawai)}
                        >
                          <Image src={"/Tolak.svg"} width={20} height={20} />{" "}
                          Tolak
                        </button>
                      </div>
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
                <TableCell className={styles.styleHeader}>Sub Bidang</TableCell>
                <TableCell className={styles.styleHeader}>
                  Keterangan Dari Kepala Badan
                </TableCell>
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
                    <div className={styles.styleTxtRow}>
                      <div style={{ flexDirection: "row", display: "flex" }}>
                        <button
                          className={styles.btnTerima}
                          onClick={() => btnTerima()}
                        >
                          <Image src={"/Terima.svg"} width={20} height={20} />{" "}
                          Terima
                        </button>
                        {showModal ? (
                          <div
                            className={styles.modal}
                            onClick={() => setShowModal(false)}
                          >
                            <p>
                              Input Renaksi Feren <b>Berhasil</b>
                              <div className={styles.checkCircle}>
                                <Image
                                  src={"/Check-circle.svg"}
                                  width={25}
                                  height={25}
                                />
                              </div>
                            </p>
                          </div>
                        ) : null}
                        <Gap width={40} height={0} />
                        <button
                          className={styles.btnTolak}
                          // onClick={() => console.log(renaksiPegawai)}
                        >
                          <Image src={"/Tolak.svg"} width={20} height={20} />{" "}
                          Tolak
                        </button>
                      </div>
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
