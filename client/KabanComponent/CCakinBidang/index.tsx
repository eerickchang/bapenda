import React, { useState, useEffect, useRef } from "react";
import { BarChart, Gap } from "../../components";
import styles from "./profilAdm.module.css";
import sidebarStyles from "../../KabanComponent/SidebarAdmin/sidebar.module.css";
import Image from "next/future/image";
import moment from "moment";
import Axios from "axios";
import { useRouter } from "next/router";
import Sidebar from "../SidebarAdmin";
import { DoughnutChart } from "../../components/DoughnutChart";

export default function CCakinBidang() {
  const router = useRouter();
  const [tahun, setTahun] = useState("");
  const [dataAsn, setDataAsn] = useState("");
  const [grafikPersonal, setGrafikPersonal] = useState([]);
  const [upBidang, setUpBidang] = useState("");

  let totRealisasiSub = [0, 0, 0];
  let totJlhKegiatanSub = [0, 0, 0];
  const [persenSub, setPersenSub] = useState([]);
  const [realisasiKegSub, setRealisasiKegSub] = useState([]);
  const [blmRealisasiSub, setBlmRealisasiSub] = useState([]);
  const [subid, setSubid] = useState([]);
  const [grafikSubid1, setGrafikSubid1] = useState([]);
  const [grafikSubid2, setGrafikSubid2] = useState([]);
  const [grafikSubid3, setGrafikSubid3] = useState([]);

  const shouldLog = useRef(true);
  useEffect(() => {
    if (!router.isReady) return;
    if (shouldLog.current) {
      shouldLog.current = false;
      setUpBidang(router.query.bidang);

      let thn = moment().format("YYYY");
      setTahun(thn);

      Axios.get("http://localhost:3001/masuk").then((response) => {
        setDataAsn(response.data.user[0]);

        //AMBIL KASUBID
        let kasubidArr = [];
        Axios.get("http://localhost:3001/pegawai").then((ambilPegawai) => {
          ambilPegawai.data.map((pegawai) => {
            if (
              pegawai.bidang == router.query.bidang &&
              pegawai.jabatan == "Kasubid"
            ) {
              setSubid((nextData) => {
                return [...nextData, pegawai];
              });
              kasubidArr = [...kasubidArr, pegawai];
            }
          });

          //AMBIL CAKIN KASUBID 1
          setTimeout(() => {
            Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
              ambilCakin.data.map((cakin) => {
                if (
                  kasubidArr[0].nip == cakin.nip &&
                  moment(cakin.bulan).format("YYYY") === moment().format("YYYY")
                ) {
                  setGrafikSubid1((nextData) => {
                    return [...nextData, cakin];
                  });

                  totJlhKegiatanSub[0] =
                    totJlhKegiatanSub[0] + cakin.jumlah_kegiatan;
                  totRealisasiSub[0] =
                    totRealisasiSub[0] + cakin.lampiran_diterima;
                }
              });

              let hasil = (totRealisasiSub[0] / totJlhKegiatanSub[0]) * 100;
              let blmRealisasi = totJlhKegiatanSub[0] - totRealisasiSub[0];
              let realisasi = Math.trunc(totRealisasiSub[0]);

              setPersenSub((nextData) => {
                return [...nextData, Math.trunc(hasil)];
              });

              setBlmRealisasiSub((nextData) => {
                return [...nextData, blmRealisasi];
              });

              setRealisasiKegSub((nextData) => {
                return [...nextData, realisasi];
              });
            });
          }, 100);

          //AMBIL CAKIN KASUBID 2
          setTimeout(() => {
            Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
              ambilCakin.data.map((cakin) => {
                if (
                  kasubidArr[1].nip == cakin.nip &&
                  moment(cakin.bulan).format("YYYY") === moment().format("YYYY")
                ) {
                  setGrafikSubid2((nextData) => {
                    return [...nextData, cakin];
                  });

                  totJlhKegiatanSub[1] =
                    totJlhKegiatanSub[1] + cakin.jumlah_kegiatan;
                  totRealisasiSub[1] =
                    totRealisasiSub[1] + cakin.lampiran_diterima;
                }
              });

              let hasil = (totRealisasiSub[1] / totJlhKegiatanSub[1]) * 100;
              let blmRealisasi = totJlhKegiatanSub[1] - totRealisasiSub[1];
              let realisasi = Math.trunc(totRealisasiSub[1]);

              setPersenSub((nextData) => {
                return [...nextData, Math.trunc(hasil)];
              });

              setBlmRealisasiSub((nextData) => {
                return [...nextData, blmRealisasi];
              });

              setRealisasiKegSub((nextData) => {
                return [...nextData, realisasi];
              });
            });
          }, 200);

          //AMBIL CAKIN KASUBID 3
          setTimeout(() => {
            Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
              ambilCakin.data.map((cakin) => {
                if (
                  kasubidArr[2].nip == cakin.nip &&
                  moment(cakin.bulan).format("YYYY") === moment().format("YYYY")
                ) {
                  setGrafikSubid3((nextData) => {
                    return [...nextData, cakin];
                  });

                  totJlhKegiatanSub[2] =
                    totJlhKegiatanSub[2] + cakin.jumlah_kegiatan;
                  totRealisasiSub[2] =
                    totRealisasiSub[2] + cakin.lampiran_diterima;
                }
              });

              let hasil = (totRealisasiSub[2] / totJlhKegiatanSub[2]) * 100;
              let blmRealisasi = totJlhKegiatanSub[2] - totRealisasiSub[2];
              let realisasi = Math.trunc(totRealisasiSub[2]);

              setPersenSub((nextData) => {
                return [...nextData, Math.trunc(hasil)];
              });

              setBlmRealisasiSub((nextData) => {
                return [...nextData, blmRealisasi];
              });

              setRealisasiKegSub((nextData) => {
                return [...nextData, realisasi];
              });
            });
          }, 300);
        });
      });
    }
  }, [router.query, router.isReady]);

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
        data: grafikSubid1?.map((data) => data.hasil_kinerja),
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
        data: grafikSubid2?.map((data) => data.hasil_kinerja),
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
        data: grafikSubid3?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#1BDDBB"],
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
        data: [`${realisasiKegSub[0]}`, `${blmRealisasiSub[0]}`],
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
        data: [`${realisasiKegSub[1]}`, `${blmRealisasiSub[1]}`],
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
        data: [`${realisasiKegSub[2]}`, `${blmRealisasiSub[2]}`],
        backgroundColor: ["#1BDDBB", "rgba(54, 162, 235, 0.2)"],
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  const clickLihatDetail = () => {
    router.push("/Staff/DetailCaKin");
  };

  const clickSekretaris = () => {
    console.log("Oke");
  };

  const clickCakinSubidang = (subidClick) => {
    if (router.query.subid1 == subidClick) {
      router.push({
        pathname: "/Kaban/CakinSubidang",
        query: {
          bidang: router.query.bidang,
          subid1: router.query.subid1,
          subid2: router.query.subid2,
          subid3: router.query.subid3,
          subidAsli: subidClick,
        },
      });
    } else if (router.query.subid2 == subidClick) {
      router.push({
        pathname: "/Kaban/CakinSubidang",
        query: {
          bidang: router.query.bidang,
          subid1: router.query.subid1,
          subid2: router.query.subid2,
          subid3: router.query.subid3,
          subidAsli: subidClick,
        },
      });
    } else if (router.query.subid3 == subidClick) {
      router.push({
        pathname: "/Kaban/CakinSubidang",
        query: {
          bidang: router.query.bidang,
          subid1: router.query.subid1,
          subid2: router.query.subid2,
          subid3: router.query.subid3,
          subidAsli: subidClick,
        },
      });
    }
  };

  const clickBack = () => {
    router.push("/Kaban/Profil");
  };

  return (
    <div className={styles.container}>
      <Sidebar kotakProfil={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <div className={styles.contentKiri}>
        <div className={styles.wrapperTitle}>
          <div>
            <Image
              style={{ cursor: "pointer" }}
              onClick={clickBack}
              src={"/Back.svg"}
              width={45}
              height={45}
            />
          </div>
          <div>
            <Image src={"/Capaian.svg"} width={50} height={40} />
          </div>
          <p style={{ marginLeft: 5, marginBottom: 10 }}>
            CAPAIAN KINERJA {upBidang.toUpperCase()} TAHUN {tahun}
          </p>
        </div>
        <Gap height={140} width={0} />
        {/* BAR CONTAINER 1 */}
        {subid.length != 0 && persenSub[0] != null ? (
          <div
            className={styles.barContainer1}
            onClick={() => {
              clickCakinSubidang(subid[0].sub_bidang);
            }}
          >
            <p className={styles.txtBidang}>{subid[0].sub_bidang}</p>
            <div className={styles.mainBarWrapper1}>
              <div className={styles.barWrapper1}>
                <BarChart chartData={bidangChart1} />
              </div>
              <div
                style={{
                  height: 159,
                  width: 159,
                  flex: 0.2,
                  marginLeft: 25,
                  marginTop: 65,
                }}
              >
                <DoughnutChart data={donatChart1} txtTitle={persenSub[0]} />
              </div>
              <div style={{ marginLeft: 22, marginTop: 50, flex: 0.2 }}>
                <div className={styles.ketWrapper}>
                  <div className={styles.kotak} />
                  <div style={{ marginLeft: 10 }}>
                    <p className={styles.txtJumlah}>{blmRealisasiSub[0]}</p>
                    <p className={styles.txtJumlahKeg}>Belum Direalisasikan</p>
                  </div>
                </div>
                <Gap height={20} width={0} />
                <div className={styles.ketWrapper}>
                  <div className={styles.kotak2} />
                  <div style={{ marginLeft: 10 }}>
                    <p className={styles.txtJumlah}>{realisasiKegSub[0]}</p>
                    <p className={styles.txtRealisasi}>Realisasi Kegiatan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <Gap height={40} width={0} />

        {/* BAR CONTAINER 2 */}
        {subid.length != 0 && persenSub[1] != null ? (
          <div
            className={styles.barContainer2}
            onClick={() => {
              clickCakinSubidang(subid[1].sub_bidang);
            }}
          >
            <p className={styles.txtBidang}>{subid[1].sub_bidang}</p>
            <div className={styles.mainBarWrapper1}>
              <div className={styles.barWrapper1}>
                <BarChart chartData={bidangChart2} />
              </div>
              <div
                style={{
                  height: 159,
                  width: 159,
                  flex: 0.2,
                  marginLeft: 25,
                  marginTop: 65,
                }}
              >
                <DoughnutChart data={donatChart2} txtTitle={persenSub[1]} />
              </div>
              <div style={{ marginLeft: 22, marginTop: 50, flex: 0.2 }}>
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
        ) : null}
        <Gap height={40} width={0} />

        {/* BAR CONTAINER 3 */}
        {subid.length != 0 && persenSub[2] != null ? (
          <div
            className={styles.barContainer3}
            onClick={() => {
              clickCakinSubidang(subid[2].sub_bidang);
            }}
          >
            <p className={styles.txtBidang}>{subid[2].sub_bidang}</p>
            <div className={styles.mainBarWrapper1}>
              <div className={styles.barWrapper1}>
                <BarChart chartData={bidangChart3} />
              </div>
              <div
                style={{
                  height: 159,
                  width: 159,
                  flex: 0.2,
                  marginLeft: 25,
                  marginTop: 65,
                }}
              >
                <DoughnutChart data={donatChart3} txtTitle={persenSub[2]} />
              </div>
              <div style={{ marginLeft: 22, marginTop: 50, flex: 0.2 }}>
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
        ) : null}
      </div>
    </div>
  );
}
