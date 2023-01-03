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

import Modal from "react-modal";
import { useRouter } from "next/router";

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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: "0px 4px 4px #F4AAB9",
    marginTop: -1.8,
  };

  return (
    <React.Fragment>
      {row.status != "Ubah Jadwal" ? (
        <>
          {row.kondisi != "Ditolak" ? (
            <>
              <TableRow
                className={`${styles.tableRow} ${styleRow}`}
                onClick={() => {
                  setOpen(!open);
                  {
                    rowClik
                      ? (setStyleRow(
                          `${styles.tableRow} ${styles.tableRowClick}`
                        ),
                        setRowClick(!rowClik))
                      : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
                  }
                }}
                sx={{
                  "& > *": {
                    borderBottom: "",
                  },
                }}
              >
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      padding: 10,
                      alignItems: "center",
                    }}
                  >
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
                  <p className={stylesS.styleTxtRow}>{`${moment(
                    row.start_date
                  ).format("MMM")} - ${moment(row.end_date).format("MMM")}`}</p>
                </TableCell>
                <TableCell>
                  <p className={stylesS.styleTxtRow}>{row.status}</p>
                </TableCell>
                <TableCell sx={{ height: 100, color: "rgb(233, 124, 0)" }}>
                  <p className={stylesS.styleTxtRow}>{row.ket_pegawai}</p>
                </TableCell>
                {/* <TableCell>
                  <p className={stylesS.styleTxtRow}>{row.sub_kegiatan}</p>
                </TableCell> */}
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
                  </div>
                </Collapse>
              </TableCell>
            </>
          ) : (
            <>
              <TableRow
                className={`${styles.tableRow} ${styleRow}`}
                onClick={() => {
                  setOpen(!open);
                  {
                    rowClik
                      ? (setStyleRow(
                          `${styles.tableRow} ${styles.tableRowClick}`
                        ),
                        setRowClick(!rowClik))
                      : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
                  }
                }}
                sx={{
                  "& > *": {
                    borderBottom: "",
                  },
                }}
              >
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      padding: 10,
                      alignItems: "center",
                    }}
                  >
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
                  <p className={stylesS.styleTupoksiDitolak}>Inti</p>
                  <p className={stylesS.styleTxtRowDitolak}>
                    {row.tupoksi_inti}
                  </p>
                  <p className={stylesS.styleTupoksiTambahanDitolak}>
                    Tambahan
                  </p>
                  <p className={stylesS.styleTxtRowDitolak}>
                    {row.tupoksi_tambahan}
                  </p>
                </TableCell>
                <TableCell>
                  <p className={stylesS.styleTxtRowDitolak}>{`${moment(
                    row.start_date
                  ).format("MMM")} - ${moment(row.end_date).format("MMM")}`}</p>
                </TableCell>
                <TableCell>
                  <p className={stylesS.styleTxtRowDitolak}>{row.status}</p>
                </TableCell>
                <TableCell>
                  <p className={stylesS.styleTxtRowDitolak}>
                    {row.ket_pegawai}
                  </p>
                </TableCell>
                {/* <TableCell>
                  <p className={stylesS.styleTxtRowDitolak}>
                    {row.sub_kegiatan}
                  </p>
                </TableCell> */}
                <TableCell>
                  <p className={stylesS.styleTxtRowDitolak}>{row.kondisi}</p>
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
                  </div>
                </Collapse>
              </TableCell>
            </>
          )}
        </>
      ) : (
        <>
          {row.kondisi != "Ditolak" ? (
            <>
              <TableRow
                className={`${styles.tableRow} ${styleRow}`}
                onClick={() => {
                  setOpen(!open);
                  {
                    rowClik
                      ? (setStyleRow(
                          `${styles.tableRow} ${styles.tableRowClick}`
                        ),
                        setRowClick(!rowClik))
                      : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
                  }
                }}
                sx={{
                  "& > *": {
                    borderBottom: "",
                  },
                }}
              >
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      padding: 10,
                      alignItems: "center",
                    }}
                  >
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
                  <p className={stylesS.styleTxtRow}>{`${moment(
                    row.start_date
                  ).format("MMM")} - ${moment(row.end_date).format("MMM")}`}</p>
                </TableCell>
                <TableCell>
                  <p className={stylesS.styleTxtRow}>{row.status}</p>
                </TableCell>
                <TableCell sx={{ height: 100, color: "rgb(233, 124, 0)" }}>
                  <p className={stylesS.styleTxtRow}>{row.ket_pegawai}</p>
                </TableCell>
                {/* <TableCell>
                  <p className={stylesS.styleTxtRow}>{row.sub_kegiatan}</p>
                </TableCell> */}
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
                        <p>{`${moment(row.req_start_date).format(
                          "MMM"
                        )} - ${moment(row.req_end_date).format("MMM")}`}</p>
                      )}
                    </div>
                  </div>
                </Collapse>
              </TableCell>
            </>
          ) : (
            <>
              <TableRow
                className={`${styles.tableRow} ${styleRow}`}
                onClick={() => {
                  setOpen(!open);
                  {
                    rowClik
                      ? (setStyleRow(
                          `${styles.tableRow} ${styles.tableRowClick}`
                        ),
                        setRowClick(!rowClik))
                      : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
                  }
                }}
                sx={{
                  "& > *": {
                    borderBottom: "",
                  },
                }}
              >
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      padding: 10,
                      alignItems: "center",
                    }}
                  >
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
                  <p className={stylesS.styleTupoksiDitolak}>Inti</p>
                  <p className={stylesS.styleTxtRowDitolak}>
                    {row.tupoksi_inti}
                  </p>
                  <p className={stylesS.styleTupoksiTambahanDitolak}>
                    Tambahan
                  </p>
                  <p className={stylesS.styleTxtRowDitolak}>
                    {row.tupoksi_tambahan}
                  </p>
                </TableCell>
                <TableCell>
                  <p className={stylesS.styleTxtRowDitolak}>{`${moment(
                    row.start_date
                  ).format("MMM")} - ${moment(row.end_date).format("MMM")}`}</p>
                </TableCell>
                <TableCell>
                  <p className={stylesS.styleTxtRowDitolak}>{row.status}</p>
                </TableCell>
                <TableCell>
                  <p className={stylesS.styleTxtRowDitolak}>
                    {row.ket_pegawai}
                  </p>
                </TableCell>
                {/* <TableCell>
                  <p className={stylesS.styleTxtRowDitolak}>
                    {row.sub_kegiatan}
                  </p>
                </TableCell> */}
                <TableCell>
                  <p className={stylesS.styleTxtRowDitolak}>{row.kondisi}</p>
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
                        <p>{`${moment(row.req_start_date).format(
                          "MMM"
                        )} - ${moment(row.req_end_date).format("MMM")}`}</p>
                      )}
                    </div>
                  </div>
                </Collapse>
              </TableCell>
            </>
          )}
        </>
      )}
    </React.Fragment>
  );
}

