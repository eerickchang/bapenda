import React, { useEffect, useState, useRef } from "react";
import stylesS from "./cUbahJadwalRenaksi.module.css";

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
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

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
  // const custom = {
  //   content: {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     width: 878,
  //     borderRadius: 20,
  //     paddingLeft: 61,
  //     height: 362,
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //     overlay: "#112350",
  //     backgroundColor: "white",
  //     zIndex: 1001,
  //     scroll: false,
  //   },
  //   overlay: {
  //     position: "fixed",
  //     marginTop: 0,
  //     top: 0,
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     backgroundColor: "rgba(17, 35, 80, 0.5)",
  //     zIndex: 1000,
  //   },
  // };

  // ? CUSTOM STYLE MODAL UBAH JADWAL RENAKSI
  // const customUbah = {
  //   content: {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     right: "auto",
  //     bottom: "auto",
  //     width: 878,
  //     borderRadius: 20,
  //     paddingLeft: 61,
  //     height: 433,
  //     marginRight: "-50%",
  //     transform: "translate(-50%, -50%)",
  //     overlay: "#112350",
  //     backgroundColor: "white",
  //     zIndex: 1001,
  //     scroll: false,
  //   },
  //   overlay: {
  //     position: "fixed",
  //     marginTop: 0,
  //     top: 0,
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     backgroundColor: "rgba(17, 35, 80, 0.5)",
  //     zIndex: 1000,
  //   },
  // };

  //style row
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");

  return (
    <>
      <div className={stylesS.wrapFilter}>
        <button className={styles.btnTerimaAll}>
          <Image src={"/Terima.svg"} width={25} height={25} />
          Terima Semua
        </button>
        <Gap width={15} />
        <button className={styles.btnTolakAll}>
          <Image src={"/Tolak.svg"} width={25} height={25} />
          Tolak Semua
        </button>
      </div>
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
            <p className={stylesS.rekanNama}>{row.nama}</p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>{row.tupoksi_tambahan}</p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>{row.kegiatan}</p>
          </TableCell>
          <TableCell>
            <p className={stylesS.styleTxtRow}>
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
            </p>
          </TableCell>
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
                      Permintaan ubah jadwal tidak dapat dilakukan, karena
                      alasan yang diberikan tidak dapat diterima
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
    </>
  );
}

export const CUbahJadwalRenaksi = () => {
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

      Axios.get("http://localhost:3001/masuk").then((dataPegawai) => {
        setAsn(dataPegawai.data.user[0]);
      });
    }
  }, []);

  const btnFilterBulan = () => {
    // setActiveDropdownBulan(!activeDropdownBulan);
    console.log(dataRenaksi);
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperRiwayatKegiatan}>
              <Image src={"/UbahJadwalTitle.svg"} width={40} height={40} />
              <p className={stylesS.txtTitle}>UBAH JADWAL RENAKSI</p>
            </div>
            <Gap height={153} width={0} />
            <div className={stylesS.wrapFilter}>
              <button className={styles.btnTerimaAll}>
                <Image src={"/Terima.svg"} width={25} height={25} />
                Terima Semua
              </button>
              <Gap width={15} />
              <button className={styles.btnTolakAll}>
                <Image src={"/Tolak.svg"} width={25} height={25} />
                Tolak Semua
              </button>
            </div>
            <TableContainer
              style={{ paddingLeft: 0, paddingRight: 40, zIndex: 998 }}
            >
              <Table sx={{ tableLayout: "fixed" }}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        fontFamily: "Poppins",
                        fontSize: 17,
                        fontWeight: 600,
                        color: "#959595",
                      }}
                      width={0}
                    >
                      Pegawai
                    </TableCell>
                    {/* <TableCell className={styles.headerTable} width={0}>
                      Pegawai
                    </TableCell> */}
                    <TableCell className={styles.headerTable} width={0}>
                      Tupoksi
                    </TableCell>
                    <TableCell className={styles.headerTable} width={0}>
                      Rencana
                    </TableCell>
                    <TableCell className={styles.headerTable} width={0}>
                      Lampiran
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
