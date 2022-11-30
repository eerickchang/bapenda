import stylesS from "./ContentDaftarKegiatan.module.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import Image from "next/future/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./TableMUI.module.css";

import Axios from "axios";
import { useRouter } from "next/router";
import Gap from "../Gap";


Axios.defaults.withCredentials = true;

function Row(props) {
  const { row, stateChange, subid } = props;

  const filter = [
    {
      id: 1,
      status: "Semua",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksi").then((ambilRenaksi) => {
          ambilRenaksi.data.map((renaksi) => {
            if (renaksi.sub_bidang === subid) {
              stateChange((nextData) => {
                return [renaksi, ...nextData];
              });
            }
          });
        })
      ),
    },
    {
      id: 2,
      status: "Jadwal diubah",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksiJadwalDiubah").then(
          (ambilRenaksi) => {
            ambilRenaksi.data.map((renaksi) => {
              if (renaksi.sub_bidang === subid) {
                stateChange((nextData) => {
                  return [renaksi, ...nextData];
                });
              }
            });
          }
        )
      ),
    },

    {
      id: 3,
      status: "Sementara",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksiSementara").then(
          (ambilRenaksi) => {
            ambilRenaksi.data.map((renaksi) => {
              if (renaksi.sub_bidang === subid) {
                stateChange((nextData) => {
                  return [renaksi, ...nextData];
                });
              }
            });
          }
        )
      ),
    },

    {
      id: 5,
      status: "Selesai",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksiSelesai").then(
          (ambilRenaksi) => {
            ambilRenaksi.data.map((renaksi) => {
              if (renaksi.sub_bidang === subid) {
                stateChange((nextData) => {
                  return [renaksi, ...nextData];
                });
              }
            });
          }
        )
      ),
    },

    {
      id: 6,
      status: "Hapus",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksiDihapus").then(
          (ambilRenaksi) => {
            ambilRenaksi.data.map((renaksi) => {
              if (renaksi.sub_bidang === subid) {
                stateChange((nextData) => {
                  return [renaksi, ...nextData];
                });
              }
            });
          }
        )
      ),
    },

    {
      id: 7,
      status: "Ditambah",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/ambilRenaksiMenunggu").then(
          (ambilRenaksi) => {
            ambilRenaksi.data.map((renaksi) => {
              if (renaksi.sub_bidang === subid) {
                stateChange((nextData) => {
                  return [renaksi, ...nextData];
                });
              }
            });
          }
        )
      ),
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActiveDropdown(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const btnFilter = () => {
    setActiveDropdown(!activeDropdown);
  };
  return (
    <>
      <div className={stylesS.wrapperFilter} ref={menuRef}>
        <div className={stylesS.btnFilter} onClick={btnFilter}>
          <Image src={"/Filter.svg"} width={23} height={23} />
          <p>Filter</p>
        </div>
        {activeDropdown && (
          <div
            className={stylesS.wrapperSelectStatus}
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
      <React.Fragment>
        {row.status != "Selesai" ? (
          <TableRow hover className={styles.styleRow}>
            <div style={{ display: "flex", padding: 30, alignItems: "center" }}>
              {row.foto === "" ? (
                <Image
                  src={"/SidebarProfile.svg"}
                  width={70}
                  height={70}
                  alt="User 2"
                  style={{ borderRadius: 150 }}
                />
              ) : (
                <Image
                  src={row.foto}
                  width={70}
                  height={70}
                  alt="User 2"
                  style={{ borderRadius: 150 }}
                />
              )}
              {/* //!{ambil data} */}
              <div style={{ marginLeft: 20 }}>
                <p className={stylesS.rekanNama}>{row.nama}</p>
                <p className={stylesS.rekanPegawai}>{row.jabatan}</p>
                <p className={stylesS.rekanAsn}>ASN</p>
              </div>
            </div>
            <TableCell>
              <p className={stylesS.styleTxtRowBS}>{row.program}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRowBS}>{row.kegiatan}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRowBS}>{row.sub_kegiatan}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTupoksiBS}>Inti</p>
              <p className={stylesS.styleTxtRowBS}>{row.tupoksi_inti}</p>
              <p className={stylesS.styleTupoksiTambahanBS}>Tambahan</p>
              <p className={stylesS.styleTxtRowBS}>{row.tupoksi_tambahan}</p>
            </TableCell>
            <TableCell>
              {/* ambil data rencana */}
              <p className={stylesS.styleTxtRowRencanaBS}>
                {moment(row.start_date).format("MMM")} -{" "}
                {moment(row.end_date).format("MMM")}
              </p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRowBS}>{row.status}</p>
            </TableCell>
          </TableRow>
        ) : (
          <TableRow hover className={styles.styleRow}>
            <div style={{ display: "flex", padding: 30, alignItems: "center" }}>
              {row.foto === "" ? (
                <Image
                  src={"/SidebarProfile.svg"}
                  width={70}
                  height={70}
                  alt="User 2"
                  style={{ borderRadius: 150 }}
                />
              ) : (
                <Image
                  src={row.foto}
                  width={70}
                  height={70}
                  alt="User 2"
                  style={{ borderRadius: 150 }}
                />
              )}
              {/* //!{ambil data} */}
              <div style={{ marginLeft: 20 }}>
                <p className={stylesS.rekanNama}>{row.nama}</p>
                <p className={stylesS.rekanPegawai}>{row.jabatan}</p>
                <p className={stylesS.rekanAsn}>ASN</p>
              </div>
            </div>
            <TableCell>
              <p className={stylesS.styleTxtRow}>{row.program}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRow}>{row.kegiatan}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRow}>{row.sub_kegiatan}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTupoksi}>Inti</p>
              <p className={stylesS.styleTxtRow}>{row.tupoksi_inti}</p>
              <p className={stylesS.styleTupoksiTambahan}>Tambahan</p>
              <p className={stylesS.styleTxtRow}>{row.tupoksi_tambahan}</p>
            </TableCell>
            <TableCell>
              {/* ambil data rencana */}
              <p className={stylesS.styleTxtRowRencana}>
                {moment(row.start_date).format("MMM")} -{" "}
                {moment(row.end_date).format("MMM")}
              </p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRow}>{row.status}</p>
            </TableCell>
          </TableRow>
        )}
      </React.Fragment>
    </>
  );
}

