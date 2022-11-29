import stylesS from "./ContentDaftarkegiatan.module.css";

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
  const { row, stateChange } = props;

  const filter = [
    {
      id: 1,
      status: "Semua",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/masuk").then((masuk) => {
          Axios.get("http://localhost:3001/ambilKasubid").then(
            (ambilKasubid) => {
              Axios.get("http://localhost:3001/ambilRenaksi").then(
                (ambilRenaksi) => {
                  let bidangUserSDKabid = [];
                  let pegawaiYgAdaRenaksi = [];
                  let userLoggedIn = masuk.data.user;
                  let kasubid = ambilKasubid.data;
                  let renaksi = ambilRenaksi.data;

                  bidangUserSDKabid = kasubid.filter((elA) => {
                    return userLoggedIn.some(
                      (elB) => elA["bidang"] === elB["bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi = renaksi.filter((elA) => {
                    return bidangUserSDKabid.some(
                      (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi.map((item) => {
                    stateChange((nextData) => {
                      return [item, ...nextData];
                    });
                  });
                }
              );
            }
          );
        })
      ),
    },
    {
      id: 2,
      status: "Jadwal diubah",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/masuk").then((masuk) => {
          Axios.get("http://localhost:3001/ambilKasubid").then(
            (ambilKasubid) => {
              Axios.get("http://localhost:3001/ambilRenaksiJadwalDiubah").then(
                (ambilRenaksi) => {
                  let bidangUserSDKabid = [];
                  let pegawaiYgAdaRenaksi = [];
                  let userLoggedIn = masuk.data.user;
                  let kasubid = ambilKasubid.data;
                  let renaksi = ambilRenaksi.data;

                  bidangUserSDKabid = kasubid.filter((elA) => {
                    return userLoggedIn.some(
                      (elB) => elA["bidang"] === elB["bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi = renaksi.filter((elA) => {
                    return bidangUserSDKabid.some(
                      (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi.map((item) => {
                    stateChange((nextData) => {
                      return [item, ...nextData];
                    });
                  });
                }
              );
            }
          );
        })
      ),
    },

    {
      id: 3,
      status: "Sementara",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/masuk").then((masuk) => {
          Axios.get("http://localhost:3001/ambilKasubid").then(
            (ambilKasubid) => {
              Axios.get("http://localhost:3001/ambilRenaksiSementara").then(
                (ambilRenaksi) => {
                  let bidangUserSDKabid = [];
                  let pegawaiYgAdaRenaksi = [];
                  let userLoggedIn = masuk.data.user;
                  let kasubid = ambilKasubid.data;
                  let renaksi = ambilRenaksi.data;

                  bidangUserSDKabid = kasubid.filter((elA) => {
                    return userLoggedIn.some(
                      (elB) => elA["bidang"] === elB["bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi = renaksi.filter((elA) => {
                    return bidangUserSDKabid.some(
                      (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi.map((item) => {
                    stateChange((nextData) => {
                      return [item, ...nextData];
                    });
                  });
                }
              );
            }
          );
        })
      ),
    },

    {
      id: 5,
      status: "Selesai",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/masuk").then((masuk) => {
          Axios.get("http://localhost:3001/ambilKasubid").then(
            (ambilKasubid) => {
              Axios.get("http://localhost:3001/ambilRenaksiSelesai").then(
                (ambilRenaksi) => {
                  let bidangUserSDKabid = [];
                  let pegawaiYgAdaRenaksi = [];
                  let userLoggedIn = masuk.data.user;
                  let kasubid = ambilKasubid.data;
                  let renaksi = ambilRenaksi.data;

                  bidangUserSDKabid = kasubid.filter((elA) => {
                    return userLoggedIn.some(
                      (elB) => elA["bidang"] === elB["bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi = renaksi.filter((elA) => {
                    return bidangUserSDKabid.some(
                      (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi.map((item) => {
                    stateChange((nextData) => {
                      return [item, ...nextData];
                    });
                  });
                }
              );
            }
          );
        })
      ),
    },

    {
      id: 6,
      status: "Hapus",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/masuk").then((masuk) => {
          Axios.get("http://localhost:3001/ambilKasubid").then(
            (ambilKasubid) => {
              Axios.get("http://localhost:3001/ambilRenaksiDihapus").then(
                (ambilRenaksi) => {
                  let bidangUserSDKabid = [];
                  let pegawaiYgAdaRenaksi = [];
                  let userLoggedIn = masuk.data.user;
                  let kasubid = ambilKasubid.data;
                  let renaksi = ambilRenaksi.data;

                  bidangUserSDKabid = kasubid.filter((elA) => {
                    return userLoggedIn.some(
                      (elB) => elA["bidang"] === elB["bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi = renaksi.filter((elA) => {
                    return bidangUserSDKabid.some(
                      (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi.map((item) => {
                    stateChange((nextData) => {
                      return [item, ...nextData];
                    });
                  });
                }
              );
            }
          );
        })
      ),
    },

    {
      id: 7,
      status: "Ditambah",
      onclick: () => (
        stateChange([]),
        Axios.get("http://localhost:3001/masuk").then((masuk) => {
          Axios.get("http://localhost:3001/ambilKasubid").then(
            (ambilKasubid) => {
              Axios.get("http://localhost:3001/ambilRenaksiMenunggu").then(
                (ambilRenaksi) => {
                  let bidangUserSDKabid = [];
                  let pegawaiYgAdaRenaksi = [];
                  let userLoggedIn = masuk.data.user;
                  let kasubid = ambilKasubid.data;
                  let renaksi = ambilRenaksi.data;

                  bidangUserSDKabid = kasubid.filter((elA) => {
                    return userLoggedIn.some(
                      (elB) => elA["bidang"] === elB["bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi = renaksi.filter((elA) => {
                    return bidangUserSDKabid.some(
                      (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                    );
                  });

                  pegawaiYgAdaRenaksi.map((item) => {
                    stateChange((nextData) => {
                      return [item, ...nextData];
                    });
                  });
                }
              );
            }
          );
        })
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
    // console.log(dataRenaksi);
  };

  const styleTxtRowBS = {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 400,
    color: "rgba(233, 0, 95, 1)",
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
            <TableCell>
              <div
                style={{ display: "flex", padding: 10, alignItems: "center" }}
              >
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
                <div style={{ marginLeft: 10 }}>
                  <p className={stylesS.rekanNama}>{row.nama}</p>
                  <p className={stylesS.rekanPegawai}>{row.jabatan}</p>
                  <p className={stylesS.rekanAsn}>ASN</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <p style={styleTxtRowBS}>{row.program}</p>
            </TableCell>
            <TableCell>
              <p style={styleTxtRowBS}>{row.kegiatan}</p>
            </TableCell>
            <TableCell>
              <p style={styleTxtRowBS}>{row.sub_kegiatan}</p>
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
            <div style={{ display: "flex", padding: 10, alignItems: "center" }}>
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
              <div style={{ marginLeft: 10 }}>
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

export default function ContentDaftarKegiatan() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [pegawai, setPegawai] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/ambilKasubid").then((ambilKasubid) => {
          Axios.get("http://localhost:3001/ambilRenaksi").then(
            (ambilRenaksi) => {
              let bidangUserSDKabid = [];
              let pegawaiYgAdaRenaksi = [];
              let userLoggedIn = masuk.data.user;
              let kasubid = ambilKasubid.data;
              let renaksi = ambilRenaksi.data;
              console.log("User Logged In: ", userLoggedIn);
              console.log("Kasubid: ", kasubid);
              console.log("Renaksi: ", renaksi);

              bidangUserSDKabid = kasubid.filter((elA) => {
                return userLoggedIn.some(
                  (elB) => elA["bidang"] === elB["bidang"]
                );
              });

              pegawaiYgAdaRenaksi = renaksi.filter((elA) => {
                return bidangUserSDKabid.some(
                  (elB) => elA["sub_bidang"] === elB["sub_bidang"]
                );
              });

              pegawaiYgAdaRenaksi.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") ===
                  moment().format("YYYY")
                ) {
                  setPegawai((nextData) => {
                    return [item, ...nextData];
                  });
                }
              });

              console.log("Bidang Sama: ", bidangUserSDKabid);
              console.log("Pegawai Ada Renaksi: ", pegawaiYgAdaRenaksi);
            }
          );
        });
      });
    }
  }, []);

  const router = useRouter();

  const styleHeader = {
    fontFamily: "Poppins",
    fontSize: 22,
    fontWeight: 600,
    color: "rgba(149, 149, 149, 1)",
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.wrapperTitle}>
            <Image src={"/DaftarKegiatan2.svg"} width={50} height={50} />
            <p style={{ marginLeft: 10 }}>DAFTAR KEGIATAN</p>
          </div>
          <Gap height={146} width={0} />
          <TableContainer style={{ paddingLeft: 50, paddingRight: 40 }}>
            <Table sx={{ tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell style={styleHeader}>Profile</TableCell>
                  <TableCell style={styleHeader}>Program</TableCell>
                  <TableCell style={styleHeader}>Kegiatan</TableCell>
                  <TableCell style={styleHeader}>Sub Kegiatan</TableCell>
                  <TableCell style={styleHeader}>Tupoksi</TableCell>
                  <TableCell style={styleHeader}>Rencana</TableCell>
                  <TableCell style={styleHeader}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pegawai.map((row) => (
                  <Row key={row.nip} row={row} stateChange={setPegawai} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}
