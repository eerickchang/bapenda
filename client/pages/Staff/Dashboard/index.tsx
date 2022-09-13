import React, { useState, useEffect } from "react";
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
// import { UserData } from "../../components/Data";

export default function Dashboard() {
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      // console.log(response.data.user[0].nama);
      console.log(response.data);
      setNama(response.data.user[0].nama);
      // console.log(nama);
      Axios.get("http://localhost:3001/cakin").then((result) => {
        // console.log(result.data);
        result.data.map((data) => {
          if (response.data.user[0].nip === data.nip) {
          }
        });
      });
    });

    let tahunSkrg = moment().format("YYYY");
    setTahunSkrg(tahunSkrg);
  }, []);

  const [nama, setNama] = useState();
  const [tahunSkrg, setTahunSkrg] = useState("");
  const [cakin, setCakin] = useState([]);
  const [dataUser, setDataUser] = useState([
    {
      id: 1,
      year: 2016,
      userGain: 10,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 20,
      userLost: 423,
    },
    {
      id: 3,
      year: 2018,
      userGain: 60,
      userLost: 1200,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90,
      userLost: 588,
    },
    {
      id: 5,
      year: 2020,
      userGain: 40,
      userLost: 678,
    },
    {
      id: 6,
      year: 2021,
      userGain: 70,
      userLost: 678,
    },
    {
      id: 7,
      year: 2022,
      userGain: 70,
      userLost: 678,
    },
    {
      id: 8,
      year: 2023,
      userGain: 80,
      userLost: 678,
    },
    {
      id: 9,
      year: 2024,
      userGain: 50,
      userLost: 678,
    },
    {
      id: 10,
      year: 2025,
      userGain: 95,
      userLost: 678,
    },
    {
      id: 11,
      year: 2026,
      userGain: 55,
      userLost: 678,
    },
    {
      id: 12,
      year: 2027,
      userGain: 67,
      userLost: 678,
    },
  ]);

  const [userData, setUserData] = useState({
    labels: dataUser.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: dataUser.map((data) => data.userGain),
        backgroundColor: ["#1bddbb"],
        borderRadius: 10,
        // hoverBackgroundColor: ["#112350"],
      },
    ],
  });

  return (
    <div className={styles.container}>
      {/* {console.log("Cakin: ", cakin)} */}
      {/* {console.log(nama)} */}
      <SidebarStaff kotakHome={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <div className={styles.contentKiri}>
        <DashboardHeader />
        <div className={styles.chartWrapper}>
          <h1 className={styles.headerChart}>
            Grafik Kinerja Tahun {tahunSkrg}
          </h1>
          <BarChart chartData={userData} />
        </div>
      </div>
      <div className={styles.contentKanan}>
        <TopPegawai />
        <BoxNotification />
      </div>
    </div>
  );
}
