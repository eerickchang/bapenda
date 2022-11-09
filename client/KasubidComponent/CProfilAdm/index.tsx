import React, { useState, useEffect, useRef } from "react";
import { BarChart, Gap, HorBar, ProfileKanan } from "../../components";
import styles from "./profilAdm.module.css";
import sidebarStyles from "../../KasubidComponent/Sidebar/sidebar.module.css";
import Image from "next/image";
import moment from "moment";
import Axios from "axios";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";
import { DoughnutChart } from "../../components/DoughnutChart";

export default function CProfilAdm() {
  const [tahun, setTahun] = useState("");
  const [dataAsn, setDataAsn] = useState("");
  const [grafikSubid, setGrafikSubid] = useState([]);
  const [grafikBidang, setGrafikBidang] = useState([]);
  const [realisasiKeg, setRealisasiKeg] = useState();
  const [blmRealisasi, setBlmRealisasi] = useState();
  const [persen, setPersen] = useState(0);
  const [subid, setSubid] = useState("");
  let totJlhKegiatan = 0;
  let totRealisasi = 0;

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;

      let thn = moment().format("YYYY");
      setTahun(thn);

      Axios.get("http://localhost:3001/masuk").then((response) => {
        setDataAsn(response.data.user[0]);
        setSubid(response.data.user[0].sub_bidang);

        //AMBIL DATA CAKIN SUB BIDANG
        Axios.get("http://localhost:3001/cakin").then((result) => {
          result.data.map((item) => {
            if (
              response.data.user[0].nip === item.nip &&
              moment(item.bulan).format("YYYY") === moment().format("YYYY")
            ) {
              setGrafikSubid((nextData) => {
                return [...nextData, item];
              });
              totJlhKegiatan = totJlhKegiatan + item.jumlah_kegiatan;
              totRealisasi = totRealisasi + item.lampiran_diterima;
            }
          });

          let hasil = (totRealisasi / totJlhKegiatan) * 100;
          setPersen(Math.trunc(hasil));
          setBlmRealisasi(totJlhKegiatan - totRealisasi);
          setRealisasiKeg(totRealisasi);
        });

        //AMBIL DATA CAKIN BIDANG
        Axios.get("http://localhost:3001/pegawai").then((ambilPegawai) => {
          ambilPegawai.data.map((pegawai) => {
            if (
              pegawai.bidang == response.data.user[0].bidang &&
              pegawai.jabatan == "Kabid"
            ) {
              Axios.get("http://localhost:3001/cakin").then((ambilCakin) => {
                ambilCakin.data.map((cakin) => {
                  if (
                    moment(cakin.bulan).format("YYYY") ===
                      moment().format("YYYY") &&
                    cakin.nip == pegawai.nip
                  ) {
                    setGrafikBidang((nextData) => {
                      return [...nextData, cakin];
                    });
                  }
                });
              });
            }
          });
        });
      });
    }
  }, []);

  const bidangChart1 = {
    labels: grafikBidang?.map((data) => moment(data.bulan).format("MMM")),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafikBidang?.map((data) => data.hasil_kinerja),
        backgroundColor: ["#1BDDBB"],
        borderRadius: 10,
        barThickness: 40,
        // barPercentage: 0.5,

        // hoverBackgroundColor: ["#112350"],
      },
    ],
  };

  const bidangChart3 = {
    labels: grafikSubid?.map((data) => moment(data.bulan).format("MMM")),
    datasets: [
      {
        label: "Kinerja Pegawai",
        data: grafikSubid?.map((data) => data.hasil_kinerja),
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

  const donatChart3 = {
    labels: ["Realisasi Kegiatan", "Belum Direalisasikan"],
    datasets: [
      {
        label: "GAS",
        data: [`${realisasiKeg}`, `${blmRealisasi}`],
        backgroundColor: ["#1BC6DD", "rgba(54, 162, 235, 0.2)"],
        borderWidth: 1,
        barThickness: 30,
      },
    ],
  };

  const router = useRouter();

  const clickCakinBidang = () => {
    router.push({
      pathname: "/Kasubid/CakinSubidang",
      query: {
        subid: subid,
      },
    });
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
        <Gap height={20} width={0} />

        {/* BIDANG */}
        <div className={styles.barContainer1}>
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
              <DoughnutChart data={donatChart1} txtTitle="90" />
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
                <div className={styles.kotak2} />
                <div style={{ marginLeft: 10 }}>
                  <p className={styles.txtJumlah}>90</p>
                  <p className={styles.txtRealisasi}>Realisasi Kegiatan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SUB BIDANG */}
        {persen != 0 ? (
          <div
            className={styles.barContainer3}
            onClick={clickCakinBidang}
            style={{ cursor: "pointer" }}
          >
            <p className={styles.txtBidang}>{subid}</p>
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
                <DoughnutChart data={donatChart3} txtTitle={persen} />
              </div>
              <div style={{ marginLeft: 22, marginTop: 50 }}>
                <div className={styles.ketWrapper}>
                  <div className={styles.kotak} />
                  <div style={{ marginLeft: 10 }}>
                    <p className={styles.txtJumlah}>{blmRealisasi}</p>
                    <p className={styles.txtJumlahKeg}>Belum Direalisasikan</p>
                  </div>
                </div>
                <Gap height={20} width={0} />
                <div className={styles.ketWrapper}>
                  <div className={styles.kotak3} />
                  <div style={{ marginLeft: 10 }}>
                    <p className={styles.txtJumlah}>{realisasiKeg}</p>
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
