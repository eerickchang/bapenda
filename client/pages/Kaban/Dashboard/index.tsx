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
      Axios.get("http://localhost:3001/jumlahKegiatan").then(
        (jumlahKegiatan) => {
          jumlahKegiatan.data.map((jumlahKegiatanMAP) => {
            if (
              moment().format("YYYY-MM") >=
                moment(jumlahKegiatanMAP.start_date).format("YYYY-MM") &&
              moment().format("YYYY-MM") ===
                moment(jumlahKegiatanMAP.end_date).format("YYYY-MM")
            ) {
              // console.log(ambilRenaksiMAP);
              setJlhKegiatan((nextData) => {
                return [...nextData, jumlahKegiatanMAP];
              });
            }
          });
        }
      );

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

  const userData = {
    labels: grafik?.map((data) => moment(data.bulan).format("MMMM")),
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

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);

  const filter = [
    {
      id: 1,
      sub: "Semua",
    },
    {
      id: 2,
      sub: "Bidang",
    },
    {
      id: 3,
      sub: "Sub Bidang",
    },
  ];
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
          <div className={styles.wrapperFilterTahun}>
            <div
              className={styles.btnFilterTahun}
              onClick={() => setActiveDropdownTahun(!activeDropdownTahun)}
            >
              <Image src={"/Filter.svg"} width={23} height={23} />
              <p>Filter</p>
            </div>
            {activeDropdownTahun && (
              <div
                className={styles.wrapperSelectFilterTahun}
                onClick={() => setActiveDropdownTahun(false)}
              >
                {filter.map((item) => (
                  <p key={item.id}>{item.sub}</p>
                ))}
              </div>
            )}
          </div>
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
