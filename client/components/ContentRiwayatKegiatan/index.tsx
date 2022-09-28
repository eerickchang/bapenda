import React, { useEffect, useState, useRef } from "react";
import stylesS from "./ContentRiwayatKegiatan.module.css";

import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./TableMUI.module.css";
import Image from "next/image";
import Gap from "../Gap";
import Axios from "axios";
import moment from "moment";
import XLSX from "xlsx";

Axios.defaults.withCredentials = true;

const rows = [
  {
    id: 1,
    name: "anggursss",
    calories: 20,
    fat: 42,
    carbs: 69,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 80,
    protein2: 80,
  },
  {
    id: 2,
    name: "anggur",
    calories: 90,
    fat: 82,
    carbs: 79,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 60,
    protein2: 60,
  },
  {
    id: 3,
    name: "urusss",
    calories: 50,
    fat: 42,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 20,
    protein2: 20,
  },
  {
    id: 4,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
  {
    id: 5,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
  {
    id: 6,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
  {
    id: 7,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
];

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  // ? CUSTOM STYLE MODAL UNGGAH N HAPUS RENAKSI
  const custom = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 878,
      borderRadius: 20,
      paddingLeft: 61,
      height: 362,
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overlay: "#112350",
      backgroundColor: "white",
      zIndex: 1001,
      scroll: false,
    },
    overlay: {
      position: "fixed",
      marginTop: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(17, 35, 80, 0.5)",
      zIndex: 1000,
    },
  };

  // ? CUSTOM STYLE MODAL UBAH JADWAL RENAKSI
  const customUbah = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 878,
      borderRadius: 20,
      paddingLeft: 61,
      height: 433,
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overlay: "#112350",
      backgroundColor: "white",
      zIndex: 1001,
      scroll: false,
    },
    overlay: {
      position: "fixed",
      marginTop: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(17, 35, 80, 0.5)",
      zIndex: 1000,
    },
  };

  //style row
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");

  return (
    <React.Fragment>
      <TableRow
        className={`${styles.tableRow} ${styleRow}`}
        onClick={() => {
          setOpen(!open);
          {
            rowClik
              ? (setStyleRow(`${styles.tableRow} ${styles.tableRowClick}`),
                setRowClick(!rowClik))
              : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
          }
        }}
        sx={{ "& > *": { borderBottom: "" } }}
      >
        <TableCell>
          <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
            <Image src={"/Check-circle.svg"} width={40} height={40} />
            {/* {ambil data} */}
            <div style={{ marginLeft: 10 }}>
              <p className={stylesS.rekanNama}>{row.nama}</p>
              <p className={stylesS.rekanPegawai}>jabatan</p>
              <p className={stylesS.rekanAsn}>ASN</p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <p className={stylesS.styleTupoksi}>Inti</p>
          {row.tupoksi_inti}
          <p className={stylesS.styleTupoksiTambahan}>Tambahan</p>
          {row.tupoksi_tambahan}
        </TableCell>
        <TableCell>{row.kegiatan}</TableCell>
        <TableCell>{row.sub_kegiatan}</TableCell>
        <TableCell>{row.nama}</TableCell>
        <TableCell>{row.protein1}</TableCell>
        <TableCell>{row.status}</TableCell>
      </TableRow>
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
                    Permintaan ubah jadwal tidak dapat dilakukan, karena alasan
                    yang diberikan tidak dapat diterima
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
    </React.Fragment>
  );
}

