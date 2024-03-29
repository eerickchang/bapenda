import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Gap,
  HorBar,
  ProfileKanan,
  SidebarStaff,
} from "../../../componentsTHL";
import styles from "./profil.module.css";
import sidebarStyles from "../../../componentsTHL/SidebarStaff/sidebar.module.css";
import Image from "next/image";
import moment from "moment";
import Axios from "axios";
import { useRouter } from "next/router";

export default function Profil() {
  const [tahun, setTahun] = useState("");
  const [dataAsn, setDataAsn] = useState("");
  const [grafikPersonal, setGrafikPersonal] = useState([]);
  const [grafikSubid, setGrafikSubid] = useState([]);
  const [grafikBid, setGrafikBid] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      let thn = moment().format("YYYY");
      setTahun(thn);

      Axios.get("http://localhost:3001/masuk").then((response) => {
        setDataAsn(response.data.user[0]);
      });

      Axios.get("http://localhost:3001/masuk").then((response) => {
        console.log(response.data.user[0].nip);
        Axios.get("http://localhost:3001/cakin").then((result) => {
          result.data.map((item) => {
            if (
              response.data.user[0].nip === item.nip &&
              moment(item.bulan).format("YYYY") === moment().format("YYYY")
            ) {
              setGrafikPersonal((nextData) => {
                return [...nextData, item];
              });
            }
            if (
              item.sub_bidang == response.data.user[0].sub_bidang &&
              item.jabatan == "Kasubid"
            ) {
              setGrafikSubid((nextData) => {
                return [...nextData, item];
              });
            }
            if (
              item.bidang == response.data.user[0].bidang &&
              item.jabatan == "Kabid"
            ) {
              setGrafikBid((nextData) => {
                return [...nextData, item];
              });
            }
          });
        });
      });
    }
  }, []);

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

  const bidangChart = {
    labels: UserData?.map((data) => data.bulan),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafikBid?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#34B3F1"],
        borderRadius: 10,
        indexAxis: "y",
        barThickness: 20,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const subBidangChart = {
    labels: UserData?.map((data) => data.bulan),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafikSubid?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#FF0164"],
        borderRadius: 10,
        indexAxis: "y",
        barThickness: 20,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const personalChart = {
    labels: UserData?.map((data) => data.bulan),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafikPersonal?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#1BDDBB"],
        borderRadius: 10,
        indexAxis: "y",
        barThickness: 20,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const router = useRouter();
  const clickLihatDetail = () => {
    router.push("/THL/DetailCaKin");
  };

  return (
    <div className={styles.container}>
      <SidebarStaff kotakProfil={sidebarStyles.kotakAktif} />
      {/* <Gap height={0} width={141} /> */}
      <div className={styles.wrapperTitle}>
        <div>
          <Image src="/Capaian.svg" width={50} height={50} alt="Capaian" />
        </div>
        <p className={styles.txt}>CAPAIAN KINERJA TAHUN {tahun}</p>
      </div>

      <div className={styles.contentKiri}>
        <div className={styles.barWrapper1}>
          <p className={styles.txtJudul}>{dataAsn.bidang}</p>
          <div className={styles.barResize}>
            <BarChart chartData={bidangChart} />
          </div>
        </div>
        <div className={styles.barWrapper2}>
          <p className={styles.txtJudul}>{dataAsn.sub_bidang}</p>
          <div className={styles.barResize}>
            <BarChart chartData={subBidangChart} />
          </div>
        </div>
        <div className={styles.barWrapper3}>
          <div className={styles.txtWrapper3}>
            <p className={styles.txtJudulLain}>{dataAsn.nama}</p>
            <div
              onClick={clickLihatDetail}
              className={styles.lihatDetailWrapper}
            >
              <p className={styles.lihatDetail}>lihat detail</p>
              <div className={styles.lihatDetailImg}>
                <Image
                  src="/lihatDetail.svg"
                  width={25.85}
                  height={22.62}
                  alt="lihat Detail"
                />
              </div>
            </div>
          </div>
          <div className={styles.barResize}>
            <BarChart chartData={personalChart} />
          </div>
        </div>
        <div className={styles.content}></div>
      </div>
      <div className={styles.contentKanan}>
        <ProfileKanan
          nama={dataAsn.nama}
          bidang={dataAsn.bidang}
          subBidang={dataAsn.sub_bidang}
          jabatan={dataAsn.jabatan}
          noHp={dataAsn.no_hp}
          fotoProfil={dataAsn.foto}
        />
      </div>
    </div>
  );
}
