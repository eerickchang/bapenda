import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./cDaftarKegiatanSubid.module.css";


import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styleTable from "./TableMUI.module.css";
import Image from "next/image";
import Gap from "../Gap";
import Axios from "axios";
import moment from "moment";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";


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
    <React.Fragment>
      <TableRow
        className={`${styleTable.tableRow} ${styleRow}`}
        onClick={() => {
          setOpen(!open);
          {
            rowClik
              ? (setStyleRow(
                  `${styleTable.tableRow} ${styleTable.tableRowClick}`
                ),
                setRowClick(!rowClik))
              : (setStyleRow(styleTable.tableRow), setRowClick(!rowClik));
          }
        }}
        sx={{ "& > *": { borderBottom: "" } }}
      >
        <TableCell>
          <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
            <Image src={"/Check-circle.svg"} width={40} height={40} />
            {/* //!{ambil data} */}
            <div style={{ marginLeft: 10 }}>
              <p className={styleTable.rekanNama}>{row.nama}</p>
              <p className={styleTable.rekanPegawai}>jabatan</p>
              <p className={styleTable.rekanAsn}>ASN</p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <p className={styleTable.styleTupoksi}>Inti</p>
          <p className={styleTable.styleTxtRow}>{row.tupoksi_inti}</p>
          <p className={styleTable.styleTupoksiTambahan}>Tambahan</p>
          <p className={styleTable.styleTxtRow}>{row.tupoksi_tambahan}</p>
        </TableCell>
        <TableCell>
          <p className={styleTable.styleTxtRow}>{row.kegiatan}</p>
        </TableCell>
        <TableCell>
          <p className={styleTable.styleTxtRow}>{row.sub_kegiatan}</p>
        </TableCell>
        <TableCell>
          <p className={styleTable.styleTxtRow}>{row.sub_kegiatan}</p>
        </TableCell>
        <TableCell>
          <p className={styleTable.styleTxtRow}>{row.sub_kegiatan}</p>
        </TableCell>
        <TableCell>
          <p className={styleTable.styleTxtRow}>{row.status}</p>
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


export default function CDaftarKegiatanSubid() {
  const router = useRouter();
  const clickBack = () => {
    router.push("/Admin/DaftarKegiatan");
    // console.log(dataCakin);
  };

  const filter = [
    {
      id: 1,
      status: "Semua",
      //  onclick: () => (
      //    setDataRenaksi([]),
      //    Axios.get("http://localhost:3001/ambilRenaksi").then((result) => {
      //      result.data.map((item) => {
      //        if (
      //          moment(item.end_date).format("YYYY") ===
      //          moment().format("YYYY")
      //        ) {
      //          setDataRenaksi((nextData) => {
      //            return [...nextData, item];
      //          });
      //        }
      //      });
      //    })
      //  ),
    },
    {
      id: 2,
      status: "Jadwal diubah",
      //  onclick: () => (
      //    setDataRenaksi([]),
      //    Axios.get("http://localhost:3001/ambilRenaksiJadwalDiubah").then(
      //      (result) => {
      //        result.data.map((item) => {
      //          if (
      //            moment(item.end_date).format("YYYY") ===
      //            moment().format("YYYY")
      //          ) {
      //            setDataRenaksi((nextData) => {
      //              return [...nextData, item];
      //            });
      //          }
      //        });
      //      }
      //    )
      //  ),
    },

    {
      id: 3,
      status: "Sementara",
      //  onclick: () => (
      //    setDataRenaksi([]),
      //    Axios.get("http://localhost:3001/ambilRenaksiSementara").then(
      //      (result) => {
      //        result.data.map((item) => {
      //          if (
      //            moment(item.end_date).format("YYYY") ===
      //            moment().format("YYYY")
      //          ) {
      //            setDataRenaksi((nextData) => {
      //              return [...nextData, item];
      //            });
      //          }
      //        });
      //      }
      //    )
      //  ),
    },

    {
      id: 4,
      status: "Menunggu",
      //      onclick: () => (
      //        setDataRenaksi([]),
      //        Axios.get("http://localhost:3001/ambilRenaksiMenunggu").then(
      //          (result) => {
      //            result.data.map((item) => {
      //              if (
      //                moment(item.end_date).format("YYYY") ===
      //                moment().format("YYYY")
      //              ) {
      //                setDataRenaksi((nextData) => {
      //                  return [...nextData, item];
      //                });
      //              }
      //            });
      //          }
      //        )
      //      ),
      //    },

      //    {
      //      id: 5,
      //      status: "Selesai",
      //      onclick: () => (
      //        setDataRenaksi([]),
      //        Axios.get("http://localhost:3001/ambilRenaksiSelesai").then(
      //          (result) => {
      //            result.data.map((item) => {
      //              if (
      //                moment(item.end_date).format("YYYY") ===
      //                moment().format("YYYY")
      //              ) {
      //                setDataRenaksi((nextData) => {
      //                  return [...nextData, item];
      //                });
      //              }
      //            });
      //          }
      //        )
      //      ),
    },

    {
      id: 6,
      status: "Hapus",
      //  onclick: () => (
      //    setDataRenaksi([]),
      //    Axios.get("http://localhost:3001/ambilRenaksiDihapus").then(
      //      (result) => {
      //        result.data.map((item) => {
      //          if (
      //            moment(item.end_date).format("YYYY") ===
      //            moment().format("YYYY")
      //          ) {
      //            setDataRenaksi((nextData) => {
      //              return [...nextData, item];
      //            });
      //          }
      //        });
      //      }
      //    )
      //  ),
    },

    {
      id: 7,
      status: "Ditambah",
      //  onclick: () => console.log(dataRenaksi),
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(false);

  const btnFilter = () => {
    setActiveDropdown(!activeDropdown);
    // console.log(dataRenaksi);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleDaftarKegiatan}>
        <Image
          style={{ cursor: "pointer" }}
          onClick={clickBack}
          src={"/Back.svg"}
          width={50}
          height={50}
        />
        <Image src={"/DaftarKegiatan2.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>DAFTAR KEGIATAN</p>
      </div>
      <div className={styles.wrapperFilter}>
        <div className={styles.btnFilter} onClick={btnFilter}>
          <Image src={"/Filter.svg"} width={23} height={23} />
          <p>Filter</p>
        </div>
        {activeDropdown && (
          <div
            className={styles.wrapperSelectStatus}
            onClick={() => setActiveDropdown(false)}
          >
            {filter.map((item) => (
              <p key={item.id} onClick={item.onclick}>
                {item.status}
              </p>
            ))}
          </div>
        )}
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
