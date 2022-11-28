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
// import Image from "next/image";
import Image from "next/future/image";
import Gap from "../Gap";
import Axios from "axios";
import moment from "moment";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import FileDownload from "js-file-download";

Axios.defaults.withCredentials = true;

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const btnDw = () => {
    Axios.get(`http://localhost:3001/downloadFile${row.files}`, {
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, `${row.files}`);
    });
  };

  //style row
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");

  const styleCollapse = {
    background: "rgba(232, 232, 232, 1)",
    borderTopColor: "rgba(165, 165, 165, 0.5)",
    borderTopWidth: 2,
    borderTopStyle: "solid",
    marginBottom: 5,
  };

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
            {row.foto === "" ? (
              <Image
                src={"/SidebarProfile.svg"}
                width={70}
                height={70}
                alt="User 2"
                className={stylesS.imageDP}
              />
            ) : (
              <Image
                src={row.foto}
                width={70}
                height={70}
                alt="User 2"
                className={stylesS.imageDP}
              />
            )}
            {/* //!{ambil data} */}
            <div style={{ marginLeft: 10 }}>
              <p className={stylesS.rekanNama}>{row.nama}</p>
              <p className={stylesS.rekanPegawai}>{row.jabatan}</p>
              <p className={stylesS.rekanAsn}>ASN</p>
            </div>
          </div>
        </TableCell>
        <TableCell>
          <p className={stylesS.styleTupoksi}>Inti</p>
          <p className={stylesS.styleTxtRow}>{row.tupoksi_inti}</p>
          <p className={stylesS.styleTupoksiTambahan}>Tambahan</p>
          <p className={stylesS.styleTxtRow}>{row.tupoksi_tambahan}</p>
        </TableCell>
        <TableCell>
          <p className={stylesS.styleTxtRow}>{`${moment(row.start_date).format(
            "MMM"
          )} - ${moment(row.end_date).format("MMM")}`}</p>
        </TableCell>
        <TableCell>
          <p className={stylesS.styleTxtRow}>{row.status}</p>
        </TableCell>
        <TableCell>
          <p className={stylesS.styleTxtRow}>{row.ket_pegawai}</p>
        </TableCell>
        <TableCell>
          <p className={stylesS.styleTxtRow}>{row.sub_kegiatan}</p>
        </TableCell>
        <TableCell>
          <p className={stylesS.styleTxtRow}>{row.kondisi}</p>
        </TableCell>
      </TableRow>

      <TableCell style={{ padding: 0, width: 2000 }} colSpan={7}>
        <Collapse sx={styleCollapse} in={open} timeout="auto">
          <div className={styles.wrapperExpand}>
            <div className={styles.wrapperTanggapan}>
              <p>Tanggapan:</p>
              <p className={styles.txtTanggapan}>{row.ket_admin}</p>
            </div>
            <div className={styles.wrapperLampiran}>
              <p>Lampiran:</p>
              {row.files === "" ? null : (
                <div onClick={btnDw} style={{ cursor: "pointer" }}>
                  <Image src={"/IconPDF.svg"} width={35} height={40} />
                </div>
              )}
            </div>
            <div className={styles.wrapperRencanaUbah}>
              <p>Rencana Ubah Jadwal:</p>
              {row.req_start_date == null ? (
                <div></div>
              ) : (
                <p>{`${moment(row.req_start_date).format("MMM")} - ${moment(
                  row.req_end_date
                ).format("MMM")}`}</p>
              )}
            </div>
          </div>
        </Collapse>
      </TableCell>
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

      Axios.get("http://localhost:3001/masuk").then((dataPegawai) => {
        setAsn(dataPegawai.data.user[0]);
        Axios.get("http://localhost:3001/ambilRiwayatKegiatan").then(
          (result) => {
            result.data.map((item) => {
              if (
                moment(item.end_date).format("YYYY") ===
                  moment().format("YYYY") &&
                item.nip == dataPegawai.data.user[0].nip
              ) {
                setDataRenaksi((nextData) => {
                  return [...nextData, item];
                });
              }
            });
          }
        );
      });
    }
  }, []);

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);
  const [activeDropdownUnduh, setActiveDropdownUnduh] = useState(false);

  const menuRefTahun = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRefTahun.current.contains(e.target)) {
        setActiveDropdownTahun(false);
        console.log(menuRefTahun.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const menuRefUnduh = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRefUnduh.current.contains(e.target)) {
        setActiveDropdownUnduh(false);
        console.log(menuRefUnduh.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });


  const tahun = [
    {
      id: 6,
      tahun: "2020",
      onclick: () => (
        setThnSkrg("2020"),
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((dataPegawai) => {
          Axios.get("http://localhost:3001/ambilRiwayatKegiatan").then(
            (result) => {
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") === "2020" &&
                  item.nip == dataPegawai.data.user[0].nip
                ) {
                  setDataRenaksi((nextData) => {
                    return [...nextData, item];
                  });
                }
              });
            }
          );
        })
      ),
    },
    {
      id: 7,
      tahun: "2021",
      onclick: () => (
        setThnSkrg("2021"),
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((dataPegawai) => {
          Axios.get("http://localhost:3001/ambilRiwayatKegiatan").then(
            (result) => {
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") === "2021" &&
                  item.nip == dataPegawai.data.user[0].nip
                ) {
                  setDataRenaksi((nextData) => {
                    return [...nextData, item];
                  });
                }
              });
            }
          );
        })
      ),
    },
    {
      id: 8,
      tahun: "2022",
      onclick: () => (
        setThnSkrg("2022"),
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((dataPegawai) => {
          Axios.get("http://localhost:3001/ambilRiwayatKegiatan").then(
            (result) => {
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") === "2022" &&
                  item.nip == dataPegawai.data.user[0].nip
                ) {
                  setDataRenaksi((nextData) => {
                    return [...nextData, item];
                  });
                }
              });
            }
          );
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

  const btnDwExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(dataRenaksi);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "dataRenaksi");

    //BUFFER
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });

    //BINARY STRING
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });

    //DOWNLOAD
    XLSX.writeFile(workBook, `Data Renaksi ${asn.nama}.xlsx`);
  };

  const btnDwPDF = () => {
    const unit = "pt";
    const size = "A3";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = `Data Renaksi ${asn.nama}`;
    const headers = [
      [
        "Program",
        "Kegiatan",
        "Sub Kegiatan",
        "Tupoksi",
        "Rekan",
        "Rencana",
        "Status",
      ],
    ];

    const data = dataRenaksi.map((item) => [
      item.program,
      item.kegiatan,
      item.sub_kegiatan,
      item.tupoksi_tambahan,
      item.nama,
      `${moment(item.start_date).format("MMM")} - ${moment(
        item.end_date
      ).format("MMM")}`,
      item.status,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
      theme: "grid",
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(`Data Renaksi ${asn.nama}`);
  };

  const unduh = [
    {
      id: 1,
      unduh: "Excel",
      onclick: btnDwExcel,
    },
    {
      id: 2,
      unduh: "PDF",
      onclick: btnDwPDF,
    },
  ];

  const styleHeader = {
    fontFamily: "Poppins",
    fontSize: 21,
    fontWeight: 600,
    color: "rgba(149, 149, 149, 1)",
  };

  const styleContainer = { paddingLeft: 2, paddingRight: 40 };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={styles.wrapperTitle}>
              <div>
                <Image src={"/RiwayatIcon.svg"} width={40} height={40} />
              </div>
              <p style={{ marginLeft: 5, marginBottom: 10 }}>
                RIWAYAT KEGIATAN TAHUN {thnSkrg}
              </p>
            </div>
            <Gap height={153} width={0} />
            <div className={stylesS.wrapperFilter}>
              <div className={stylesS.wrapperFilterTahun} ref={menuRefTahun}>
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
              <div className={stylesS.wrapperUnduh} ref={menuRefUnduh}>
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

            <TableContainer style={styleContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell width={400} style={styleHeader}>
                      Profil
                    </TableCell>
                    <TableCell width={400} style={styleHeader}>
                      Tupoksi
                    </TableCell>
                    <TableCell width={400} style={styleHeader}>
                      Rencana
                    </TableCell>
                    <TableCell width={400} style={styleHeader}>
                      Status
                    </TableCell>
                    <TableCell width={400} style={styleHeader}>
                      Keterangan
                    </TableCell>
                    <TableCell width={400} style={styleHeader}>
                      Diajukan
                    </TableCell>
                    <TableCell width={400} style={styleHeader}>
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
