import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  BoxNotification,
  DashboardHeader,
  Gap,
  Sidebar,
  TopPegawai,
} from "../../../KasubagComponent";
import styles from "./dashboard.module.css";
import sidebarStyles from "../../../KasubagComponent/SidebarStaff/sidebar.module.css";
import Axios from "axios";
import moment from "moment";

Axios.defaults.withCredentials = true;

export default function Dashboard() {
  const UserData = [
    {
      id: 1,
      hasil_kinerja: 70,
      bulan: "Januari",
    },
    {
      id: 2,
      hasil_kinerja: 80,
      bulan: "Februari",
    },
    {
      id: 3,
      hasil_kinerja: 50,
      bulan: "Maret",
    },
    {
      id: 4,
      hasil_kinerja: 40,
      bulan: "April",
    },
    {
      id: 5,
      hasil_kinerja: 70,
      bulan: "Mei",
    },
    {
      id: 6,
      hasil_kinerja: 90,
      bulan: "Juni",
    },
    {
      id: 7,
      hasil_kinerja: 100,
      bulan: "Juli",
    },
    {
      id: 8,
      hasil_kinerja: 70,
      bulan: "Agustus",
    },
    {
      id: 9,
      hasil_kinerja: 80,
      bulan: "September",
    },
    {
      id: 10,
      hasil_kinerja: 90,
      bulan: "Oktober",
    },
    {
      id: 11,
      hasil_kinerja: 100,
      bulan: "November",
    },
    {
      id: 12,
      hasil_kinerja: 70,
      bulan: "Desember",
    },
  ];

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      setPrevMonth(moment().subtract(1, "month").format("MMMM YYYY"));

      Axios.get("http://localhost:3001/masuk").then((response) => {
        console.log(response.data.user[0].nip);
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
      });

      //AMBIL CAKIN JUMLAH KEGIATAN
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/jumlahKegiatan").then(
          (jumlahKegiatan) => {
            jumlahKegiatan.data.map((jumlahKegiatanMAP) => {
              if (
                moment().format("YYYY-MM") >=
                  moment(jumlahKegiatanMAP.start_date).format("YYYY-MM") &&
                moment().format("YYYY-MM") ===
                  moment(jumlahKegiatanMAP.end_date).format("YYYY-MM") &&
                masuk.data.user[0].sub_bidang === jumlahKegiatanMAP.sub_bidang
              ) {
                // console.log(ambilRenaksiMAP);
                setJlhKegiatan((nextData) => {
                  return [...nextData, jumlahKegiatanMAP];
                });
              }
            });
          }
        );
      });

      //AMBIL CAKIN LAMPIRAN DISUBMIT
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/lampiranDisubmit").then(
          (lampiranDisubmit) => {
            lampiranDisubmit.data.map((lampiranDisubmitMAP) => {
              if (
                moment().format("YYYY-MM") >=
                  moment(lampiranDisubmitMAP.start_date).format("YYYY-MM") &&
                moment().format("YYYY-MM") ===
                  moment(lampiranDisubmitMAP.end_date).format("YYYY-MM") &&
                masuk.data.user[0].sub_bidang === lampiranDisubmitMAP.sub_bidang
              ) {
                // console.log(ambilRenaksiMAP);
                setLprSubmit((nextData) => {
                  return [...nextData, lampiranDisubmitMAP];
                });
              }
            });
          }
        );
      });

      //AMBIL CAKIN BELUM DISUBMIT
      Axios.get("http://localhost:3001/masuk").then((masuk) => {
        Axios.get("http://localhost:3001/belumSubmit").then((belumSubmit) => {
          belumSubmit.data.map((belumSubmitMAP) => {
            if (
              moment().format("YYYY-MM") >=
                moment(belumSubmitMAP.start_date).format("YYYY-MM") &&
              moment().format("YYYY-MM") ===
                moment(belumSubmitMAP.end_date).format("YYYY-MM") &&
              masuk.data.user[0].sub_bidang === belumSubmitMAP.sub_bidang
            ) {
              // console.log(ambilRenaksiMAP);
              setBlmSubmit((nextData) => {
                return [...nextData, belumSubmitMAP];
              });
            }
          });
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
  const [jlhKegiatan, setJlhKegiatan] = useState([]);
  const [lprSubmit, setLprSubmit] = useState([]);
  const [blmSubmit, setBlmSubmit] = useState([]);
  const [prevMonth, setPrevMonth] = useState("");

  const userData = {
    labels: UserData.map((data) => data.bulan),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: UserData.map((data) => data.hasil_kinerja),
        backgroundColor: ["#1bddbb"],
        borderRadius: 10,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Sidebar kotakHome={sidebarStyles.kotakAktif} />
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