export default function CDaftarKegiatanSubid() {
  const router = useRouter();
  const [domLoaded, setDomLoaded] = useState(false);
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [pegawai, setPegawai] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (!router.isReady) return;
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      Axios.get("http://localhost:3001/ambilRenaksi").then((ambilRenaksi) => {
        ambilRenaksi.data.map((renaksi) => {
          if (
            renaksi.sub_bidang === router.query.subid &&
            moment(renaksi.end_date).format("YYYY") === moment().format("YYYY")
          ) {
            setPegawai((nextData) => {
              return [renaksi, ...nextData];
            });
          }
        });
      });
    }
  }, [router.query, router.isReady]);

  const clickBack = () => {
    router.push("/Kaban/DaftarKegiatan");
  };

  const styleHeader = {
    fontFamily: "Poppins",
    fontSize: 21,
    fontWeight: 600,
    color: "rgba(149, 149, 149, 1)",
  };

  const styleContainer = {
    paddingLeft: 50,
    paddingRight: 40,
    zIndex: 99,
    paddingBottom: 30,
  };
  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitle}>
              <Image
                style={{ cursor: "pointer" }}
                onClick={clickBack}
                src={"/Back.svg"}
                width={50}
                height={50}
              />
              <div style={{ marginTop: 10 }}>
                <Image src={"/DaftarKegiatan2.svg"} width={40} height={40} />
              </div>
              <p style={{ marginLeft: 10 }}>DAFTAR KEGIATAN</p>
            </div>
            <Gap height={100} width={0} />
          </div>
          <Gap height={106} width={0} />
          <TableContainer style={styleContainer}>
            <Table sx={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={styleHeader}>Profile</TableCell>
                  <TableCell sx={styleHeader}>Program</TableCell>
                  <TableCell sx={styleHeader}>Kegiatan</TableCell>
                  <TableCell sx={styleHeader}>Sub Kegiatan</TableCell>
                  <TableCell sx={styleHeader}>Tupoksi</TableCell>
                  <TableCell sx={styleHeader}>Rencana</TableCell>
                  <TableCell sx={styleHeader}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pegawai.map((row) => (
                  <Row
                    key={row.nip}
                    row={row}
                    stateChange={setPegawai}
                    subid={router.query.subid}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}
