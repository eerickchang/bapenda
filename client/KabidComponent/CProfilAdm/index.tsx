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
  const [grafikSubid1, setGrafikSubid1] = useState([]);
  const [grafikSubid2, setGrafikSubid2] = useState([]);
  const [grafikSubid3, setGrafikSubid3] = useState([]);

  const [subid, setSubid] = useState([]);
  const [realisasiKeg, setRealisasiKeg] = useState();
  const [blmRealisasi, setBlmRealisasi] = useState();
  const [realisasiKegSub, setRealisasiKegSub] = useState([]);
  const [blmRealisasiSub, setBlmRealisasiSub] = useState([]);

  const [persen, setPersen] = useState(0);
  const [persenSub, setPersenSub] = useState([]);
  const [bidang, setBidang] = useState("");
  let cakinKasubid = [];
  let totJlhKegiatan = 0;
  let totRealisasi = 0;

  let totRealisasiSub = [0, 0, 0];
  let totJlhKegiatanSub = [0, 0, 0];

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      let thn = moment().format("YYYY");
      setTahun(thn);

      Axios.get("http://localhost:3001/masuk").then((response) => {
        setDataAsn(response.data.user[0]);
      });

      //AMBIL CAKIN KABID
      Axios.get("http://localhost:3001/masuk").then((response) => {
        setBidang(response.data.user[0].bidang);
        Axios.get("http://localhost:3001/cakin").then((result) => {
          result.data.map((item) => {
            if (
              response.data.user[0].nip === item.nip &&
              moment(item.bulan).format("YYYY") === moment().format("YYYY")
            ) {
              setGrafikPersonal((nextData) => {
                return [...nextData, item];
              });
              totJlhKegiatan = totJlhKegiatan + item.jumlah_kegiatan;
              totRealisasi = totRealisasi + item.lampiran_diterima;
            }
          });

          let hasil = (totRealisasi / totJlhKegiatan) * 100;
          setPersen(Math.trunc(hasil));
          setBlmRealisasi(totJlhKegiatan - totRealisasi);
          setRealisasiKeg(Math.trunc(totRealisasi));
        });

        //AMBIL KASUBID
        let kasubidArr = [];
        Axios.get("http://localhost:3001/pegawai").then((ambilPegawai) => {
          ambilPegawai.data.map((pegawai) => {
            if (
              pegawai.bidang == response.data.user[0].bidang &&
              pegawai.jabatan == "Kasubid"
            ) {
              setSubid((nextData) => {
                return [...nextData, pegawai];
              });
              kasubidArr = [...kasubidArr, pegawai];
            }
          });

          //AMBIL CAKIN KASUBID 1
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

          //AMBIL CAKIN KASUBID 2
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
            console.log(hasil);

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

          //AMBIL CAKIN KASUBID 3
          Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
            ambilCakin.data.map((cakin) => {
              if (
                kasubidArr[2].nip == cakin.nip &&
                moment(cakin.bulan).format("YYYY") === moment().format("YYYY")
              ) {
                setGrafikSubid3((nextData) => {
                  return [...nextData, cakin];
                });
              }
            });
          });
        });
      });
    }
  }, []);

  const bidangChart1 = {
    labels: grafikPersonal?.map((data) => moment(data.bulan).format("MMM")),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafikPersonal?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#1BDDBB"],
        borderRadius: 10,
        barThickness: 40,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const bidangChart2 = {
    labels: grafikSubid1?.map((data) => moment(data.bulan).format("MMM")),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafikSubid1?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#1BC6DD"],
        borderRadius: 10,
        barThickness: 40,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const bidangChart3 = {
    labels: grafikSubid2?.map((data) => moment(data.bulan).format("MMM")),
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

  const bidangChart4 = {
    labels: grafikSubid3?.map((data) => moment(data.bulan).format("MMM")),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafikSubid3?.map((data) => data.hasil_kinerja),
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
        data: [`${realisasiKeg}`, `${blmRealisasi}`],
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
        data: [`${realisasiKegSub[0]}`, `${blmRealisasiSub[0]}`],
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
        data: [`${realisasiKegSub[1]}`, `${blmRealisasiSub[1]}`],
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
      // console.log(subid[0].sub_bidang);
      console.log(persenSub);
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

        {/* BAR CHART BIDANG */}
        {persen != 0 ? (
          <div
            className={styles.barContainer1}
            onClick={() => {
              clickCakinBidang("Perencanaan dan Pengembangan");
            }}
          >
            <p className={styles.txtBidang}>{bidang}</p>
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
                <DoughnutChart data={donatChart1} txtTitle={persen} />
              </div>
              <div style={{ marginLeft: 22, marginTop: 50 }}>
                <div className={styles.ketWrapper}>
                  <div className={styles.kotak} />
                  <div style={{ marginLeft: 10 }}>
                    <p className={styles.txtJumlah}>{blmRealisasi}</p>
                    <p className={styles.txtJumlahKeg}>Belum Direalisasikan</p>
                  </div>
                </div>
                <Gap height={20} />
                <div className={styles.ketWrapper}>
                  <div className={styles.kotak2} />
                  <div style={{ marginLeft: 10 }}>
                    <p className={styles.txtJumlah}>{realisasiKeg}</p>
                    <p className={styles.txtRealisasi}>Realisasi Kegiatan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* BAR CHART SUBID 1 */}
        {subid.length != 0 ? (
          <div
            className={styles.barContainer2}
            onClick={() => {
              clickCakinBidang("Perencanaan dan Pengembangan");
            }}
          >
            <p className={styles.txtBidang}>{subid[0].sub_bidang}</p>
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
                <DoughnutChart data={donatChart2} txtTitle={persenSub[0]} />
              </div>
              <div style={{ marginLeft: 22, marginTop: 50 }}>
                <div className={styles.ketWrapper}>
                  <div className={styles.kotak} />
                  <div style={{ marginLeft: 10 }}>
                    <p className={styles.txtJumlah}>{blmRealisasiSub[0]}</p>
                    <p className={styles.txtJumlahKeg}>Belum Direalisasikan</p>
                  </div>
                </div>
                <Gap height={20} />
                <div className={styles.ketWrapper}>
                  <div className={styles.kotak3} />
                  <div style={{ marginLeft: 10 }}>
                    <p className={styles.txtJumlah}>{realisasiKegSub[0]}</p>
                    <p className={styles.txtRealisasi}>Realisasi Kegiatan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* BAR CHART SUBID 2 */}
        {subid.length != 0 && persenSub[1] != null ? (
          <div
            className={styles.barContainer3}
            onClick={() => {
              clickCakinBidang("Pengembangan Teknologi");
            }}
          >
            <p className={styles.txtBidang}>{subid[1].sub_bidang}</p>
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
                <DoughnutChart data={donatChart3} txtTitle={persenSub[1]} />
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
        ) : null}

        {/* BAR CHART SUBID 3 */}
        {subid.length != 0 ? (
          <div
            className={styles.barContainer4}
            onClick={() => {
              clickCakinBidang("Pelaporan Data Pendapatan");
            }}
          >
            <p className={styles.txtBidang}>{subid[2].sub_bidang}</p>
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
        ) : null}
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
