import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  CProfilAdm,
  Gap,
  HorBar,
  ProfileKanan,
  Sidebar,
} from "../../../KasubidComponent";
import styles from "./profil.module.css";
import sidebarStyles from "../../../KasubidComponent/Sidebar/sidebar.module.css";
import Image from "next/image";
import moment from "moment";
import Axios from "axios";
import { useRouter } from "next/router";
import CCaKinSubidang from "../../../KasubidComponent/CCakinSubidang";

export default function CakinSubidang() {
  // const [tahun, setTahun] = useState("");
  // const [dataAsn, setDataAsn] = useState("");
  // const [grafikPersonal, setGrafikPersonal] = useState([]);

  // const shouldLog = useRef(true);
  // useEffect(() => {
  //   if (shouldLog.current) {
  //     shouldLog.current = false;

  //     let thn = moment().format("YYYY");
  //     setTahun(thn);

  //     Axios.get("http://localhost:3001/masuk").then((response) => {
  //       setDataAsn(response.data.user[0]);
  //     });

  //     Axios.get("http://localhost:3001/masuk").then((response) => {
  //       console.log(response.data.user[0].nip);
  //       Axios.get("http://localhost:3001/cakin").then((result) => {
  //         result.data.map((item) => {
  //           if (
  //             response.data.user[0].nip === item.nip &&
  //             moment(item.bulan).format("YYYY") === moment().format("YYYY")
  //           ) {
  //             setGrafikPersonal((nextData) => {
  //               return [...nextData, item];
  //             });
  //           }
  //         });
  //       });
  //     });
  //   }
  // }, []);

  // const UserData = [
  //   {
  //     id: 1,
  //     kinerja: 90,
  //     bulan: "Januari",
  //   },
  //   {
  //     id: 2,
  //     kinerja: 70,
  //     bulan: "Februari",
  //   },
  //   {
  //     id: 3,
  //     kinerja: 80,
  //     bulan: "Maret",
  //   },
  //   {
  //     id: 4,
  //     kinerja: 70,
  //     bulan: "April",
  //   },
  //   {
  //     id: 5,
  //     kinerja: 60,
  //     bulan: "Mei",
  //   },
  //   {
  //     id: 6,
  //     kinerja: 90,
  //     bulan: "Juni",
  //   },
  //   {
  //     id: 7,
  //     kinerja: 100,
  //     bulan: "Juli",
  //   },
  //   {
  //     id: 8,
  //     kinerja: 80,
  //     bulan: "Agustus",
  //   },
  //   {
  //     id: 9,
  //     kinerja: 70,
  //     bulan: "September",
  //   },
  //   {
  //     id: 10,
  //     kinerja: 80,
  //     bulan: "Oktober",
  //   },
  //   {
  //     id: 11,
  //     kinerja: 70,
  //     bulan: "November",
  //   },
  //   {
  //     id: 12,
  //     kinerja: 100,
  //     bulan: "Desember",
  //   },
  // ];

  // const bidangChart = {
  //   labels: UserData?.map((data) => data.bulan),
  //   datasets: [
  //     {
  //       label: "Kinerja Pegawai",
  //       data: UserData?.map((data) => data.kinerja),
  //       backgroundColor: ["#34B3F1"],
  //       borderRadius: 10,
  //       indexAxis: "y",
  //       barThickness: 20,
  //       // barPercentage: 0.5,

  //       // hoverBackgroundColor: ["#112350"],
  //     },
  //   ],
  // };

  // const subBidangChart = {
  //   labels: UserData?.map((data) => data.bulan),
  //   datasets: [
  //     {
  //       label: "Kinerja Pegawai",
  //       data: UserData?.map((data) => data.kinerja),
  //       backgroundColor: ["#FF0164"],
  //       borderRadius: 10,
  //       indexAxis: "y",
  //       barThickness: 20,
  //       // barPercentage: 0.5,

  //       // hoverBackgroundColor: ["#112350"],
  //     },
  //   ],
  // };

  // const personalChart = {
  //   labels: UserData?.map((data) => data.bulan),
  //   datasets: [
  //     {
  //       label: "Kinerja Pegawai",
  //       data: UserData?.map((data) => data.kinerja),
  //       backgroundColor: ["#1BDDBB"],
  //       borderRadius: 10,
  //       indexAxis: "y",
  //       barThickness: 20,
  //       // barPercentage: 0.5,

  //       // hoverBackgroundColor: ["#112350"],
  //     },
  //   ],
  // };

  // // const personalChart = {
  // //   labels: grafikPersonal?.map((data) => moment(data.bulan).format("MMM")),
  // //   datasets: [
  // //     {
  // //       label: "Kinerja Pegawai",
  // //       data: grafikPersonal?.map((data) => data.hasil_kinerja),
  // //       backgroundColor: ["#1BDDBB"],
  // //       borderRadius: 10,
  // //       indexAxis: "y",
  // //       barThickness: 20,
  // //       // barPercentage: 0.5,

  // //       // hoverBackgroundColor: ["#112350"],
  // //     },
  // //   ],
  // // };

  // const router = useRouter();
  // const clickLihatDetail = () => {
  //   // router.push("/Staff/DetailCaKin");
  // };

  return (
    <div className={styles.container}>
      <Sidebar kotakProfil={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <CCaKinSubidang/>
    </div>
  );
}
