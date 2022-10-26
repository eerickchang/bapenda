import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import styles from "./riwayatKegiatanAdm.module.css";

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

  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleDaftarKegiatan}>
        <Image src={"/RiwayatIcon.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>Riwayat Kegiatan</p>
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
                <TableCell className={styles.styleHeader}>
                  Kepala Sub Bagian
                </TableCell>
                <TableCell className={styles.styleHeader}>Sub Bagian</TableCell>
                <TableCell className={styles.styleHeader}>Bagian</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsSubagian.map((row) => (
                <TableRow hover className={styles.styleRow} key={row.id}>
                  <TableCell className={styles.styleData}>
                    <div className={styles.styleProfileKasub}>
                      <Image src={"/User1.svg"} width={45} height={45} />{" "}
                      <p>{row.sub}</p>
                    </div>
                  </TableCell>
                  <TableCell className={styles.styleData}>
                    <p style={{ fontWeight: 600 }}>{row.sub}</p>
                  </TableCell>
                  <TableCell className={styles.styleData}>
                    {row.keterangan}
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
                <TableCell className={styles.styleHeader}>
                  Kepala Sub Bidang
                </TableCell>
                <TableCell className={styles.styleHeader}>Sub Bidang</TableCell>
                <TableCell className={styles.styleHeader}>Bidang</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsSubagian.map((row) => (
                <TableRow hover className={styles.styleRow} key={row.id}>
                  <TableCell className={styles.styleData}>
                    <div className={styles.styleProfileKasub}>
                      <Image src={"/User1.svg"} width={45} height={45} />{" "}
                      <p>{row.sub}</p>
                    </div>
                  </TableCell>
                  <TableCell className={styles.styleData}>
                    <p style={{ fontWeight: 600 }}>{row.sub}</p>
                  </TableCell>
                  <TableCell className={styles.styleData}>
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
