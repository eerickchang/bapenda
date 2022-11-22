import React, { useState, useEffect, useRef } from "react";
import { BarChart, Gap, HorBar, ProfileKanan } from "../../components";
import styles from "./profilAdm.module.css";
import sidebarStyles from "../../KabanComponent/SidebarAdmin/sidebar.module.css";
import Image from "next/image";
import moment from "moment";
import Axios from "axios";
import { useRouter } from "next/router";
import Sidebar from "../SidebarAdmin";
import { DoughnutChart } from "../../components/DoughnutChart";

export default function Profil() {
  const [tahun, setTahun] = useState("");
  const [dataAsn, setDataAsn] = useState("");
  const [grafikPersonal, setGrafikPersonal] = useState([]);
  const [ambilKabid, setAmbilKabid] = useState([]);
  const [grafik1, setGrafik1] = useState([]);
  const [grafik2, setGrafik2] = useState([]);
  const [grafik3, setGrafik3] = useState([]);
  const [grafik4, setGrafik4] = useState([]);
  const [grafik5, setGrafik5] = useState([]);

  const [realisasiKeg, setRealisasiKeg] = useState([]);
  const [blmRealisasi, setBlmRealisasi] = useState([]);
  const [persen, setPersen] = useState([]);

  let totRealisasi = [0, 0, 0, 0, 0];
  let totJlhKegiatan = [0, 0, 0, 0, 0];

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      let kabid = [];

      let thn = moment().format("YYYY");
      setTahun(thn);

      Axios.get("http://localhost:3001/masuk").then((response) => {
        setDataAsn(response.data.user[0]);
      });

      // AMBIL KABID DAN SEKRE
      Axios.get("http://localhost:3001/pegawai").then((ambilPegawai) => {
        ambilPegawai.data.map((pegawai) => {
          if (pegawai.jabatan == "Kabid" || pegawai.jabatan == "Sekretaris") {
            setAmbilKabid((nextData) => {
              return [...nextData, pegawai];
            });
            kabid = [...kabid, pegawai];
          }
        });

        //AMBIL CAKIN SEKRETARIS
        Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
          ambilCakin.data.map((cakin) => {
            if (
              cakin.nip == kabid[0].nip &&
              moment(cakin.bulan).format("YYYY") === moment().format("YYYY")
            ) {
              setGrafik1((nextData) => {
                return [...nextData, cakin];
              });

              totJlhKegiatan[0] = totJlhKegiatan[0] + cakin.jumlah_kegiatan;
              totRealisasi[0] = totRealisasi[0] + cakin.lampiran_diterima;
            }
          });

          let hasil = (totRealisasi[0] / totJlhKegiatan[0]) * 100;
          let blmRealisasi = totJlhKegiatan[0] - totRealisasi[0];
          let realisasi = Math.trunc(totRealisasi[0]);

          setPersen((nextData) => {
            return [...nextData, Math.trunc(hasil)];
          });

          setBlmRealisasi((nextData) => {
            return [...nextData, blmRealisasi];
          });

          setRealisasiKeg((nextData) => {
            return [...nextData, realisasi];
          });
        });

        //AMBIL CAKIN BIDANG 1
        Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
          ambilCakin.data.map((cakin) => {
            if (
              cakin.nip == kabid[1].nip &&
              moment(cakin.bulan).format("YYYY") === moment().format("YYYY")
            ) {
              setGrafik2((nextData) => {
                return [...nextData, cakin];
              });

              totJlhKegiatan[1] = totJlhKegiatan[1] + cakin.jumlah_kegiatan;
              totRealisasi[1] = totRealisasi[1] + cakin.lampiran_diterima;
            }
          });

          let hasil = (totRealisasi[1] / totJlhKegiatan[1]) * 100;
          let blmRealisasi = totJlhKegiatan[1] - totRealisasi[1];
          let realisasi = Math.trunc(totRealisasi[1]);

          setPersen((nextData) => {
            return [...nextData, Math.trunc(hasil)];
          });

          setBlmRealisasi((nextData) => {
            return [...nextData, blmRealisasi];
          });

          setRealisasiKeg((nextData) => {
            return [...nextData, realisasi];
          });
        });

        //AMBIL CAKIN BIDANG 2
        Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
          ambilCakin.data.map((cakin) => {
            if (
              cakin.nip == kabid[2].nip &&
              moment(cakin.bulan).format("YYYY") === moment().format("YYYY")
            ) {
              setGrafik3((nextData) => {
                return [...nextData, cakin];
              });

              totJlhKegiatan[2] = totJlhKegiatan[2] + cakin.jumlah_kegiatan;
              totRealisasi[2] = totRealisasi[2] + cakin.lampiran_diterima;
            }
          });

          let hasil = (totRealisasi[2] / totJlhKegiatan[2]) * 100;
          let blmRealisasi = totJlhKegiatan[2] - totRealisasi[2];
          let realisasi = Math.trunc(totRealisasi[2]);

          setPersen((nextData) => {
            return [...nextData, Math.trunc(hasil)];
          });

          setBlmRealisasi((nextData) => {
            return [...nextData, blmRealisasi];
          });

          setRealisasiKeg((nextData) => {
            return [...nextData, realisasi];
          });
        });

        //AMBIL CAKIN BIDANG 3
        Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
          ambilCakin.data.map((cakin) => {
            if (
              cakin.nip == kabid[3].nip &&
              moment(cakin.bulan).format("YYYY") === moment().format("YYYY")
            ) {
              setGrafik4((nextData) => {
                return [...nextData, cakin];
              });

              totJlhKegiatan[3] = totJlhKegiatan[3] + cakin.jumlah_kegiatan;
              totRealisasi[3] = totRealisasi[3] + cakin.lampiran_diterima;
            }
          });

          let hasil = (totRealisasi[3] / totJlhKegiatan[3]) * 100;
          let blmRealisasi = totJlhKegiatan[3] - totRealisasi[3];
          let realisasi = Math.trunc(totRealisasi[3]);

          setPersen((nextData) => {
            return [...nextData, Math.trunc(hasil)];
          });

          setBlmRealisasi((nextData) => {
            return [...nextData, blmRealisasi];
          });

          setRealisasiKeg((nextData) => {
            return [...nextData, realisasi];
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
    labels: grafik1?.map((data) => moment(data.bulan).format("MMM")),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafik1?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#1BDDBB"],
        borderRadius: 10,
        barThickness: 40,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const bidangChart2 = {
    labels: grafik2?.map((data) => moment(data.bulan).format("MMM")),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafik2?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#1BC6DD"],
        borderRadius: 10,
        barThickness: 40,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const bidangChart3 = {
    labels: grafik3?.map((data) => moment(data.bulan).format("MMM")),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafik3?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#1BDDBB"],
        borderRadius: 10,
        barThickness: 40,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const bidangChart4 = {
    labels: grafik4?.map((data) => moment(data.bulan).format("MMM")),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafik4?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#1BC6DD"],
        borderRadius: 10,
        barThickness: 40,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const bidangChart5 = {
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

  const donatChart1 = {
    labels: ["Realisasi Kegiatan", "Belum Direalisasikan"],
    datasets: [
      {
        label: "GAS",
        data: [`${realisasiKeg[0]}`, `${blmRealisasi[0]}`],
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
        data: [`${realisasiKeg[1]}`, `${blmRealisasi[1]}`],
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
        data: [`${realisasiKeg[2]}`, `${blmRealisasi[2]}`],
        backgroundColor: ["#1BDDBB", "rgba(54, 162, 235, 0.2)"],
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

  const donatChart5 = {
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

  const router = useRouter();

  const clickCakinBidang = () => {
    console.log(persen[0]);
  };

  const clickCakinBidang2 = (bidang) => {
    if (bidang == "Sekretaris") {
      router.push({
        pathname: "/Kaban/CakinBidang",
        query: {
          bidang: "Sekretaris",
          subid1: "Hukum dan Kepegawaian",
          subid2: "Perencanaan dan Keuangan",
          subid3: "Umum",
        },
      });
    } else if (bidang == "Perencanaan dan Pengembangan") {
      router.push({
        pathname: "/Kaban/CakinBidang",
        query: {
          bidang: "Perencanaan dan Pengembangan",
          subid1: "Pengelolaan Pendapatan Daerah",
          subid2: "Pengembangan Teknologi",
          subid3: "Pelaporan Data Pendapatan",
        },
      });
    } else if (bidang == "Retribusi dan Lain-lain Pendapatan") {
      router.push({
        pathname: "/Kaban/CakinBidang",
        query: {
          bidang: "Retribusi dan Lain-lain Pendapatan",
          subid1: "Retribusi",
          subid2: "Bagi Hasil Pajak dan Bagi Hasil Bukan Pajak",
          subid3: "Lain-lain Pendapatan",
        },
      });
    } else if (bidang == "Pajak Daerah") {
      router.push({
        pathname: "/Kaban/CakinBidang",
        query: {
          bidang: "Pajak Daerah",
          subid1: "Administrasi dan Pelayanan Pajak",
          subid2: "PKB dan BBN-KB",
          subid3: "PBBKB, PAP dan Pajak Rokok",
        },
      });
    } else if (bidang == "Pengendalian dan Evaluasi") {
      router.push({
        pathname: "/Kaban/CakinBidang",
        query: {
          bidang: "Pengendalian dan Evaluasi",
          subid1: "Evaluasi Kinerja",
          subid2: "Pengendalian dan Pembinaan Administrasi",
          subid3: "Pengendalian Pendapatan Daerah",
        },
      });
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar kotakProfil={sidebarStyles.kotakAktif} />
      <Gap height={0} width={39} />
      <div className={styles.contentKiri}>
        <div className={styles.header}>
          <div>
            <Image src="/Capaian.svg" width={50} height={50} alt="Capaian" />
          </div>
          <p className={styles.txtHeader}>CAPAIAN KINERJA TAHUN {tahun}</p>
        </div>

        {/* BAR CHART SEKRE */}
        {ambilKabid.length != 0 && persen[0] != null ? (
          <div
            className={styles.barContainer1}
            onClick={() => {
              clickCakinBidang("Sekretaris");
            }}
          >
            <p className={styles.txtBidang}>{ambilKabid[0].bidang}</p>
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
                <DoughnutChart data={donatChart1} txtTitle={persen[0]} />
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
        ) : null}

        {/* BAR CHART BIDANG 1 */}
        {ambilKabid.length != 0 && persen[1] != null ? (
          <div
            className={styles.barContainer2}
            onClick={() => {
              clickCakinBidang("Perencanaan dan Pengembangan");
            }}
          >
            <p className={styles.txtBidang}>{ambilKabid[1].bidang}</p>
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
                <DoughnutChart data={donatChart2} txtTitle={persen[1]} />
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
        ) : null}

        {/* BAR CHART BIDANG 2 */}
        {ambilKabid.length != 0 && persen[2] != null ? (
          <div
            className={styles.barContainer3}
            onClick={() => {
              clickCakinBidang("Retribusi dan Lain-lain Pendapatan");
            }}
          >
            <p className={styles.txtBidang}>{ambilKabid[2].bidang}</p>
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
                <DoughnutChart data={donatChart3} txtTitle={persen[2]} />
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
        ) : null}

        {/* BAR CHART BIDANG 3 */}
        {ambilKabid.length != 0 ? (
          <div
            className={styles.barContainer4}
            onClick={() => {
              clickCakinBidang("Pajak Daerah");
            }}
          >
            <p className={styles.txtBidang}>{ambilKabid[3].bidang}</p>
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
        ) : null}

        {/* BAR CHART BIDANG 4 */}
        {ambilKabid.length != 0 ? (
          <div
            className={styles.barContainer5}
            onClick={() => {
              clickCakinBidang("Pengendalian dan Evaluasi");
            }}
          >
            <p className={styles.txtBidang}>{ambilKabid[4].bidang}</p>
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