export const ContentRiwayatKegiatan = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [asn, setAsn] = useState("");
  const [thnSkrg, setThnSkrg] = useState("");
  const [dataRenaksi, setDataRenaksi] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);
      setThnSkrg(moment().format("YYYY"));
      Axios.get("http://localhost:3001/ambilRenaksi").then((result) => {
        result.data.map((item) => {
          if (
            moment(item.end_date).format("YYYY") === moment().format("YYYY")
          ) {
            setDataRenaksi((nextData) => {
              return [...nextData, item];
            });
          }
        });
      });
    }
  }, []);

  const btnFilterBulan = () => {
    // setActiveDropdownBulan(!activeDropdownBulan);
    console.log(dataRenaksi);
  };

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);
  const [activeDropdownBulan, setActiveDropdownBulan] = useState(false);
  const [activeDropdownUnduh, setActiveDropdownUnduh] = useState(false);

  const tahun = [
    {
      id: 1,
      tahun: "2015",
      onclick: () => setThnSkrg("2015"),
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
      onclick: () => (
        setThnSkrg("2020"),
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/ambilRenaksi").then((result) => {
          result.data.map((item) => {
            if (moment(item.end_date).format("YYYY") === "2020") {
              setDataRenaksi((nextData) => {
                return [...nextData, item];
              });
            }
          });
        })
      ),
    },
    {
      id: 7,
      tahun: "2021",
      onclick: () => (
        setThnSkrg("2021"),
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/ambilRenaksi").then((result) => {
          result.data.map((item) => {
            if (moment(item.end_date).format("YYYY") === "2021") {
              setDataRenaksi((nextData) => {
                return [...nextData, item];
              });
            }
          });
        })
      ),
    },
    {
      id: 8,
      tahun: "2022",
      onclick: () => (
        setThnSkrg("2022"),
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/ambilRenaksi").then((result) => {
          result.data.map((item) => {
            if (moment(item.end_date).format("YYYY") === "2022") {
              setDataRenaksi((nextData) => {
                return [...nextData, item];
              });
            }
          });
        })
      ),
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
  const bulan = [
    {
      id: 1,
      bulan: "Jan",
    },
    {
      id: 2,
      bulan: "Feb",
    },
    {
      id: 3,
      bulan: "Mar",
    },
    {
      id: 4,
      bulan: "Apr",
    },
    {
      id: 5,
      bulan: "Mei",
    },
    {
      id: 6,
      bulan: "Jun",
    },
    {
      id: 7,
      bulan: "Jul",
    },
    {
      id: 8,
      bulan: "Agu",
    },
    {
      id: 9,
      bulan: "Sep",
    },
    {
      id: 10,
      bulan: "Okt",
    },
    {
      id: 11,
      bulan: "Nov",
    },
    {
      id: 12,
      bulan: "Des",
    },
  ];

  const btnDwExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(dataRenaksi);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "dataRenaksi");

    //BUFFER
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });

    //BINARY STRING
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

    //DOWNLOAD
    XLSX.writeFile(workBook, "DataRenaksi.xlsx");
  };

  const unduh = [
    {
      id: 1,
      unduh: "Excel",
      onclick: btnDwExcel,
      // image: <Image src={"/Pdf.svg"} width={38} height={35} />,
    },
    {
      id: 2,
      unduh: "PDF",
      // image: <Image src={"/Pdf.svg"} width={35} height={35} />,
    },
  ];

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperRiwayatKegiatan}>
              <Image src={"/RiwayatIcon.svg"} width={40} height={40} />
              <p className={stylesS.txtTitle}>
                RIWAYAT KEGIATAN TAHUN {thnSkrg}{" "}
              </p>
            </div>
            <Gap height={153} width={0} />
            <div className={stylesS.wrapperFilter}>
              <div className={stylesS.wrapperFilterTahun}>
                <div
                  className={stylesS.btnFilterTahun}
                  onClick={() => setActiveDropdownTahun(!activeDropdownTahun)}
                >
                  <Image src={"/TahunIcon.svg"} width={23} height={23} />
                  <p>Tahun</p>
                </div>
                {activeDropdownTahun && (
                  <div
                    className={stylesS.wrapperSelectFilterTahun}
                    onClick={() => setActiveDropdownTahun(false)}
                  >
                    {tahun.map((item) => (
                      <p key={item.id} onClick={item.onclick}>
                        {item.tahun}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              {/* <div className={stylesS.wrapperFilterBulan}>
                <div
                  className={stylesS.btnFilterBulan}
                  onClick={btnFilterBulan}
                >
                  <Image src={"/TahunIcon.svg"} width={23} height={23} />
                  <p>Bulan</p>
                </div>
                {activeDropdownBulan && (
                  <div
                    className={stylesS.wrapperSelectFilterBulan}
                    onClick={() => setActiveDropdownBulan(false)}
                  >
                    {bulan.map((item) => (
                      <p key={item.id}>{item.bulan}</p>
                    ))}
                  </div>
                )}
              </div> */}
              <div className={stylesS.wrapperUnduh}>
                <div
                  className={stylesS.btnUnduh}
                  onClick={() => setActiveDropdownUnduh(!activeDropdownUnduh)}
                >
                  <Image src={"/UnduhIcon.svg"} width={23} height={23} />
                  <p>Unduh</p>
                </div>
                {activeDropdownUnduh && (
                  <div
                    className={stylesS.wrapperSelectUnduh}
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
                        onClick={item.onclick}
                      >
                        <p>{item.unduh}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <TableContainer
              style={{ paddingLeft: 0, paddingRight: 40, zIndex: 998 }}
            >
              <Table sx={{ tableLayout: "fixed" }}>
                <TableHead>
                  <TableRow>
                    <TableCell className={styles.headerTable} width={0}>
                      Profil
                    </TableCell>
                    <TableCell className={styles.headerTable} width={0}>
                      Tupoksi
                    </TableCell>
                    <TableCell className={styles.headerTable} width={0}>
                      Rencana
                    </TableCell>
                    <TableCell className={styles.headerTable} width={0}>
                      Status
                    </TableCell>
                    <TableCell className={styles.headerTable} width={0}>
                      Keterangan
                    </TableCell>
                    <TableCell className={styles.headerTable} width={0}>
                      Diajukan
                    </TableCell>
                    <TableCell className={styles.headerTable} width={0}>
                      Kondisi
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataRenaksi.map((row) => (
                    <Row key={row.id_renaksi} row={row} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </>
  );
};
