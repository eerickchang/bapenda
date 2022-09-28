import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./cDaftarKegiatanSubid.module.css";

export default function CDaftarKegiatanSubid() {
  const router = useRouter();
  const clickBack = () => {
    router.push("/Admin/DaftarKegiatan");
    // console.log(dataCakin);
  };

  const filter = [
    {
      id: 1,
      status: "Semua",
      //  onclick: () => (
      //    setDataRenaksi([]),
      //    Axios.get("http://localhost:3001/ambilRenaksi").then((result) => {
      //      result.data.map((item) => {
      //        if (
      //          moment(item.end_date).format("YYYY") ===
      //          moment().format("YYYY")
      //        ) {
      //          setDataRenaksi((nextData) => {
      //            return [...nextData, item];
      //          });
      //        }
      //      });
      //    })
      //  ),
    },
    {
      id: 2,
      status: "Jadwal diubah",
      //  onclick: () => (
      //    setDataRenaksi([]),
      //    Axios.get("http://localhost:3001/ambilRenaksiJadwalDiubah").then(
      //      (result) => {
      //        result.data.map((item) => {
      //          if (
      //            moment(item.end_date).format("YYYY") ===
      //            moment().format("YYYY")
      //          ) {
      //            setDataRenaksi((nextData) => {
      //              return [...nextData, item];
      //            });
      //          }
      //        });
      //      }
      //    )
      //  ),
    },

    {
      id: 3,
      status: "Sementara",
      //  onclick: () => (
      //    setDataRenaksi([]),
      //    Axios.get("http://localhost:3001/ambilRenaksiSementara").then(
      //      (result) => {
      //        result.data.map((item) => {
      //          if (
      //            moment(item.end_date).format("YYYY") ===
      //            moment().format("YYYY")
      //          ) {
      //            setDataRenaksi((nextData) => {
      //              return [...nextData, item];
      //            });
      //          }
      //        });
      //      }
      //    )
      //  ),
    },

    {
      id: 4,
      status: "Menunggu",
      //      onclick: () => (
      //        setDataRenaksi([]),
      //        Axios.get("http://localhost:3001/ambilRenaksiMenunggu").then(
      //          (result) => {
      //            result.data.map((item) => {
      //              if (
      //                moment(item.end_date).format("YYYY") ===
      //                moment().format("YYYY")
      //              ) {
      //                setDataRenaksi((nextData) => {
      //                  return [...nextData, item];
      //                });
      //              }
      //            });
      //          }
      //        )
      //      ),
      //    },

      //    {
      //      id: 5,
      //      status: "Selesai",
      //      onclick: () => (
      //        setDataRenaksi([]),
      //        Axios.get("http://localhost:3001/ambilRenaksiSelesai").then(
      //          (result) => {
      //            result.data.map((item) => {
      //              if (
      //                moment(item.end_date).format("YYYY") ===
      //                moment().format("YYYY")
      //              ) {
      //                setDataRenaksi((nextData) => {
      //                  return [...nextData, item];
      //                });
      //              }
      //            });
      //          }
      //        )
      //      ),
    },

    {
      id: 6,
      status: "Hapus",
      //  onclick: () => (
      //    setDataRenaksi([]),
      //    Axios.get("http://localhost:3001/ambilRenaksiDihapus").then(
      //      (result) => {
      //        result.data.map((item) => {
      //          if (
      //            moment(item.end_date).format("YYYY") ===
      //            moment().format("YYYY")
      //          ) {
      //            setDataRenaksi((nextData) => {
      //              return [...nextData, item];
      //            });
      //          }
      //        });
      //      }
      //    )
      //  ),
    },

    {
      id: 7,
      status: "Ditambah",
      //  onclick: () => console.log(dataRenaksi),
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(false);

  const btnFilter = () => {
    setActiveDropdown(!activeDropdown);
    // console.log(dataRenaksi);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleDaftarKegiatan}>
        <Image
          style={{ cursor: "pointer" }}
          onClick={clickBack}
          src={"/Back.svg"}
          width={50}
          height={50}
        />
        <Image src={"/DaftarKegiatan2.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>DAFTAR KEGIATAN</p>
      </div>
      <div className={styles.wrapperFilter}>
        <div className={styles.btnFilter} onClick={btnFilter}>
          <Image src={"/Filter.svg"} width={23} height={23} />
          <p>Filter</p>
        </div>
        {activeDropdown && (
          <div
            className={styles.wrapperSelectStatus}
            onClick={() => setActiveDropdown(false)}
          >
            {filter.map((item) => (
              <p key={item.id} onClick={item.onclick}>
                {item.status}
              </p>
            ))}
          </div>
        )}
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
