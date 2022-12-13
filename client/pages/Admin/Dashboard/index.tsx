import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  BoxNotification,
  DashboardHeader,
  Gap,
} from "../../../components";
import styles from "./dashboard.module.css";
import sidebarStyles from "../../../AdminComponent/SidebarAdmin/sidebar.module.css";
import Axios from "axios";
import moment from "moment";
import { SidebarAdmin, TopPegawai } from "../../../AdminComponent";

Axios.defaults.withCredentials = true;

export default function Dashboard() {
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      let infoBulan: string;

      setPrevMonth(moment().subtract(1, "month").format("MMMM YYYY"));

      Axios.get("http://localhost:3001/pegawai").then((ambilPegawai) => {
        let kaban;

        ambilPegawai.data.map((pegawai) => {
          if (pegawai.jabatan == "Kaban") {
            kaban = pegawai;
          }
        });

        Axios.get("http://localhost:3001/cakin").then((result) => {
          result.data.map((item) => {
            if (
              kaban.nip === item.nip &&
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
        let bil = [];
        Axios.get("http://localhost:3001/jumlahKegiatan").then(
          (jumlahKegiatan) => {
            jumlahKegiatan.data.map((jumlahKegiatanMAP) => {
              if (
                moment().format("YYYY-MM") >=
                  moment(jumlahKegiatanMAP.start_date).format("YYYY-MM") &&
                moment().format("YYYY-MM") ===
                  moment(jumlahKegiatanMAP.end_date).format("YYYY-MM")
              ) {
                setJlhKegiatan((nextData) => {
                  return [...nextData, jumlahKegiatanMAP];
                });
                bil = [...bil, jumlahKegiatanMAP];
              }
            });
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
                  moment(lampiranDisubmitMAP.end_date).format("YYYY-MM")
              ) {
                // console.log(ambilRenaksiMAP);
                setLprSubmit((nextData) => {
                  return [...nextData, lampiranDisubmitMAP];
                });
                bil = [...bil, lampiranDisubmitMAP];
              }
            });
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
                moment(belumSubmitMAP.end_date).format("YYYY-MM")
            ) {
              // console.log(ambilRenaksiMAP);
              setBlmSubmit((nextData) => {
                return [...nextData, belumSubmitMAP];
              });
              bil = [...bil, belumSubmitMAP];
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
      },
    ],
  };

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);

  return (
    <div className={styles.container}>
      {/* {console.log("Cakin: ", cakin)} */}
      {/* {console.log(nama)} */}
      <SidebarAdmin kotakHome={sidebarStyles.kotakAktif} />
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
        <TopPegawai bulan={prevMonth} title="Top Sub Bidang" />
        <BoxNotification />
      </div>
    </div>
  );
}
