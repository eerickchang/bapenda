import Image from "next/image";
import { useState } from "react";
import ButtonAnimasi from "../ButtonAnimasi";
import styles from "./ContentDaftarkegiatan.module.css";

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

  const [filter, setFilter] = useState([
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
  ]);

  const [activeDropdown, setActiveDropdown] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleDaftarKegiatan}>
        <Image src={"/DaftarKegiatan2.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>Daftar Kegiatan</p>
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
          <div className={styles.wrapperSelectStatus} onClick={() => setActiveDropdown(false)}>
            {filter.map((item) => (
              <p key={item.id}>{item.status}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