export const CRiwayatKegiatanSubid = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [asn, setAsn] = useState("");
  const [thnSkrg, setThnSkrg] = useState("");
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [year, setYear] = useState([]);
  const [subid, setSubid] = useState("");
  const router = useRouter();

  const shouldLog = useRef(true);
  useEffect(() => {
    if (!router.isReady) return;
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);
      setThnSkrg(moment().format("YYYY"));

      // console.log(router.query.subid);
      setSubid(router.query.subid);

      Axios.get("http://localhost:3001/masuk").then((dataPegawai) => {
        setAsn(dataPegawai.data.user[0]);
        Axios.get("http://localhost:3001/ambilRiwayatKegiatan").then(
          (result) => {
            // console.log(result);
            result.data.map((item) => {
              if (
                moment(item.end_date).format("YYYY") ===
                  moment().format("YYYY") &&
                item.sub_bidang == router.query.subid &&
                item.status == "Unggah Lampiran"
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
  }, [router.query, router.isReady]);

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);
  const [activeDropdownUnduh, setActiveDropdownUnduh] = useState(false);
  const [activeDropdownFilter, setActiveDropdownFilter] = useState(false);

  const custom = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 491,
      // height: 210,
      borderRadius: 20,
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

  const [modalIsOpen, setIsOpenModal] = useState(false);

  setTimeout(() => {}, 3000);
  function openModal() {
    setIsOpenModal(true);
    setTimeout(() => {
      setIsOpenModal(false);
    }, 4000);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  const btnFilter = () => {
    setActiveDropdownFilter(!activeDropdownFilter);
  };

  const menuRefTahun = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRefTahun.current.contains(e.target)) {
        setActiveDropdownTahun(false);
        // console.log(menuRefTahun.current);
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
        // console.log(menuRefUnduh.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const menuRefFilter = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRefFilter.current.contains(e.target)) {
        setActiveDropdownFilter(false);
        // console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const filter = [
    {
      id: 1,
      status: "Selesai",
      onclick: () => (
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((response) => {
          setAsn(response.data.user[0]);
          // setImage(response.data.user[0].foto);

          Axios.get("http://localhost:3001/ambilRiwayatKegiatan").then(
            (result) => {
              // console.log(result);
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") ===
                    moment().format("YYYY") &&
                  item.sub_bidang == subid &&
                  item.status == "Unggah Lampiran"
                ) {
                  setDataRenaksi((nextData) => {
                    return [...nextData, item];
                  });
                }
              });
            }
          );

          setYear([]);
          for (let i = 2020; i <= 2030; i++) {
            setYear((nextData) => {
              return [
                ...nextData,
                {
                  tahun: i,
                  onclick: () => (
                    setDataRenaksi([]),
                    setThnSkrg(i),
                    Axios.get(
                      "http://localhost:3001/ambilRiwayatKegiatan"
                    ).then((result) => {
                      result.data.map((item) => {
                        if (
                          moment(item.end_date).format("YYYY") ===
                            moment(`${i}`).format("YYYY") &&
                          item.sub_bidang == subid &&
                          item.status == "Unggah Lampiran"
                        ) {
                          setDataRenaksi((nextData) => {
                            return [...nextData, item];
                          });
                        }
                      });
                    })
                  ),
                },
              ];
            });
          }
        })
      ),
    },
    {
      id: 2,
      status: "Renaksi Dihapus",
      onclick: () => (
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((response) => {
          setAsn(response.data.user[0]);
          // setImage(response.data.user[0].foto);

          Axios.get("http://localhost:3001/ambilRiwayatKegiatan").then(
            (result) => {
              // console.log(result);
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") ===
                    moment().format("YYYY") &&
                  item.sub_bidang == subid &&
                  item.status == "Hapus Kegiatan"
                ) {
                  setDataRenaksi((nextData) => {
                    return [...nextData, item];
                  });
                }
              });
            }
          );

          setYear([]);
          for (let i = 2020; i <= 2030; i++) {
            setYear((nextData) => {
              return [
                ...nextData,
                {
                  tahun: i,
                  onclick: () => (
                    setDataRenaksi([]),
                    setThnSkrg(i),
                    Axios.get(
                      "http://localhost:3001/ambilRiwayatKegiatan"
                    ).then((result) => {
                      result.data.map((item) => {
                        if (
                          moment(item.end_date).format("YYYY") ===
                            moment(`${i}`).format("YYYY") &&
                          item.sub_bidang == subid &&
                          item.status == "Hapus Kegiatan"
                        ) {
                          setDataRenaksi((nextData) => {
                            return [...nextData, item];
                          });
                        }
                      });
                    })
                  ),
                },
              ];
            });
          }
        })
      ),
    },
    {
      id: 3,
      status: "Jadwal Diubah",
      onclick: () => (
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((response) => {
          setAsn(response.data.user[0]);
          // setImage(response.data.user[0].foto);

          Axios.get("http://localhost:3001/ambilRiwayatKegiatan").then(
            (result) => {
              // console.log(result);
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") ===
                    moment().format("YYYY") &&
                  item.sub_bidang == subid &&
                  item.status == "Ubah Jadwal"
                ) {
                  setDataRenaksi((nextData) => {
                    return [...nextData, item];
                  });
                }
              });
            }
          );

          setYear([]);
          for (let i = 2020; i <= 2030; i++) {
            setYear((nextData) => {
              return [
                ...nextData,
                {
                  tahun: i,
                  onclick: () => (
                    setDataRenaksi([]),
                    setThnSkrg(i),
                    Axios.get(
                      "http://localhost:3001/ambilRiwayatKegiatan"
                    ).then((result) => {
                      result.data.map((item) => {
                        if (
                          moment(item.end_date).format("YYYY") ===
                            moment(`${i}`).format("YYYY") &&
                          item.sub_bidang == subid &&
                          item.status == "Ubah Jadwal"
                        ) {
                          setDataRenaksi((nextData) => {
                            return [...nextData, item];
                          });
                        }
                      });
                    })
                  ),
                },
              ];
            });
          }
        })
      ),
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
    XLSX.writeFile(workBook, `Riwayat Kegiatan Renaksi ${subid}.xlsx`);
  };

  const btnDwPDF = () => {
    const unit = "pt";
    const size = "A3";
    const orientation = "portrait";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = `Riwayat Kegiatan Renaksi ${subid}`;
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
    doc.save(`Riwayat Kegiatan Renaksi ${subid}`);
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

  const clickBack = () => {
    router.push("/Admin/RiwayatKegiatan");
    // console.log(dataCakin);
  };

  const styleContainer = { paddingLeft: 2, paddingRight: 40 };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={styles.wrapperTitle}>
              <Image
                style={{ cursor: "pointer" }}
                onClick={clickBack}
                src={"/Back.svg"}
                width={45}
                height={45}
              />
              <div>
                <Image src={"/RiwayatIcon.svg"} width={40} height={40} />
              </div>
              <p style={{ marginLeft: 8, marginBottom: 10 }}>
                RIWAYAT KEGIATAN TAHUN {thnSkrg}
              </p>
            </div>
            <Gap height={153} width={0} />
            <div className={stylesS.wrapFilter}>
              <div className={stylesS.wrapperFilter} ref={menuRefFilter}>
                <div className={stylesS.btnFilter} onClick={btnFilter}>
                  <Image src={"/Filter.svg"} width={23} height={23} />
                  <p>Filter</p>
                </div>
                {activeDropdownFilter && (
                  <div
                    className={stylesS.wrapperSelectStatus}
                    onClick={() => setActiveDropdownFilter(false)}
                  >
                    {filter.map((item) => (
                      <p key={item.id} onClick={item.onclick}>
                        {item.status}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className={stylesS.wrapperFilterTahun} ref={menuRefTahun}>
                <div
                  className={stylesS.btnFilterTahun}
                  onClick={() => {
                    year.length == 0
                      ? openModal()
                      : setActiveDropdownTahun(!activeDropdownTahun);
                  }}
                >
                  <Image src={"/TahunIcon.svg"} width={23} height={23} />
                  <p>Tahun</p>
                </div>
                {activeDropdownTahun && (
                  <div
                    className={stylesS.wrapperSelectFilterTahun}
                    onClick={() => setActiveDropdownTahun(false)}
                  >
                    {year.map((item) => (
                      <p key={item.nip} onClick={item.onclick}>
                        {item.tahun}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={custom}
                contentLabel="Example Modal"
                className={styles.modal}
              >
                <h2 className={styles.headerPesan}>Pesan</h2>
                <h2 className={styles.dialogPesan}>
                  Silahkan pilih Filter terlebih dahulu
                </h2>
              </Modal>
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
                    <TableCell width={500} style={styleHeader}>
                      Profil
                    </TableCell>
                    <TableCell width={500} style={styleHeader}>
                      Tupoksi
                    </TableCell>
                    <TableCell width={500} style={styleHeader}>
                      Rencana
                    </TableCell>
                    <TableCell width={500} style={styleHeader}>
                      Status
                    </TableCell>
                    <TableCell width={500} style={styleHeader}>
                      Keterangan
                    </TableCell>
                    {/* <TableCell width={500} style={styleHeader}>
                      Diajukan
                    </TableCell> */}
                    <TableCell width={500} style={styleHeader}>
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
