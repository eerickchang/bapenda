import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  BoxNotification,
  DashboardHeader,
  Gap,
  SidebarStaff,
  TopPegawai,
} from "../../../components";
import styles from "./dashboard.module.css";
import sidebarStyles from "../../../KabanComponent/SidebarAdmin/sidebar.module.css";
import Axios from "axios";
import moment from "moment";
import Image from "next/image";
import { SidebarAdmin } from "../../../KabanComponent";

Axios.defaults.withCredentials = true;

export default function Dashboard() {
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      let infoBulan: string;

      setPrevMonth(moment().subtract(1, "month").format("MMMM YYYY"));

      Axios.get("http://localhost:3001/masuk").then((response) => {
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
                  moment(jumlahKegiatanMAP.end_date).format("YYYY-MM")
              ) {
                setJlhKegiatan((nextData) => {
                  return [...nextData, jumlahKegiatanMAP];
                });
                bil = [...bil, jumlahKegiatanMAP];
              }
            });

            console.log(bil.length);

            //INPUT JUMLAH KEGIATAN BULAN INI KE DB
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
          }
        );
      });

      //AMBIL CAKIN LAMPIRAN DISUBMIT
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
            }
          });
        }
      );

      //AMBIL CAKIN BELUM DISUBMIT
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
          }
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
      bulan: "Jan",
    },
    {
      id: 2,
      kinerja: 70,
      bulan: "Feb",
    },
    {
      id: 3,
      kinerja: 80,
      bulan: "Mar",
    },
    {
      id: 4,
      kinerja: 60,
      bulan: "Apr",
    },
    {
      id: 5,
      kinerja: 85,
      bulan: "Mei",
    },
    {
      id: 6,
      kinerja: 100,
      bulan: "Jun",
    },
    {
      id: 7,
      kinerja: 80,
      bulan: "Jul",
    },
    {
      id: 8,
      kinerja: 90,
      bulan: "Agu",
    },
    {
      id: 9,
      kinerja: 100,
      bulan: "Sep",
    },
    {
      id: 10,
      kinerja: 80,
      bulan: "Okt",
    },
  ];

  const userData = {
    labels: UserData?.map((data) => data.bulan),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: UserData?.map((data) => data.kinerja),
        backgroundColor: ["#1bddbb"],
        borderRadius: 10,

        // hoverBackgroundColor: ["#112350"],
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
