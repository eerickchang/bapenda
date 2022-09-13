// import Image from "next/image";
// import { useState } from "react";
import stylesS from "./ContentDaftarkegiatan.module.css";
// import data from "./data";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import styles from "./TableMUI.module.css";
import { height } from "@mui/system";
import Image from "next/image";

import Modal from "react-modal";
import Gap from "../Gap";
import Button from "../Button";
import btnStyles from "../Button/button.module.css";

const rows = [
  {
    id: 1,
    name: "anggursss",
    calories: 20,
    fat: 42,
    carbs: 69,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 80,
    protein2: 80,
  },
  {
    id: 2,
    name: "anggur",
    calories: 90,
    fat: 82,
    carbs: 79,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 60,
    protein2: 60,
  },
  {
    id: 3,
    name: "urusss",
    calories: 50,
    fat: 42,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 20,
    protein2: 20,
  },
  {
    id: 4,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
  {
    id: 4,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
  {
    id: 4,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
];

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  // ? CUSTOM STYLE MODAL UNGGAH N HAPUS RENAKSI
  const custom = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 878,
      borderRadius: 20,
      paddingLeft: 61,
      height: 362,
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overlay: "#112350",
      backgroundColor: "white",
      zIndex: 1001,
      scroll: false,
    },
    overlay: {
      position: "fixed",
      marginTop: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(17, 35, 80, 0.5)",
      zIndex: 1000,
    },
  };

  // ? CUSTOM STYLE MODAL UBAH JADWAL RENAKSI
  const customUbah = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 878,
      borderRadius: 20,
      paddingLeft: 61,
      height: 433,
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overlay: "#112350",
      backgroundColor: "white",
      zIndex: 1001,
      scroll: false,
    },
    overlay: {
      position: "fixed",
      marginTop: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(17, 35, 80, 0.5)",
      zIndex: 1000,
    },
  };

  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalUbahJadwalIsOpen, setIsOpenModalUbahJadwal] = useState(false);
  const [modalHapusRenaksiIsOpen, setIsOpenMOdalHapusRenaksi] = useState(false);

  // ! MODAL UNGGAH LAPORAN
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // ! MODAL UBAH JADAWAL
  function openModalUbah() {
    setIsOpenModalUbahJadwal(true);
  }

  function afterOpenModalUbah() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModalUbah() {
    setIsOpenModalUbahJadwal(false);
  }

  // ! MODAL HAPUS RENAKSI
  function openModalHapus() {
    setIsOpenMOdalHapusRenaksi(true);
  }

  function afterOpenModalHapus() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModalHapus() {
    setIsOpenMOdalHapusRenaksi(false);
  }

  return (
    <React.Fragment>
      <TableRow
        className={styles.tableRow}
        onClick={() => setOpen(!open)}
        sx={{ "& > *": { borderBottom: "" } }}
      >
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.calories}</TableCell>
        <TableCell>{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell>{row.protein}</TableCell>
        <TableCell>{row.protein1}</TableCell>
        <TableCell>{row.protein2}</TableCell>
      </TableRow>
      <Collapse in={open} timeout="auto">
        <TableBody>
          <TableRow>
            <div className={styles.wrapperContentModal}>
              <div className={styles.wrapperTitleBtn}>
                <p className={styles.titleBtnUnggah}>Unggah Bukti Laporan</p>
                <button
                  onClick={() => openModal()}
                  className={styles.btnUnggah}
                >
                  <img src={"/Batal.svg"} width={20} height={20} />
                  <p className={styles.txt}>Unggah</p>
                </button>
              </div>
              <Gap width={87} height={0} />
              <div>
                <p className={styles.p}>Ubah Jadwal Renaksi</p>
                <button
                  onClick={() => openModalUbah()}
                  className={styles.btnUbahJadwal}
                >
                  <img src={"/UbahJadwalIcon.svg"} width={20} height={20} />
                  <p className={styles.txt}>Ubah Jadwal</p>
                </button>
              </div>
              <Gap width={750} height={0} />
              <div>
                <p className={styles.p}>Hapus Renaksi</p>
                <button
                  onClick={() => openModalHapus()}
                  className={styles.btnHapus}
                >
                  <img src={"/HapusIcon.svg"} width={20} height={20} />
                  <p className={styles.txt}>Hapus</p>
                </button>
              </div>
            </div>
          </TableRow>
        </TableBody>
      </Collapse>

      {/* MODAL UNGGAH LAPORAN */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={custom}
        contentLabel="Example Modal"
      >
        <h2 className={styles.headerTxtModal}>Unggah Laporan Bukti</h2>
        <Gap height={20} width={0} />
        <input
          className={styles.inputBuktiLap}
          placeholder="Tambah keterangan untuk lampiran bukti"
        />
        <Gap height={20} width={0} />
        <div className={styles.wrapperBtnModal}>
          <Button title="Pilih File" className={`${btnStyles.btnPilihFile}`} />
          <Gap width={193} height={0} />
          <button className={styles.btnKirim}>
            <img src={"/Kirim.svg"} width={20} height={20} />
            <p className={styles.txt}>Kirim</p>
          </button>
          <Gap width={24} height={0} />
          <button className={styles.btnBatal}>
            <img src={"/Batal.svg"} width={20} height={20} />
            <p>Batal</p>
          </button>
        </div>
      </Modal>

      {/* MODAL UBAH JADWAL */}
      <Modal
        isOpen={modalUbahJadwalIsOpen}
        onAfterOpen={afterOpenModalUbah}
        onRequestClose={closeModalUbah}
        style={customUbah}
        contentLabel="Example Modal"
      >
        <h2 className={styles.headerTxtModal}>Pengajuan Ubah Jadwal</h2>
        <input
          className={styles.inputBuktiLap_Ubah}
          placeholder="Tambah keterangan untuk mengubah jadwal"
        />
        <Button title="Pilih File" className={`${btnStyles.btnPilihFile}`} />
        {/* <div className={styles.wrapperBtnModal}> */}
        <Gap width={0} height={24} />
        <button className={styles.btnKirim_Ubah}>
          <img src={"/Kirim.svg"} width={20} height={20} />
          <p className={styles.txt}>Kirim</p>
        </button>
        <Gap width={0} height={10} />
        <button className={styles.btnBatal_Ubah}>
          <img src={"/Batal.svg"} width={20} height={20} />
          <p>Batal</p>
        </button>
        {/* </div> */}
      </Modal>

      {/* MODAL HAPUS RENAKSI */}
      <Modal
        isOpen={modalHapusRenaksiIsOpen}
        onAfterOpen={afterOpenModalHapus}
        onRequestClose={closeModalHapus}
        style={custom}
        contentLabel="Example Modal"
      >
        <h2 className={styles.headerTxtModal}>
          Pengajuan Penghapusan Renaksi{" "}
        </h2>
        <Gap height={20} width={0} />
        <input
          className={styles.inputBuktiLap}
          placeholder="Tambah keterangan untuk menghapus renaksi"
        />
        <Gap height={20} width={0} />
        <div className={styles.wrapperBtnModal}>
          <Button title="Pilih File" className={`${btnStyles.btnPilihFile}`} />
          <Gap width={193} height={0} />
          <button className={styles.btnKirim}>
            <img src={"/Kirim.svg"} width={20} height={20} />
            <p className={styles.txt}>Kirim</p>
          </button>
          <Gap width={24} height={0} />
          <button className={styles.btnBatal}>
            <img src={"/Batal.svg"} width={20} height={20} />
            <p>Batal</p>
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
}

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

  return (
    <div className={stylesS.wrap}>
      <div className={stylesS.container}>
        <div className={stylesS.wrapperTitleDaftarKegiatan}>
          <Image src={"/DaftarKegiatan2.svg"} width={50} height={50} />
          <p className={stylesS.txtTitle}>DAFTAR KEGIATAN</p>
        </div>
        {dataPegawai.map((item) => (
          <div className={stylesS.wrapperDataPegawai} key={item.id}>
            {item.image}
            <div className={stylesS.wrapperTxt}>
              <p className={stylesS.txtNama}>{item.nama}</p>
              <p className={stylesS.txtJabatan}>{item.jabatan}</p>
              <p className={stylesS.txtPegawai}>{item.pegawai}</p>
            </div>
          </div>
        ))}
        <div className={stylesS.wrapperFilter}>
          <div
            className={stylesS.btnFilter}
            onClick={(e) => setActiveDropdown(!activeDropdown)}
          >
            <Image src={"/Filter.svg"} width={23} height={23} />
            <p>Filter</p>
          </div>
          {activeDropdown && (
            <div
              className={stylesS.wrapperSelectStatus}
              onClick={() => setActiveDropdown(false)}
            >
              {filter.map((item) => (
                <p key={item.id}>{item.status}</p>
              ))}
            </div>
          )}
        </div>
      </div>
      <Gap height={106} width={0} />
      <TableContainer
        style={{ paddingLeft: 50, paddingRight: 40, zIndex: 998 }}
      >
        {/* <Typography className={styles.wrapperTitleInputRenaksi}>
              <Image src={"/Input2.svg"} width={50} height={50} />
              <p className={styles.txtTitle}>DAFTAR KEGIATAN</p>
            </Typography> */}
        <Table sx={{ tableLayout: "fixed" }}>
          <TableHead>
            <TableRow>
              <TableCell className={styles.headerTable} width={0}>
                Program
              </TableCell>
              <TableCell className={styles.headerTable} width={0}>
                Kegiatan
              </TableCell>
              <TableCell className={styles.headerTable} width={0}>
                Sub Kegiatan
              </TableCell>
              <TableCell className={styles.headerTable} width={0}>
                Tupoksi
              </TableCell>
              <TableCell className={styles.headerTable} width={0}>
                Rekan
              </TableCell>
              <TableCell className={styles.headerTable} width={0}>
                Rencana
              </TableCell>
              <TableCell className={styles.headerTable} width={0}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

// <table className={styles.tablee}>
//   <thead className={styles.headerTable}>
//     <tr>
//       <td width={50}>Program</td>
//       <td>Kegiatan</td>
//       <td>Sub Kegiatan</td>
//       <td>Tupoksi Inti</td>
//       <td>Rekan</td>
//       <td>Rencana</td>
//       <td>Status</td>
//     </tr>
//   </thead>
//   <tbody className={styles.table}>
//     {data.map((val) => (
//       <>
//         <tr
//           className={styles.tableTr}
//           key={val.id}
//           onClick={() => setActiveExpand(!activeExpand)}
//         >
//           <td>{val.program}</td>
//           <td>{val.kegiatan}</td>
//           <td>{val.subKegiatan}</td>
//           <td>{val.tupoksiinti}</td>
//           <td>{val.rekan}</td>
//           <td>{val.rencana}</td>
//           <td>{val.status}</td>
//         </tr>
//         {activeExpand && (
//           <div className={styles.wrapperExpandableRow}>
//             <button className={styles.btnUnggah}>
//               <img src={"/Batal.svg"} width={20} height={20} />
//               <p className={styles.txt}>Unggah</p>
//             </button>

//             <button className={styles.btnUbahJadwal}>
//               <img src={"/Batal.svg"} width={20} height={20} />
//               <p className={styles.txt}>Ubah Jadwal</p>
//             </button>

//             <button className={styles.btnHapus}>
//               <img src={"/Batal.svg"} width={20} height={20} />
//               <p className={styles.txt}>Hapus</p>
//             </button>
//           </div>
//         )}
//       </>
//     ))}
//   </tbody>
// </table>
