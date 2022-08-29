import React, { useState, useEffect } from "react";
import {
  BarChart,
  BoxNotification,
  DashboardHeader,
  Gap,
  Sidebar,
  TopPegawai,
} from "../../components";
import styles from "./dashboard.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";
import Axios from "axios";
import { UserData } from "../../components/Data";

export default function Dashboard() {
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/masuk").then((response) => {
  //     console.log(response.data.user[0]);
  //   });
  // }, []);

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#1bddbb"],
        borderRadius: 10,
        // hoverBackgroundColor: ["#112350"],\
      },
    ],
  });

  return (
    <div className={styles.container}>
      <Sidebar kotakHome={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <div className={styles.contentKiri}>
        <DashboardHeader />
        <div className={styles.chartWrapper}>
          <h1 className={styles.headerChart}>Grafik Kinerja Tahun 2022</h1>
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
