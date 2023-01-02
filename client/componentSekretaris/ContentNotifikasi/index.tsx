import React, { useState } from "react";
import Image from "next/future/image";
import styles from "./contentNotifikasi.module.css";
import Gap from "../Gap";

export default function ContentNotifikasi() {
  const data = [
    {
      id: 1,
      nama: "Olvie Atteng S.E., M.SI.",
      jabatan: "Kepala Bagian",
      pesan: "Reschedule dapat diterima lanjutkan kegiatan dengan baik",
      ketWaktu: "08.00 Pagi, 12 Juli 2022",
      keterangan: "Diterima",
      image: <Image src="/SidebarProfile.svg" width={90} height={90} style={{marginTop: 35}} />,
    },
    {
      id: 2,
      nama: "Allong Waani Spd.",
      jabatan: "Dalev - Admin",
      pesan:
        " Kegiatan tidak bisa di hapus dan harus segera dilaksanakan karena jumlah anggaran....",
      ketWaktu: "09.00 Pagi, 14 Juli 2022",
      keterangan: "Ditolak",
      image: <Image src="/SidebarProfile.svg" width={90} height={90} style={{marginTop: 35}} />,
    },
  ];
  return (
    <div className={styles.container}>
      <Gap height={50} width={0} />
      <div className={styles.wrapperTitleInputRenaksi}>
        <Image src={"/IconNotif.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>Notifikasi</p>
      </div>
      <Gap height={40} width={0} />
      {data.map((item) => (
        <div key={item.id} className={styles.wrapperNotif}>
          <div className={styles.contentNotif}>
            {item.image}
            <div className={styles.contentTengah}>
              <p className={styles.txtNama}>{item.nama}</p>
              <p className={styles.txtJabatan}>{item.jabatan}</p>
              <p className={styles.txtPesan}>{item.pesan}</p>
            </div>
            <div
              style={{
                flexDirection: "column",
                marginLeft: 100,
                position: "absolute",
                right: 80,
              }}
            >
              <p
                style={{
                  fontWeight: 500,
                  fontFamily: "Poppins",
                  color: "rgba(0, 45, 161, 1)",
                }}
              >
                08.00 Pagi, 12 juli 2022
              </p>
              <div className={styles.styleStatusDiterima}>Menunggu Diterima</div>
            </div>
          </div>
        </div>
      ))}
      {data.map((item) => (
        <div key={item.id} className={styles.wrapperNotif}>
          <div className={styles.contentNotif}>
            {item.image}
            <div className={styles.contentTengah}>
              <p className={styles.txtNama}>{item.nama}</p>
              <p className={styles.txtJabatan}>{item.jabatan}</p>
              <p className={styles.txtPesan}>{item.pesan}</p>
            </div>
            <div
              style={{
                flexDirection: "column",
                marginLeft: 100,
                position: "absolute",
                right: 80,
              }}
            >
              <p
                style={{
                  fontWeight: 500,
                  fontFamily: "Poppins",
                  color: "rgba(0, 45, 161, 1)",
                }}
              >
                08.00 Pagi, 12 juli 2022
              </p>
              <div className={styles.styleStatusDitolak}>Penghapusan Renaksi</div>
            </div>
          </div>
        </div>
      ))}{data.map((item) => (
        <div key={item.id} className={styles.wrapperNotif}>
          <div className={styles.contentNotif}>
            {item.image}
            <div className={styles.contentTengah}>
              <p className={styles.txtNama}>{item.nama}</p>
              <p className={styles.txtJabatan}>{item.jabatan}</p>
              <p className={styles.txtPesan}>{item.pesan}</p>
            </div>
            <div
              style={{
                flexDirection: "column",
                marginLeft: 100,
                position: "absolute",
                right: 80,
              }}
            >
              <p
                style={{
                  fontWeight: 500,
                  fontFamily: "Poppins",
                  color: "rgba(0, 45, 161, 1)",
                }}
              >
                08.00 Pagi, 12 juli 2022
              </p>
              <div className={styles.styleStatusSelesai}>Ubah Jadwal</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
