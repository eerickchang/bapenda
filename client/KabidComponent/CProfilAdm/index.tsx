import React, { useState, useEffect, useRef } from "react";
import { BarChart, Gap, HorBar, ProfileKanan } from "../../components";
import styles from "./profilAdm.module.css";
import sidebarStyles from "../../KabidComponent/Sidebar/sidebar.module.css";
import Image from "next/image";
import moment from "moment";
import Axios from "axios";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";
import { DoughnutChart } from "../../components/DoughnutChart";

export default function CProfilAdm() {
  const [tahun, setTahun] = useState("");
  const [dataAsn, setDataAsn] = useState("");
  const [grafikPersonal, setGrafikPersonal] = useState([]);
  const [subid, setSubid] = useState([]);

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
          });
        });

        Axios.get("http://localhost:3001/pegawai").then((ambilPegawai) => {
          ambilPegawai.data.map((pegawai) => {
            if (
              pegawai.bidang == response.data.user[0].bidang &&
              pegawai.jabatan == "Kasubid"
            ) {
              setSubid((nextData) => {
                return [...nextData, pegawai];
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
      bulan: "Jan",
    },
    {
      id: 2,
      kinerja: 100,
      bulan: "Feb",
    },
    {
      id: 3,
      kinerja: 80,
      bulan: "Mar",
    },
    {
      id: 4,
      kinerja: 80,
      bulan: "Apr",
    },
    {
      id: 5,
      kinerja: 90,
      bulan: "Mei",
    },
    {
      id: 6,
      kinerja: 100,
      bulan: "Jun",
    },
    {
      id: 7,
      kinerja: 90,
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
    {
      id: 11,
      kinerja: 90,
      bulan: "Nov",
    },
    {
      id: 12,
      kinerja: 100,
      bulan: "Des",
    },
  ];

  const bidangChart1 = {
    labels: UserData?.map((data) => data.bulan),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: UserData?.map((data) => data.kinerja),
        backgroundColor: ["#1BDDBB"],
        borderRadius: 10,
        barThickness: 40,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const bidangChart2 = {
    labels: UserData?.map((data) => data.bulan),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: UserData?.map((data) => data.kinerja),
        backgroundColor: ["#1BC6DD"],
        borderRadius: 10,
        barThickness: 40,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const bidangChart3 = {
    labels: UserData?.map((data) => data.bulan),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: UserData?.map((data) => data.kinerja),
        backgroundColor: ["#1BC6DD"],
        borderRadius: 10,
        barThickness: 40,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const bidangChart4 = {
    labels: UserData?.map((data) => data.bulan),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: UserData?.map((data) => data.kinerja),
        backgroundColor: ["#1BC6DD"],
        borderRadius: 10,
        barThickness: 40,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const donatChart1 = {
    labels: ["Realisasi Kegiatan", "Belum Direalisasikan"],
    datasets: [
      {
        label: "GAS",
        data: [90, 10],
        backgroundColor: ["#1BDDBB", "rgba(54, 162, 235, 0.2)"],
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  const donatChart2 = {
    labels: ["Realisasi Kegiatan", "Belum Direalisasikan"],
    datasets: [
      {
        label: "GAS",
        data: [90, 10],
        backgroundColor: ["#1BC6DD", "rgba(54, 162, 235, 0.2)"],
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  const donatChart3 = {
    labels: ["Realisasi Kegiatan", "Belum Direalisasikan"],
    datasets: [
      {
        label: "GAS",
        data: [90, 10],
        backgroundColor: ["#1BC6DD", "rgba(54, 162, 235, 0.2)"],
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  const donatChart4 = {
    labels: ["Realisasi Kegiatan", "Belum Direalisasikan"],
    datasets: [
      {
        label: "GAS",
        data: [90, 10],
        backgroundColor: ["#1BC6DD", "rgba(54, 162, 235, 0.2)"],
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  const router = useRouter();

  const clickCakinBidang = (bidang) => {
    if (bidang == "Perencanaan dan Pengembangan") {
      console.log(subid);
      // router.push({
      //   pathname: "/Kabid/CakinSubidang",
      //   // query: {
      //   //   bidang: "Sekretaris",
      //   //   subid1: "Hukum dan Kepegawaian",
      //   //   subid2: "Perencanaan dan Keuangan",
      //   //   subid3: "Umum",
      //   // },
      // });
    } else if (bidang == "Pengelolaan Pendapatan Daerah") {
      router.push({
        pathname: "/Kabid/CakinSubidang",
        // query: {
        //   bidang: "Perencanaan dan Pengembangan",
        //   subid1: "Pengelolaan Pendapatan Daerah",
        //   subid2: "Pengembangan Teknologi",
        //   subid3: "Pelaporan Data Pendapatan",
        // },
      });
    } else if (bidang == "Pengembangan Teknologi") {
      router.push({
        pathname: "/Kabid/CakinSubidang",
        // query: {
        //   bidang: "Retribusi dan Lain-lain Pendapatan",
        //   subid1: "Retribusi",
        //   subid2: "Bagi Hasil Pajak dan Bagi Hasil Bukan Pajak",
        //   subid3: "Lain-lain Pendapatan",
        // },
      });
    } else if (bidang == "Pelaporan Data Pendapatan") {
      router.push({
        pathname: "/Kabid/CakinSubidang",
        // query: {
        //   bidang: "Pajak Daerah",
        //   subid1: "Administrasi dan Pelayanan Pajak",
        //   subid2: "PKB dan BBN-KB",
        //   subid3: "PBBKB, PAP dan Pajak Rokok",
        // },
      });
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar kotakProfil={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <div className={styles.contentKiri}>
        <div className={styles.header}>
          <div>
            <Image src="/Capaian.svg" width={50} height={50} alt="Capaian" />
          </div>
          <p className={styles.txtHeader}>CAPAIAN KINERJA TAHUN {tahun}</p>
        </div>
        <div
          className={styles.barContainer1}
          onClick={() => {
            clickCakinBidang("Perencanaan dan Pengembangan");
          }}
        >
          <p className={styles.txtBidang}>PERENCANAAN DAN PENGEMBANGAN</p>
          <div className={styles.mainBarWrapper1}>
            <div className={styles.barWrapper1}>
              <BarChart chartData={bidangChart1} />
            </div>
            <div
              style={{
                height: 159,
                width: 159,
                marginLeft: 25,
                marginTop: 65,
              }}
            >
              <DoughnutChart data={donatChart1} />
            </div>
            <div style={{ marginLeft: 22, marginTop: 50 }}>
              <div className={styles.ketWrapper}>
                <div className={styles.kotak} />
                <div style={{ marginLeft: 10 }}>
                  <p className={styles.txtJumlah}>10</p>
                  <p className={styles.txtJumlahKeg}>Belum Direalisasikan</p>
                </div>
              </div>
              <Gap height={20} />
              <div className={styles.ketWrapper}>
                <div className={styles.kotak2} />
                <div style={{ marginLeft: 10 }}>
                  <p className={styles.txtJumlah}>90</p>
                  <p className={styles.txtRealisasi}>Realisasi Kegiatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.barContainer2}
          onClick={() => {
            clickCakinBidang("Perencanaan dan Pengembangan");
          }}
        >
          <p className={styles.txtBidang}>PENGELOLAAN PENDAPATAN DAERAH</p>
          <div className={styles.mainBarWrapper1}>
            <div className={styles.barWrapper1}>
              <BarChart chartData={bidangChart2} />
            </div>
            <div
              style={{
                height: 159,
                width: 159,
                marginLeft: 25,
                marginTop: 65,
              }}
            >
              <DoughnutChart data={donatChart2} />
            </div>
            <div style={{ marginLeft: 22, marginTop: 50 }}>
              <div className={styles.ketWrapper}>
                <div className={styles.kotak} />
                <div style={{ marginLeft: 10 }}>
                  <p className={styles.txtJumlah}>10</p>
                  <p className={styles.txtJumlahKeg}>Belum Direalisasikan</p>
                </div>
              </div>
              <Gap height={20} />
              <div className={styles.ketWrapper}>
                <div className={styles.kotak3} />
                <div style={{ marginLeft: 10 }}>
                  <p className={styles.txtJumlah}>90</p>
                  <p className={styles.txtRealisasi}>Realisasi Kegiatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.barContainer3}
          onClick={() => {
            clickCakinBidang("Pengembangan Teknologi");
          }}
        >
          <p className={styles.txtBidang}>PENGEMBANGAN TEKNOLOGI</p>
          <div className={styles.mainBarWrapper1}>
            <div className={styles.barWrapper1}>
              <BarChart chartData={bidangChart3} />
            </div>
            <div
              style={{
                height: 159,
                width: 159,
                marginLeft: 25,
                marginTop: 65,
              }}
            >
              <DoughnutChart data={donatChart3} />
            </div>
            <div style={{ marginLeft: 22, marginTop: 50 }}>
              <div className={styles.ketWrapper}>
                <div className={styles.kotak} />
                <div style={{ marginLeft: 10 }}>
                  <p className={styles.txtJumlah}>10</p>
                  <p className={styles.txtJumlahKeg}>Belum Direalisasikan</p>
                </div>
              </div>
              <Gap height={20} width={0} />
              <div className={styles.ketWrapper}>
                <div className={styles.kotak3} />
                <div style={{ marginLeft: 10 }}>
                  <p className={styles.txtJumlah}>90</p>
                  <p className={styles.txtRealisasi}>Realisasi Kegiatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.barContainer4}
          onClick={() => {
            clickCakinBidang("Pelaporan Data Pendapatan");
          }}
        >
          <p className={styles.txtBidang}>PELAPORAN DATA PENDAPATAN</p>
          <div className={styles.mainBarWrapper1}>
            <div className={styles.barWrapper1}>
              <BarChart chartData={bidangChart4} />
            </div>
            <div
              style={{
                height: 159,
                width: 159,
                marginLeft: 25,
                marginTop: 65,
              }}
            >
              <DoughnutChart data={donatChart4} />
            </div>
            <div style={{ marginLeft: 22, marginTop: 50 }}>
              <div className={styles.ketWrapper}>
                <div className={styles.kotak} />
                <div style={{ marginLeft: 10 }}>
                  <p className={styles.txtJumlah}>10</p>
                  <p className={styles.txtJumlahKeg}>Belum Direalisasikan</p>
                </div>
              </div>
              <Gap height={20} width={0} />
              <div className={styles.ketWrapper}>
                <div className={styles.kotak3} />
                <div style={{ marginLeft: 10 }}>
                  <p className={styles.txtJumlah}>90</p>
                  <p className={styles.txtRealisasi}>Realisasi Kegiatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className={styles.barContainer5}
          onClick={() => {
            clickCakinBidang("Pengendalian dan Evaluasi");
          }}
        >
          <p className={styles.txtBidang}>PENGENDALIAN DAN EVALUASI</p>
          <div className={styles.mainBarWrapper1}>
            <div className={styles.barWrapper1}>
              <BarChart chartData={bidangChart5} />
            </div>
            <div
              style={{
                height: 159,
                width: 159,
                marginLeft: 25,
                marginTop: 65,
              }}
            >
              <DoughnutChart data={donatChart5} />
            </div>
            <div style={{ marginLeft: 22, marginTop: 50 }}>
              <div className={styles.ketWrapper}>
                <div className={styles.kotak} />
                <div style={{ marginLeft: 10 }}>
                  <p className={styles.txtJumlah}>10</p>
                  <p className={styles.txtJumlahKeg}>Belum Direalisasikan</p>
                </div>
              </div>
              <Gap height={20} />
              <div className={styles.ketWrapper}>
                <div className={styles.kotak2} />
                <div style={{ marginLeft: 10 }}>
                  <p className={styles.txtJumlah}>90</p>
                  <p className={styles.txtRealisasi}>Realisasi Kegiatan</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
