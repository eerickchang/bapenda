import React, { useEffect, useState } from "react";
import styles from "./evaluasiLampiran.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "../Button";
import Image from "next/image";
import Gap from "../Gap";
import { Collapse } from "@mui/material";
export default function EvaluasiLampiran() {
  const rowsSubagian = [
    {
      id: 1,
      nama: "Jerry Sumendap",
      keterangan: "tolong akang",
      dari: "Januari",
      sampai: "Desember",
    },
    
  ];

  //style row
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");
  
  const [open, setOpen] = React.useState(false);


  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);


  return (
    <>
      {domLoaded && (
        <div className={styles.container}>
          <div className={styles.wrapperTitleDaftarKegiatan}>
            <Image src={"/EvaluasiLampiranTitle.svg"} width={50} height={50} />
            <p className={styles.txtTitle}>Evaluasi Lampiran Bukti</p>
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
                  <TableRow
                    onClick={() => {
                      setOpen(!open);
                      {
                        rowClik
                          ? (setStyleRow(
                              `${styles.tableRow} ${styles.tableRowClick}`
                            ),
                            setRowClick(!rowClik))
                          : (setStyleRow(styles.tableRow),
                            setRowClick(!rowClik));
                      }
                    }}
                    hover
                    className={styles.styleRow}
                    key={row.id}
                  >
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
                            <Image
                              src={"/IconPDF.svg"}
                              width={25}
                              height={28}
                            />
                          </div>
                          1 files
                        </div>
                        <Gap width={0} height={10} />
                        <div style={{ display: "flex" }}>
                          <div style={{ marginRight: 10 }}>
                            <Image
                              src={"/IconPDF.svg"}
                              width={25}
                              height={28}
                            />
                          </div>
                          2 files
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                <TableContainer
                  style={{
                    width: 1680,
                    marginTop: -20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    // paddingBottom: 35,
                  }}
                >
                  {/* <div className={styles.backgroundRowExpand}> */}
                  <TableCell style={{ padding: 0, width: 2000 }} colSpan={6}>
                    <Collapse
                      style={{
                        background: "rgba(232, 232, 232, 1)",
                        borderTopColor: "rgba(165, 165, 165, 0.5)",
                        borderTopWidth: 2,
                        borderTopStyle: "solid",
                        marginBottom: 35,
                      }}
                      in={open}
                      timeout="auto"
                    >
                      <TableRow>
                        <div className={styles.wrapperExpand}>
                          <div className={styles.wrapperTanggapan}>
                            <p>Tanggapan:</p>
                            <p className={styles.txtTanggapan}>
                              Permintaan ubah jadwal tidak dapat dilakukan,
                              karena alasan yang diberikan tidak dapat diterima
                            </p>
                          </div>
                          <div className={styles.wrapperLampiran}>
                            <p>Lampiran:</p>
                            <p></p>
                          </div>
                          <div className={styles.wrapperRencanaUbah}>
                            <p>Rencana Ubah Jadwal:</p>
                            <p></p>
                          </div>
                        </div>
                      </TableRow>
                    </Collapse>
                  </TableCell>
                </TableContainer>
              </TableBody>
            </Table>
          </TableContainer>
          {/* </div> */}
        </div>
      )}
    </>
  );
}
