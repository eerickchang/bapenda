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
import sidebarStyles from "../../../components/SidebarStaff/sidebar.module.css";
import Axios from "axios";
import moment from "moment";

Axios.defaults.withCredentials = true;

export default function Dashboard() {
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      Axios.get("http://localhost:3001/masuk").then((response) => {
        setNama(response.data.user[0].nama);
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

          result.data.map((data) => {
            if (
              response.data.user[0].nip === data.nip &&
              moment(data.bulan).format("YYYY-MM") ===
                moment().format("YYYY-MM")
            ) {
              setCakin(data);
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

  return (
    <div className={styles.container}>
      {/* {console.log("Cakin: ", cakin)} */}
      {/* {console.log(nama)} */}
      <SidebarStaff kotakHome={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <div className={styles.contentKiri}>
        <DashboardHeader
          blnSkrg={blnSkrg}
          jumlahKegiatan={cakin.jumlah_kegiatan}
          lampiranDisubmit={cakin.lampiran_disubmit}
          belumDisubmit={cakin.lampiran_bsubmit}
        />
        <div className={styles.chartWrapper}>
          <h1 className={styles.headerChart}>Grafik Kinerja Tahun {thnSkrg}</h1>
          <BarChart chartData={userData} />
        </div>
      </div>
      <div className={styles.contentKanan}>
        <button onClick={() => console.log(grafik)}>Click</button>
        <TopPegawai />
        <BoxNotification />
      </div>
    </div>
  );
}
