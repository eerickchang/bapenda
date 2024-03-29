import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  BoxNotification,
  DashboardHeader,
  Gap,
  SidebarStaff,
  TopPegawai,
} from "../../../componentsTHL";
import styles from "./dashboard.module.css";
import sidebarStyles from "../../../componentsTHL/SidebarStaff/sidebar.module.css";
import Axios from "axios";
import moment from "moment";

Axios.defaults.withCredentials = true;

export default function Dashboard() {
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      let infoBulan;
      setPrevMonth(moment().subtract(1, "month").format("MMMM YYYY"));

      Axios.get("http://localhost:3001/masuk").then((response) => {
        setSubid(response.data.user[0].sub_bidang);
        Axios.get("http://localhost:3001/cakin").then((result) => {
          result.data.map((item) => {
            if (
              response.data.user[0].nip === item.nip &&
              moment(item.bulan).format("YYYY") === moment().format("YYYY")
            ) {
              setGrafik((nextData) => {
                return [...nextData, item];
              });
            }
          });
        });

        Axios.get("http://localhost:3001/createRowCakin").then((cakin) => {
          cakin.data.map((ambilCakin) => {
            if (
              moment(ambilCakin.bulan).format("YYYY") ==
                moment().format(`YYYY`) &&
              ambilCakin.nip == response.data.user[0].nip
            ) {
              infoBulan = "Yes";
            }
          });

          if (infoBulan == "Yes") {
            null;
          } else {
            Axios.post("http://localhost:3001/addBulanCakin", {
              nip: response.data.user[0].nip,
            });
          }
        });
      });

      //AMBIL CAKIN JUMLAH KEGIATAN
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        let bil = [];
        Axios.get("http://localhost:3001/jumlahKegiatan").then(
          (jumlahKegiatan) => {
            jumlahKegiatan.data.map((jumlahKegiatanMAP) => {
              if (
                moment().format("YYYY-MM") >=
                  moment(jumlahKegiatanMAP.start_date).format("YYYY-MM") &&
                moment().format("YYYY-MM") ===
                  moment(jumlahKegiatanMAP.end_date).format("YYYY-MM") &&
                masuk.data.user[0].nip === jumlahKegiatanMAP.thl
              ) {
                // console.log(ambilRenaksiMAP);
                setJlhKegiatan((nextData) => {
                  return [...nextData, jumlahKegiatanMAP];
                });
                bil = [...bil, jumlahKegiatanMAP];
              }
            });

            //INPUT JUMLAH KEGIATAN BULAN INI KE DATABASE
            setTimeout(() => {
              Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
                ambilCakin.data.map((cakin) => {
                  if (
                    moment(cakin.bulan).format("YYYY-MM") ==
                      moment().format("YYYY-MM") &&
                    cakin.nip == masuk.data.user[0].nip
                  ) {
                    if (cakin.jumlah_kegiatan != bil.length) {
                      Axios.post("http://localhost:3001/addJumlahKegiatan", {
                        nip: masuk.data.user[0].nip,
                        bulan: moment().format("YYYY-MM-01"),
                        jumlah: bil.length,
                      });
                    } else {
                      null;
                    }
                  }
                });
              });
            }, 100);
          }
        );
      });

      //AMBIL CAKIN LAMPIRAN DISUBMIT
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        let bil = [];
        Axios.get("http://localhost:3001/lampiranDisubmit").then(
          (lampiranDisubmit) => {
            lampiranDisubmit.data.map((lampiranDisubmitMAP) => {
              if (
                moment().format("YYYY-MM") >=
                  moment(lampiranDisubmitMAP.start_date).format("YYYY-MM") &&
                moment().format("YYYY-MM") ===
                  moment(lampiranDisubmitMAP.end_date).format("YYYY-MM") &&
                masuk.data.user[0].nip === lampiranDisubmitMAP.thl
              ) {
                // console.log(ambilRenaksiMAP);
                setLprSubmit((nextData) => {
                  return [...nextData, lampiranDisubmitMAP];
                });
                bil = [...bil, lampiranDisubmitMAP];
              }
            });

            //INPUT LAMPIRAN DISUBMIT BULAN INI KE DATABASE
            setTimeout(() => {
              Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
                ambilCakin.data.map((cakin) => {
                  if (
                    moment(cakin.bulan).format("YYYY-MM") ==
                      moment().format("YYYY-MM") &&
                    cakin.nip == masuk.data.user[0].nip
                  ) {
                    if (cakin.lampiran_disubmit != bil.length) {
                      Axios.post("http://localhost:3001/addKegiatanS", {
                        nip: masuk.data.user[0].nip,
                        bulan: moment().format("YYYY-MM-01"),
                        jumlah: bil.length,
                      });
                    } else {
                      null;
                    }
                  }
                });
              });
            }, 100);
          }
        );
      });

      //AMBIL CAKIN BELUM DISUBMIT
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        let bil = [];
        Axios.get("http://localhost:3001/belumSubmit").then((belumSubmit) => {
          belumSubmit.data.map((belumSubmitMAP) => {
            if (
              moment().format("YYYY-MM") >=
                moment(belumSubmitMAP.start_date).format("YYYY-MM") &&
              moment().format("YYYY-MM") ===
                moment(belumSubmitMAP.end_date).format("YYYY-MM") &&
              masuk.data.user[0].nip === belumSubmitMAP.thl
            ) {
              // console.log(ambilRenaksiMAP);
              setBlmSubmit((nextData) => {
                return [...nextData, belumSubmitMAP];
              });
              bil = [...bil, belumSubmitMAP];
            }
          });

          //INPUT LAMPIRAN BELUM SUBMIT BULAN INI KE DATABASE
          setTimeout(() => {
            Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
              ambilCakin.data.map((cakin) => {
                if (
                  moment(cakin.bulan).format("YYYY-MM") ==
                    moment().format("YYYY-MM") &&
                  cakin.nip == masuk.data.user[0].nip
                ) {
                  if (cakin.lampiran_bsubmit != bil.length) {
                    Axios.post("http://localhost:3001/addKegiatanBS", {
                      nip: masuk.data.user[0].nip,
                      bulan: moment().format("YYYY-MM-01"),
                      jumlah: bil.length,
                    });
                  } else {
                    null;
                  }
                }
              });
            });
          }, 100);
        });
      });

      setBlnSkrg(moment().format("MMMM"));
      setThnSkrg(moment().format("YYYY"));
    }
  }, []);

  let [blnSkrg, setBlnSkrg] = useState("");
  let [thnSkrg, setThnSkrg] = useState("");
  const [nama, setNama] = useState();
  const [grafik, setGrafik] = useState([]);
  const [cakin, setCakin] = useState([]);
  const [subid, setSubid] = useState("");
  const [jlhKegiatan, setJlhKegiatan] = useState([]);
  const [lprSubmit, setLprSubmit] = useState([]);
  const [blmSubmit, setBlmSubmit] = useState([]);
  const [prevMonth, setPrevMonth] = useState("");

  const UserData = [
    {
      id: 1,
      kinerja: 90,
      bulan: "Januari",
    },
    {
      id: 2,
      kinerja: 70,
      bulan: "Februari",
    },
    {
      id: 3,
      kinerja: 80,
      bulan: "Maret",
    },
    {
      id: 4,
      kinerja: 70,
      bulan: "April",
    },
    {
      id: 5,
      kinerja: 60,
      bulan: "Mei",
    },
    {
      id: 6,
      kinerja: 90,
      bulan: "Juni",
    },
    {
      id: 7,
      kinerja: 100,
      bulan: "Juli",
    },
    {
      id: 8,
      kinerja: 80,
      bulan: "Agustus",
    },
    {
      id: 9,
      kinerja: 70,
      bulan: "September",
    },
    {
      id: 10,
      kinerja: 80,
      bulan: "Oktober",
    },
    {
      id: 11,
      kinerja: 70,
      bulan: "November",
    },
    {
      id: 12,
      kinerja: 100,
      bulan: "Desember",
    },
  ];

  const userData = {
    labels: UserData?.map((data) => data.bulan),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafik?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#1bddbb"],
        borderRadius: 10,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <SidebarStaff kotakHome={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <div className={styles.contentKiri}>
        <DashboardHeader
          blnSkrg={blnSkrg}
          jumlahKegiatan={jlhKegiatan.length}
          lampiranDisubmit={lprSubmit.length}
          belumDisubmit={blmSubmit.length}
        />
        <div className={styles.chartWrapper}>
          <h1 className={styles.headerChart}>Grafik Kinerja Tahun {thnSkrg}</h1>
          <BarChart chartData={userData} />
        </div>
      </div>
      <div className={styles.contentKanan}>
        <TopPegawai bulan={prevMonth} title="Top Pegawai" />
        <BoxNotification />
      </div>
    </div>
  );
}
