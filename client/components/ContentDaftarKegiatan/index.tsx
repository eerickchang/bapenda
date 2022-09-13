import Image from "next/image";
import { useState } from "react";
import ButtonAnimasi from "../ButtonAnimasi";
import styles from "./ContentDaftarkegiatan.module.css";
import data from "./data";
import { useTable, useExpanded } from "react-table";

export default function ContentDaftarKegiatan() {
  const [dataPegawai, setDataPegawai] = useState([
    {
      id: 1,
      image: <Image src="/SidebarProfile.svg" width={90} height={90} />,
      nama: "June E. Silangen,  SE, Ak, ME",
      jabatan: "Kepala Bidang  Pajak Daerah",
      pegawai: "ASN",
    },
  ]);

  const filter = [
    {
      id: 1,
      status: "Jadwal diubah",
    },

    {
      id: 2,
      status: "Sementara",
    },

    {
      id: 3,
      status: "Menunggu",
    },

    {
      id: 4,
      status: "Selesai",
    },

    {
      id: 5,
      status: "Hapus",
    },

    {
      id: 6,
      status: "Ditambah",
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeExpand, setActiveExpand] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleDaftarKegiatan}>
        <Image src={"/DaftarKegiatan2.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>DAFTAR KEGIATAN</p>
      </div>
      {dataPegawai.map((item) => (
        <div className={styles.wrapperDataPegawai} key={item.id}>
          {item.image}
          <div className={styles.wrapperTxt}>
            <p className={styles.txtNama}>{item.nama}</p>
            <p className={styles.txtJabatan}>{item.jabatan}</p>
            <p className={styles.txtPegawai}>{item.pegawai}</p>
          </div>
        </div>
      ))}
      <div className={styles.wrapperFilter}>
        <div
          className={styles.btnFilter}
          onClick={(e) => setActiveDropdown(!activeDropdown)}
        >
          <Image src={"/Filter.svg"} width={23} height={23} />
          <p>Filter</p>
        </div>
        {activeDropdown && (
          <div
            className={styles.wrapperSelectStatus}
            onClick={() => setActiveDropdown(false)}
          >
            {filter.map((item) => (
              <p key={item.id}>{item.status}</p>
            ))}
          </div>
        )}
      </div>

      <table className={styles.tablee}>
        <thead className={styles.headerTable}>
          <tr>
            <td width={50}>Program</td>
            <td>Kegiatan</td>
            <td>Sub Kegiatan</td>
            <td>Tupoksi Inti</td>
            <td>Rekan</td>
            <td>Rencana</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody className={styles.table}>
          {data.map((val) => (
            <>
              <tr
                className={styles.tableTr}
                key={val.id}
                onClick={() => setActiveExpand(!activeExpand)}
              >
                <td>{val.program}</td>
                <td>{val.kegiatan}</td>
                <td>{val.subKegiatan}</td>
                <td>{val.tupoksiinti}</td>
                <td>{val.rekan}</td>
                <td>{val.rencana}</td>
                <td>{val.status}</td>
              </tr>
              {activeExpand && (
                <div className={styles.wrapperExpandableRow}>
                  <button className={styles.btnUnggah}>
                    <img src={"/Batal.svg"} width={20} height={20} />
                    <p className={styles.txt}>Unggah</p>
                  </button>

                  <button className={styles.btnUbahJadwal}>
                    <img src={"/Batal.svg"} width={20} height={20} />
                    <p className={styles.txt}>Ubah Jadwal</p>
                  </button>

                  <button className={styles.btnHapus}>
                    <img src={"/Batal.svg"} width={20} height={20} />
                    <p className={styles.txt}>Hapus</p>
                  </button>
                </div>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
