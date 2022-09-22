import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./ContentDetailCakin.module.css";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Gap from "../Gap";
import { borderRadius } from "@mui/system";

export default function ContentDetailCaKin() {
  const router = useRouter();

  const clickBack = () => {
    router.push("/Staff/Profil");
  };

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);
  const [activeDropdownUnduh, setActiveDropdownUnduh] = useState(false);

  const tahun = [
    {
      id: 1,
      tahun: "2015",
    },
    {
      id: 2,
      tahun: "2016",
    },
    {
      id: 3,
      tahun: "2017",
    },
    {
      id: 4,
      tahun: "2018",
    },
    {
      id: 5,
      tahun: "2019",
    },
    {
      id: 6,
      tahun: "2020",
    },
    {
      id: 7,
      tahun: "2021",
    },
    {
      id: 8,
      tahun: "2022",
    },
    {
      id: 9,
      tahun: "2023",
    },
    {
      id: 10,
      tahun: "2024",
    },
    {
      id: 11,
      tahun: "2025",
    },
  ];

  const unduh = [
    {
      id: 1,
      unduh: "Excel",
      // image: <Image src={"/Pdf.svg"} width={38} height={35} />,
    },
    {
      id: 2,
      unduh: "PDF",
      // image: <Image src={"/Pdf.svg"} width={35} height={35} />,
    },
  ];

  const columns = [
    { id: "nama", label: "Nama", align: "center", minWidth: 100 },
    { id: "jabatan", label: "Jabatan", align: "center", minWidth: 50 },
    {
      id: "bulan",
      label: "Bulan",
      minWidth: 100,
      align: "center",
      // format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "jumlahkegiatan",
      label: "Jumlah Kegiatan",
      minWidth: 100,
      align: "center",
      // format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "realisasikegiatan",
      label: "Realisasi Kegiatan",
      minWidth: 100,
      align: "center",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "belumdilaksanakan",
      label: "Belum Dilaksanakan",
      minWidth: 100,
      align: "center",
      // format: (value) => value.toFixed(2),
    },
    {
      id: "hasilkinerja",
      label: "Hasil Kinerja",
      minWidth: 100,
      align: "center",
      // format: (value) => value.toFixed(2),
    },
  ];

  // function createData(
  //   nama,
  //   jabatan,
  //   bulan,
  //   jumlahkegiatan,
  //   realisasikegiatan,
  //   belumdilaksanakan,
  //   hasilkinerja
  // ) {
  //   return {
  //     nama,
  //     jabatan,
  //     bulan,
  //     jumlahkegiatan,
  //     realisasikegiatan,
  //     belumdilaksanakan,
  //     hasilkinerja,
  //   };
  // }

  const rows = [
    {
      nama: 'andre',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'andre',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'andre',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'andre',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'andre',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'andre',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'andre',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'andre',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'andre',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'andre',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'erik',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'erik',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'erik',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'erik',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },
    {
      nama: 'erik',
      jabatan: 'Kabid',
      bulan: 'januari',
      jumlahkegiatan: 10,
      realisasikegiatan: 3,
      belumdilaksanakan: 7,
      hasilkinerja: 30,
    },

    // createData("India", "IN", 1324171354, 1324171354, 123, 123, 123),
    // createData("China", "CN", 1403500365, 9596961, 123, 123, 123),
    // createData("Italy", "IT", 60483973, 301340, 123, 123, 123),
    // createData("United States", "US", 327167434, 9833520, 123, 123, 123),
    // createData("Canada", "CA", 37602103, 9984670, 123, 123, 123),
    // createData("Australia", "AU", 25475400, 7692024, 123, 123, 123),
    // createData("Germany", "DE", 83019200, 357578, 123, 123, 123),
    // createData("Ireland", "IE", 4857000, 70273, 123, 123, 123),
    // createData("Mexico", "MX", 126577691, 1972550, 123, 123, 123),
    // createData("Japan", "JP", 126317000, 377973, 123, 123, 123),
    // createData("France", "FR", 67022000, 640679, 123, 123, 123),
    // createData("India", "IN", 1324171354, 1324171354, 123, 123, 123),
    // createData("China", "CN", 1403500365, 9596961, 123, 123, 123),
    // createData("Italy", "IT", 60483973, 301340, 123, 123, 123),
    // createData("United States", "US", 327167434, 9833520, 123, 123, 123),
    // createData("Canada", "CA", 37602103, 9984670, 123, 123, 123),
    // createData("Australia", "AU", 25475400, 7692024, 123, 123, 123),
    // createData("Germany", "DE", 83019200, 357578, 123, 123, 123),
    // createData("Ireland", "IE", 4857000, 70273, 123, 123, 123),
    // createData("Mexico", "MX", 126577691, 1972550, 123, 123, 123),
    // createData("Japan", "JP", 126317000, 377973, 123, 123, 123),
    // createData("France", "FR", 67022000, 640679, 123, 123, 123),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.wrapperTitle}>
          <Image
            style={{ cursor: "pointer" }}
            onClick={clickBack}
            src={"/Back.svg"}
            width={50}
            height={50}
          />
          <Image src={"/DetailCaKin.svg"} width={50.38} height={50} />
          <p className={styles.txtTitle}>
            DETAIL CAPAIAN KINERJA - GEORGE OLAF
          </p>
        </div>

        <div className={styles.wrapperFilter}>
          <div className={styles.wrapperFilterTahun}>
            <div
              className={styles.btnFilterTahun}
              onClick={() => setActiveDropdownTahun(!activeDropdownTahun)}
            >
              <Image src={"/TahunIcon.svg"} width={23} height={23} />
              <p>Tahun</p>
            </div>
            {activeDropdownTahun && (
              <div
                className={styles.wrapperSelectFilterTahun}
                onClick={() => setActiveDropdownTahun(false)}
              >
                {tahun.map((item) => (
                  <p key={item.id}>{item.tahun}</p>
                ))}
              </div>
            )}
          </div>
          <div className={styles.wrapperUnduh}>
            <div
              className={styles.btnUnduh}
              onClick={() => setActiveDropdownUnduh(!activeDropdownUnduh)}
            >
              <Image src={"/UnduhIcon.svg"} width={23} height={23} />
              <p>Unduh</p>
            </div>
            {activeDropdownUnduh && (
              <div
                className={styles.wrapperSelectUnduh}
                onClick={() => setActiveDropdownUnduh(false)}
              >
                {unduh.map((item) => (
                  <div
                    style={{
                      display: "flex",
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      fontSize: 22,
                    }}
                    key={item.id}
                  >
                    <p>{item.unduh}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* <Paper sx={{ width: "100%", overflow: "hidden" }}> */}
      <TableContainer
        sx={{
          maxHeight: 766,
          width: 1660,
          marginTop: 8,
          color: "rgba(27, 221, 187, 1)",
          border: 2,
          borderRadius: 6,
          boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{
            tableLayout: "fixed",
          }}
        >
          <TableHead sx={{ borderTopRightRadius: 20 }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{
                    background: "rgba(27, 221, 187, 1)",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: 23,
                    color: "#fff",
                  }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>

            {/* AMBIL DATA ROW */}
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                      }}
                    >
                      {row.nama}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                      }}
                    >
                      {row.jabatan}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                      }}
                    >
                      {row.bulan}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                      }}
                    >
                      {row.jumlahkegiatan}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                      }}
                    >
                      {row.realisasikegiatan}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                      }}
                    >
                      {row.belumdilaksanakan}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: 1,
                        borderColor: "#1BDDBB",
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: 18,
                      }}
                    >
                      {row.hasilkinerja}
                    </TableCell>



                    {/* {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          sx={{
                            border: 1,
                            borderColor: "#1BDDBB",
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            fontSize: 18,
                          }}
                          key={column.id}
                          align={column.align}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })} */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        // style={{background: '#fff', fontFamily: 'Poppins', fontWeight: 600, fontSize: 18}}
      />
      {/* </Paper> */}
    </div>
  );
}
