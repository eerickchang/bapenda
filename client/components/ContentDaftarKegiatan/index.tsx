import stylesS from "./ContentDaftarkegiatan.module.css";

import React, { useState, useEffect, useRef } from "react";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./TableMUI.module.css";
import Image from "next/future/image";
import moment from "moment";

import Modal from "react-modal";
import Gap from "../Gap";
import btnStyles from "../Button/button.module.css";
import Axios from "axios";
import { positions } from "@mui/system";

Axios.defaults.withCredentials = true;

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

  const customModalTutup = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 550,
      height: 250,
      borderRadius: 20,
      paddingTop: 20,
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

  //style row
  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");

  const [file, setFile] = useState(null);
  const [ketPegawai, setKetPegawai] = useState("");
  const [image, setImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalUbahJadwalIsOpen, setIsOpenModalUbahJadwal] = useState(false);
  const [modalHapusRenaksiIsOpen, setIsOpenMOdalHapusRenaksi] = useState(false);
  //!modals
  const [showModal, setShowModal] = useState(false);
  const [showModal_Ubah, setShowModal_Ubah] = useState(false);
  const [showModal_Hapus, setShowModal_Hapus] = useState(false);

  const btnUnggah = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const btnUbah = () => {
    setShowModal_Ubah(true);
    setTimeout(() => {
      setShowModal_Ubah(false);
    }, 3000);
  };

  const btnHapus = () => {
    setShowModal_Hapus(true);
    setTimeout(() => {
      setShowModal_Hapus(false);
    }, 3000);
  };

  // ! MODAL UNGGAH LAPORAN
  function openModal() {
    setIsOpen(true);
    setFile(null);
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
    setFile(null);
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
    setFile(null);
  }

  function afterOpenModalHapus() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModalHapus() {
    setIsOpenMOdalHapusRenaksi(false);
  }

  const btnUnggahExp = () => {
    const data = new FormData();
    data.append("file", file);

    Axios.post("http://localhost:3001/uploadFile", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          Axios.post("http://localhost:3001/unggahLaporan", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
            fileURL: response.data.file,
          }).then((unggahLaporan) => {
            console.log(unggahLaporan);
          });
        } else {
          Axios.post("http://localhost:3001/unggahLaporan", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
          }).then((unggahLaporan) => {
            console.log(unggahLaporan);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    closeModal();
    btnUnggah();

    window.location.reload();
  };

  const btnUbahJadwalExp = () => {
    const data = new FormData();
    data.append("file", file);

    Axios.post("http://localhost:3001/uploadFile", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          Axios.post("http://localhost:3001/ubahJadwal", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
            fileURL: response.data.file,
            startDate: startDate,
            endDate: endDate,
          }).then((ubahJadwal) => {
            console.log(ubahJadwal);
          });
        } else {
          Axios.post("http://localhost:3001/ubahJadwal", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
            startDate: startDate,
            endDate: endDate,
          }).then((ubahJadwal) => {
            console.log(ubahJadwal);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    closeModalUbah();
    btnUbah();
    window.location.reload();
  };

  const btnHapusExp = () => {
    const data = new FormData();
    data.append("file", file);

    Axios.post("http://localhost:3001/uploadFile", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          Axios.post("http://localhost:3001/hapusRenaksi", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
            fileURL: response.data.file,
          }).then((hapusRenaksi) => {
            console.log(hapusRenaksi);
          });
        } else {
          Axios.post("http://localhost:3001/hapusRenaksi", {
            idRenaksi: row.id_renaksi,
            ketPegawai: ketPegawai,
          }).then((hapusRenaksi) => {
            console.log(hapusRenaksi);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    closeModalHapus();
    btnHapus();

    window.location.reload();
  };

  const styleCollapse = {
    background: "rgba(232, 232, 232, 1)",
    borderTopColor: "rgba(165, 165, 165, 0.5)",
    borderTopWidth: 2,
    borderTopStyle: "solid",
    marginBottom: 2,
  };
  return (
    <React.Fragment>
      {row.kirim_ke == "Staff" ? ( //DITOLAK
        <>
          <TableRow
            className={`${styles.tableRow} ${styleRow}`}
            onClick={() => {
              setOpen(!open);
              {
                rowClik
                  ? (setStyleRow(`${styles.tableRow} ${styles.tableRowClick}`),
                    setRowClick(!rowClik))
                  : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
              }
            }}
            sx={{ "& > *": { borderBottom: "" } }}
          >
            {/* DATA ROW */}
            <TableCell>
              <p className={stylesS.styleTxtRowDitolak}>{row.program}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRowDitolak}>{row.kegiatan}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRowDitolak}>{row.sub_kegiatan}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTupoksiDitolak}>Inti</p>
              <p className={stylesS.styleTxtRowDitolak}>{row.tupoksi_inti}</p>
              <p className={stylesS.styleTupoksiTambahanDitolak}>Tambahan</p>
              <p className={stylesS.styleTxtRowDitolak}>
                {row.tupoksi_tambahan}
              </p>
            </TableCell>
            <TableCell>
              {row.thl === null ? null : (
                <div
                  style={{ display: "flex", padding: 0, alignItems: "center" }}
                >
                  {row.foto_thl != "" ? (
                    <Image
                      src={row.foto_thl}
                      // src={"/SidebarProfile.svg"}
                      width={40}
                      height={40}
                      alt="User 2"
                      style={{ borderRadius: 40 }}
                    />
                  ) : (
                    <Image
                      src={"/SidebarProfile.svg"}
                      width={40}
                      height={40}
                      alt="User 2"
                      style={{ borderRadius: 40 }}
                    />
                  )}
                  <div style={{ marginLeft: 10 }}>
                    <p className={stylesS.rekanNama}>{row.nama_thl}</p>
                    <p className={stylesS.rekanPegawai}>THL</p>
                  </div>
                </div>
              )}
            </TableCell>
            <TableCell>
              {/* ambil data rencana */}
              <p className={stylesS.styleTxtRowRencanaDitolak}>
                {moment(row.start_date).format("MMM")} -{" "}
                {moment(row.end_date).format("MMM")}
              </p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRowDitolak}>Ditolak</p>
              {row.status == "Menunggu Renaksi Diterima" ? (
                <p className={styles.descDT}>Renaksi Ditolak</p>
              ) : row.status == "Menunggu Jadwal Diubah" ? (
                <p className={styles.descDT}>Pengajuan Ubah Jadwal Ditolak</p>
              ) : row.status == "Menunggu Renaksi Dihapus" ? (
                <p className={styles.descDT}>
                  Pengajuan Penghapusan Renaksi Ditolak
                </p>
              ) : row.status == "Selesai" ? (
                <p className={styles.descDT}>Lampiran Bukti Ditolak</p>
              ) : null}
            </TableCell>
          </TableRow>
          <TableCell style={{ padding: 0, width: 2000 }} colSpan={7}>
            <Collapse sx={styleCollapse} in={open} timeout="auto">
              <div className={styles.wrapperContentModal}>
                <div className={styles.wrapperFeedback}>
                  <div className={styles.contentFeedback}>
                    <div className={styles.profilePengirim}>
                      <Image
                        src={"/SidebarProfile.svg"}
                        width={40}
                        height={40}
                      />
                      <p>
                        <b>Kasubid</b> - Andre Waani
                      </p>
                    </div>
                    <div className={styles.feedback}>
                      <p>{row.ket_admin}</p>
                      <div className={styles.wrapInput}>
                        <input
                          className={styles.inputBalasan}
                          placeholder="Balas"
                        />
                        <div
                          style={{
                            position: "relative",
                            marginTop: 8,
                            marginLeft: -80,
                            zIndex: 20,
                          }}
                        >
                          <Image
                            src={"/Lampiran.svg"}
                            width={21}
                            height={23}
                            style={{ marginRight: 20, cursor: "pointer" }}
                          />
                          <Image
                            src={"/KirimFeedback.svg"}
                            width={24}
                            height={24}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </div>
                      {row.tupoksi_tambahan == "Labelling" ? ( //!CUMAN ADA TES. 
                        <Image
                          src={"/IconPDF.svg"}
                          width={34}
                          height={34}
                          style={{
                            cursor: "pointer",
                            position: "relative",
                            marginLeft: 540,
                            top: -38,
                          }}
                        />
                      ) : (
                        <Image
                          src={"/PDF.svg"}
                          width={34}
                          height={34}
                          style={{
                            cursor: "pointer",
                            position: "relative",
                            marginLeft: 540,
                            top: -38,
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className={styles.wrapperTitleBtnDT}>
                    <p className={styles.titleBtnTutup}>Tutup Laporan</p>
                    <button
                      onClick={() => openModal()}
                      className={styles.btnUnggahDT}
                    >
                      <p className={styles.txt}>Tutup</p>
                    </button>
                  </div>
                </div>
              </div>

              {/* ? MODAL UNGGAH LAPORAN */}
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customModalTutup}
                contentLabel="Example Modal"
              >
                <h2 className={styles.headerTxtModal}>Tutup Renaksi</h2>
                <h2 className={styles.dialog}>
                  Apakah anda yakin ingin tutup renaksi?
                </h2>
                <Gap height={20} width={0} />
                <div className={styles.wrapperBtnModal}>
                  {/* <Gap width={193} height={0} /> */}
                  <button
                    onClick={() => {
                      closeModal();
                      // router.push("/");
                    }}
                    className={styles.btnYa}
                  >
                    <p className={styles.txt}>Ya</p>
                  </button>
                  {/* <Gap width={24} height={0} /> */}
                  <button onClick={closeModal} className={styles.btnTidak}>
                    <p>Tidak</p>
                  </button>
                </div>
              </Modal>
            </Collapse>
          </TableCell>
        </>
      ) : // </TableRow>
      row.status != "Selesai" ? (
        <>
          <TableRow
            className={`${styles.tableRow} ${styleRow}`}
            onClick={() => {
              setOpen(!open);
              {
                rowClik
                  ? (setStyleRow(`${styles.tableRow} ${styles.tableRowClick}`),
                    setRowClick(!rowClik))
                  : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
              }
            }}
            sx={{ "& > *": { borderBottom: "" } }}
          >
            {/* //! DATA ROW */}
            <TableCell>
              <p className={stylesS.styleTxtRowBS}>{row.program}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRowBS}>{row.kegiatan}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRowBS}>{row.sub_kegiatan}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTupoksiBS}>Inti</p>
              <p className={stylesS.styleTxtRowBS}>{row.tupoksi_inti}</p>
              <p className={stylesS.styleTupoksiTambahanBS}>Tambahan</p>
              <p className={stylesS.styleTxtRowBS}>{row.tupoksi_tambahan}</p>
            </TableCell>
            <TableCell>
              {row.thl === null ? null : (
                <div
                  style={{ display: "flex", padding: 0, alignItems: "center" }}
                >
                  {row.foto_thl != "" ? (
                    <Image
                      src={row.foto_thl}
                      // src={"/SidebarProfile.svg"}
                      width={40}
                      height={40}
                      alt="User 2"
                      style={{ borderRadius: 40 }}
                    />
                  ) : (
                    <Image
                      src={"/SidebarProfile.svg"}
                      width={40}
                      height={40}
                      alt="User 2"
                      style={{ borderRadius: 40 }}
                    />
                  )}
                  <div style={{ marginLeft: 10 }}>
                    <p className={stylesS.rekanNama}>{row.nama_thl}</p>
                    <p className={stylesS.rekanPegawai}>THL</p>
                  </div>
                </div>
              )}
            </TableCell>
            <TableCell>
              {/* ambil data rencana */}
              <p className={stylesS.styleTxtRowRencanaBS}>
                {moment(row.start_date).format("MMM")} -{" "}
                {moment(row.end_date).format("MMM")}
              </p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRowBS}>{row.status}</p>
            </TableCell>
          </TableRow>
          <TableCell style={{ padding: 0, width: 2000 }} colSpan={7}>
            <Collapse sx={styleCollapse} in={open} timeout="auto">
              <div className={styles.wrapperContentModal}>
                <div className={styles.wrapperTitleBtn}>
                  <p className={styles.titleBtnUnggah}>Unggah Bukti Laporan</p>
                  <button
                    onClick={() => openModal()}
                    className={styles.btnUnggah}
                  >
                    <img src={"/Kirim.svg"} width={20} height={20} />
                    <p className={styles.txt}>Unggah</p>
                  </button>
                </div>
                <Gap width={137} height={0} />
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
                <Gap width={700} height={0} />
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
              {/* //? MODAL UNGGAH LAPORAN */}
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
                  onChange={(e) => setKetPegawai(e.target.value)}
                />
                <Gap height={30} width={0} />
                <div className={styles.wrapperBtnModal}>
                  <form action="#">
                    <label htmlFor="file">
                      <div className={`${btnStyles.btnPilihFile}`}>
                        Pilih File
                      </div>
                    </label>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      name="sampleFile"
                    />
                  </form>
                  {file != null ? (
                    <div className={styles.iconPDF}>
                      <Image
                        src={"/IconPDF.svg"}
                        width={25}
                        height={25}
                        alt="PDF"
                      />
                    </div>
                  ) : null}
                  <Gap width={193} height={0} />
                  <button onClick={btnUnggahExp} className={styles.btnKirim}>
                    <img src={"/Kirim.svg"} width={20} height={20} />
                    <p>Kirim</p>
                  </button>
                  <Gap width={24} height={0} />
                  <button onClick={closeModal} className={styles.btnBatal}>
                    <img src={"/Batal.svg"} width={20} height={20} />
                    <p>Batal</p>
                  </button>
                </div>
              </Modal>
              {showModal ? (
                <div
                  className={styles.modal}
                  onClick={() => setShowModal(false)}
                >
                  <p>
                    Lampiran Kegiatan Berhasil <b>Diunggah</b>
                    <div className={styles.checkCircle}>
                      <Image src={"/Check-circle.svg"} width={25} height={25} />
                    </div>
                  </p>
                </div>
              ) : null}

              {/* //?  MODAL UBAH JADWAL */}
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
                  onChange={(e) => setKetPegawai(e.target.value)}
                />
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    marginTop: -10,
                  }}
                >
                  <div className={styles.wrapperPickMonth}>
                    <div>
                      <p>Dari tanggal*</p>
                      <input
                        type="month"
                        onChange={(e) => setStartDate(e.target.value + "-01")}
                      />
                    </div>
                    <div style={{ marginRight: 88, marginLeft: 50 }}>
                      <p>Sampai tanggal*</p>
                      <input
                        type="month"
                        onChange={(e) => setEndDate(e.target.value + "-01")}
                      />
                    </div>
                  </div>
                  <form action="#">
                    <label htmlFor="file">
                      <div className={`${btnStyles.btnPilihFile}`}>
                        Pilih File
                      </div>
                    </label>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      name="sampleFile"
                    />
                  </form>
                  {file != null ? (
                    <div className={styles.iconPDFUbah}>
                      <Image
                        src={"/IconPDF.svg"}
                        width={25}
                        height={25}
                        alt="PDF"
                      />
                    </div>
                  ) : null}
                </div>
                <Gap width={0} height={24} />
                <button
                  onClick={btnUbahJadwalExp}
                  className={styles.btnKirim_Ubah}
                >
                  <img src={"/Kirim.svg"} width={20} height={20} />
                  <p>Kirim</p>
                </button>
                <Gap width={0} height={10} />
                <button
                  onClick={closeModalUbah}
                  className={styles.btnBatal_Ubah}
                >
                  <img src={"/Batal.svg"} width={20} height={20} />
                  <p>Batal</p>
                </button>
              </Modal>
              {showModal_Ubah ? (
                <div
                  className={styles.modal_Ubah}
                  onClick={() => setShowModal_Ubah(false)}
                >
                  <p>
                    Pengajuan Penjadwalan Ulang berhasil <b>Diubah</b>
                    <div className={styles.checkCircle_Ubah}>
                      <Image src={"/Check-circle.svg"} width={25} height={25} />
                    </div>
                  </p>
                </div>
              ) : null}

              {/* //?  MODAL HAPUS RENAKSI */}
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
                  onChange={(e) => setKetPegawai(e.target.value)}
                />
                <Gap height={20} width={0} />
                <div className={styles.wrapperBtnModal}>
                  <form action="#">
                    <label htmlFor="file">
                      <div className={`${btnStyles.btnPilihFile}`}>
                        Pilih File
                      </div>
                    </label>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      name="sampleFile"
                    />
                  </form>
                  {file != null ? (
                    <div className={styles.iconPDF}>
                      <Image
                        src={"/IconPDF.svg"}
                        width={25}
                        height={25}
                        alt="PDF"
                      />
                    </div>
                  ) : null}
                  <Gap width={193} height={0} />
                  <button onClick={btnHapusExp} className={styles.btnKirim}>
                    <img src={"/Kirim.svg"} width={20} height={20} />
                    <p>Kirim</p>
                  </button>
                  <Gap width={24} height={0} />
                  <button onClick={closeModalHapus} className={styles.btnBatal}>
                    <img src={"/Batal.svg"} width={20} height={20} />
                    <p>Batal</p>
                  </button>
                </div>
              </Modal>
              {showModal_Hapus ? (
                <div
                  className={styles.modal_Hapus}
                  onClick={() => setShowModal_Hapus(false)}
                >
                  <p>
                    Pengajuan Hapus Renaksi Berhasil <b>Diunggah</b>
                    <div className={styles.checkCircle_Hapus}>
                      <Image src={"/Check-circle.svg"} width={25} height={25} />
                    </div>
                  </p>
                </div>
              ) : null}
            </Collapse>
          </TableCell>
        </>
      ) : (
        <>
          <TableRow
            className={`${styles.tableRow} ${styleRow}`}
            onClick={() => {
              setOpen(!open);
              {
                rowClik
                  ? (setStyleRow(`${styles.tableRow} ${styles.tableRowClick}`),
                    setRowClick(!rowClik))
                  : (setStyleRow(styles.tableRow), setRowClick(!rowClik));
              }
            }}
            sx={{ "& > *": { borderBottom: "" } }}
          >
            {/* //! DATA ROW */}
            <TableCell>
              <p className={stylesS.styleTxtRow}>{row.program}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRow}>{row.kegiatan}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRow}>{row.sub_kegiatan}</p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTupoksi}>Inti</p>
              <p className={stylesS.styleTxtRow}>{row.tupoksi_inti}</p>
              <p className={stylesS.styleTupoksiTambahan}>Tambahan</p>
              <p className={stylesS.styleTxtRow}>{row.tupoksi_tambahan}</p>
            </TableCell>
            <TableCell>
              {row.thl === null ? null : (
                <div
                  style={{ display: "flex", padding: 0, alignItems: "center" }}
                >
                  {row.foto_thl != "" ? (
                    <Image
                      src={row.foto_thl}
                      // src={"/SidebarProfile.svg"}
                      width={40}
                      height={40}
                      alt="User 2"
                      style={{ borderRadius: 40 }}
                    />
                  ) : (
                    <Image
                      src={"/SidebarProfile.svg"}
                      width={40}
                      height={40}
                      alt="User 2"
                      style={{ borderRadius: 40 }}
                    />
                  )}
                  <div style={{ marginLeft: 10 }}>
                    <p className={stylesS.rekanNama}>{row.nama_thl}</p>
                    <p className={stylesS.rekanPegawai}>THL</p>
                  </div>
                </div>
              )}
            </TableCell>
            <TableCell>
              {/* ambil data rencana */}
              <p className={stylesS.styleTxtRowRencana}>
                {moment(row.start_date).format("MMM")} -{" "}
                {moment(row.end_date).format("MMM")}
              </p>
            </TableCell>
            <TableCell>
              <p className={stylesS.styleTxtRow}>{row.status}</p>
            </TableCell>
          </TableRow>
          <TableCell style={{ padding: 0, width: 2000 }} colSpan={7}>
            <Collapse sx={styleCollapse} in={open} timeout="auto">
              <div className={styles.wrapperContentModal}>
                <div className={styles.wrapperTitleBtn}>
                  <p className={styles.titleBtnUnggah}>Unggah Bukti Laporan</p>
                  <button
                    onClick={() => openModal()}
                    className={styles.btnUnggah}
                  >
                    <img src={"/Kirim.svg"} width={20} height={20} />
                    <p className={styles.txt}>Unggah</p>
                  </button>
                </div>
                <Gap width={137} height={0} />
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
                <Gap width={700} height={0} />
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
              {/* ? MODAL UNGGAH LAPORAN */}
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
                  onChange={(e) => setKetPegawai(e.target.value)}
                />
                <Gap height={30} width={0} />
                <div className={styles.wrapperBtnModal}>
                  <form action="#">
                    <label htmlFor="file">
                      <div className={`${btnStyles.btnPilihFile}`}>
                        Pilih File
                      </div>
                    </label>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      name="sampleFile"
                    />
                  </form>
                  {file != null ? (
                    <div className={styles.iconPDF}>
                      <Image
                        src={"/IconPDF.svg"}
                        width={25}
                        height={25}
                        alt="PDF"
                      />
                    </div>
                  ) : null}
                  <Gap width={193} height={0} />
                  <button onClick={btnUnggahExp} className={styles.btnKirim}>
                    <img src={"/Kirim.svg"} width={20} height={20} />
                    <p>Kirim</p>
                  </button>
                  <Gap width={24} height={0} />
                  <button onClick={closeModal} className={styles.btnBatal}>
                    <img src={"/Batal.svg"} width={20} height={20} />
                    <p>Batal</p>
                  </button>
                </div>
              </Modal>
              {showModal ? (
                <div
                  className={styles.modal}
                  onClick={() => setShowModal(false)}
                >
                  <p>
                    Lampiran Kegiatan Berhasil <b>Diunggah</b>
                    <div className={styles.checkCircle}>
                      <Image src={"/Check-circle.svg"} width={25} height={25} />
                    </div>
                  </p>
                </div>
              ) : null}

              {/* ?  MODAL UBAH JADWAL */}
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
                  onChange={(e) => setKetPegawai(e.target.value)}
                />
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    marginTop: -10,
                  }}
                >
                  <div className={styles.wrapperPickMonth}>
                    <div>
                      <p>Dari tanggal*</p>
                      <input
                        type="month"
                        onChange={(e) => setStartDate(e.target.value + "-01")}
                      />
                    </div>
                    <div style={{ marginRight: 88, marginLeft: 50 }}>
                      <p>Sampai tanggal*</p>
                      <input
                        type="month"
                        onChange={(e) => setEndDate(e.target.value + "-01")}
                      />
                    </div>
                  </div>
                  <form action="#">
                    <label htmlFor="file">
                      <div className={`${btnStyles.btnPilihFile}`}>
                        Pilih File
                      </div>
                    </label>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      name="sampleFile"
                    />
                  </form>
                  {file != null ? (
                    <div className={styles.iconPDFUbah}>
                      <Image
                        src={"/IconPDF.svg"}
                        width={25}
                        height={25}
                        alt="PDF"
                      />
                    </div>
                  ) : null}
                </div>
                <Gap width={0} height={24} />
                <button
                  onClick={btnUbahJadwalExp}
                  className={styles.btnKirim_Ubah}
                >
                  <img src={"/Kirim.svg"} width={20} height={20} />
                  <p>Kirim</p>
                </button>
                <Gap width={0} height={10} />
                <button
                  onClick={closeModalUbah}
                  className={styles.btnBatal_Ubah}
                >
                  <img src={"/Batal.svg"} width={20} height={20} />
                  <p>Batal</p>
                </button>
              </Modal>
              {showModal_Ubah ? (
                <div
                  className={styles.modal_Ubah}
                  onClick={() => setShowModal_Ubah(false)}
                >
                  <p>
                    Pengajuan Penjadwalan Ulang berhasil <b>Diubah</b>
                    <div className={styles.checkCircle_Ubah}>
                      <Image src={"/Check-circle.svg"} width={25} height={25} />
                    </div>
                  </p>
                </div>
              ) : null}

              {/* ?  MODAL HAPUS RENAKSI */}
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
                  onChange={(e) => setKetPegawai(e.target.value)}
                />
                <Gap height={20} width={0} />
                <div className={styles.wrapperBtnModal}>
                  <form action="#">
                    <label htmlFor="file">
                      <div className={`${btnStyles.btnPilihFile}`}>
                        Pilih File
                      </div>
                    </label>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      name="sampleFile"
                    />
                  </form>
                  {file != null ? (
                    <div className={styles.iconPDF}>
                      <Image
                        src={"/IconPDF.svg"}
                        width={25}
                        height={25}
                        alt="PDF"
                      />
                    </div>
                  ) : null}
                  <Gap width={193} height={0} />
                  <button onClick={btnHapusExp} className={styles.btnKirim}>
                    <img src={"/Kirim.svg"} width={20} height={20} />
                    <p>Kirim</p>
                  </button>
                  <Gap width={24} height={0} />
                  <button onClick={closeModalHapus} className={styles.btnBatal}>
                    <img src={"/Batal.svg"} width={20} height={20} />
                    <p>Batal</p>
                  </button>
                </div>
              </Modal>
              {showModal_Hapus ? (
                <div
                  className={styles.modal_Hapus}
                  onClick={() => setShowModal_Hapus(false)}
                >
                  <p>
                    Pengajuan Hapus Renaksi Berhasil <b>Diunggah</b>
                    <div className={styles.checkCircle_Hapus}>
                      <Image src={"/Check-circle.svg"} width={25} height={25} />
                    </div>
                  </p>
                </div>
              ) : null}
            </Collapse>
          </TableCell>
        </>
      )}
    </React.Fragment>
  );
}

export default function ContentDaftarKegiatan() {
  const dataPegawai = [
    {
      id: 1,
      image: <Image src="/SidebarProfile.svg" width={90} height={90} />,
      nama: "June E. Silangen,  SE, Ak, ME",
      jabatan: "Kepala Bidang  Pajak Daerah",
      pegawai: "ASN",
    },
  ];

  const filter = [
    {
      id: 1,
      status: "Semua",
      onclick: () => (
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((response) => {
          setAsn(response.data.user[0]);
          setImage(response.data.user[0].foto);

          Axios.get("http://localhost:3001/ambilRenaksi").then((result) => {
            result.data.map((item) => {
              if (
                moment(item.end_date).format("YYYY") ===
                  moment().format("YYYY") &&
                item.nip === response.data.user[0].nip
              ) {
                setDataRenaksi((nextData) => {
                  return [item, ...nextData];
                });
              }
            });
          });
        })
      ),
    },
    {
      id: 2,
      status: "Jadwal diubah",
      onclick: () => (
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((response) => {
          setAsn(response.data.user[0]);
          setImage(response.data.user[0].foto);

          Axios.get("http://localhost:3001/ambilRenaksiJadwalDiubah").then(
            (result) => {
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") ===
                    moment().format("YYYY") &&
                  item.nip === response.data.user[0].nip
                ) {
                  setDataRenaksi((nextData) => {
                    return [item, ...nextData];
                  });
                }
              });
            }
          );
        })
      ),
    },

    {
      id: 3,
      status: "Sementara",
      onclick: () => (
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((response) => {
          setAsn(response.data.user[0]);
          setImage(response.data.user[0].foto);

          Axios.get("http://localhost:3001/ambilRenaksiSementara").then(
            (result) => {
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") ===
                    moment().format("YYYY") &&
                  item.nip === response.data.user[0].nip
                ) {
                  setDataRenaksi((nextData) => {
                    return [item, ...nextData];
                  });
                }
              });
            }
          );
        })
      ),
    },

    {
      id: 5,
      status: "Selesai",
      onclick: () => (
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((response) => {
          setAsn(response.data.user[0]);
          setImage(response.data.user[0].foto);

          Axios.get("http://localhost:3001/ambilRenaksiSelesai").then(
            (result) => {
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") ===
                    moment().format("YYYY") &&
                  item.nip === response.data.user[0].nip
                ) {
                  setDataRenaksi((nextData) => {
                    return [item, ...nextData];
                  });
                }
              });
            }
          );
        })
      ),
    },

    {
      id: 6,
      status: "Hapus",
      onclick: () => (
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((response) => {
          setAsn(response.data.user[0]);
          setImage(response.data.user[0].foto);

          Axios.get("http://localhost:3001/ambilRenaksiDihapus").then(
            (result) => {
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") ===
                    moment().format("YYYY") &&
                  item.nip === response.data.user[0].nip
                ) {
                  setDataRenaksi((nextData) => {
                    return [item, ...nextData];
                  });
                }
              });
            }
          );
        })
      ),
    },

    {
      id: 7,
      status: "Ditambah",
      onclick: () => (
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((response) => {
          setAsn(response.data.user[0]);
          setImage(response.data.user[0].foto);

          Axios.get("http://localhost:3001/ambilRenaksiMenunggu").then(
            (result) => {
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") ===
                    moment().format("YYYY") &&
                  item.nip === response.data.user[0].nip
                ) {
                  setDataRenaksi((nextData) => {
                    return [item, ...nextData];
                  });
                }
              });
            }
          );
        })
      ),
    },

    {
      id: 8,
      status: "Ditolak",
      onclick: () => (
        setDataRenaksi([]),
        Axios.get("http://localhost:3001/masuk").then((response) => {
          setAsn(response.data.user[0]);
          setImage(response.data.user[0].foto);

          Axios.get("http://localhost:3001/ambilRenaksiDitolak").then(
            (result) => {
              result.data.map((item) => {
                if (
                  moment(item.end_date).format("YYYY") ===
                    moment().format("YYYY") &&
                  item.nip === response.data.user[0].nip
                ) {
                  setDataRenaksi((nextData) => {
                    return [item, ...nextData];
                  });
                }
              });
            }
          );
        })
      ),
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [asn, setAsn] = useState("");
  const [image, setImage] = useState(null);
  const [dataRenaksi, setDataRenaksi] = useState([]);

  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setActiveDropdown(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);
      Axios.get("http://localhost:3001/masuk").then((response) => {
        setAsn(response.data.user[0]);
        setImage(response.data.user[0].foto);

        Axios.get("http://localhost:3001/ambilRenaksi").then((result) => {
          result.data.map((item) => {
            if (
              moment(item.end_date).format("YYYY") ===
                moment().format("YYYY") &&
              item.nip === response.data.user[0].nip
            ) {
              setDataRenaksi((nextData) => {
                return [item, ...nextData];
              });
            }
          });
        });
      });
    }
  }, []);

  const btnFilter = () => {
    setActiveDropdown(!activeDropdown);
  };

  const styleHeader = {
    fontFamily: "Poppins",
    fontSize: 21,
    fontWeight: 600,
    color: "#959595",
  };
  const styleContainer = {
    paddingLeft: 40,
    paddingRight: 40,
    zIndex: 998,
    paddingBottom: 20,
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={styles.wrapperTitle}>
              <div>
                <Image src={"/DaftarKegiatan2.svg"} width={40} height={40} />
              </div>
              <p style={{ marginLeft: 10, marginBottom: 10 }}>
                DAFTAR KEGIATAN
              </p>
            </div>
            <Gap height={80} width={0} />
            {dataPegawai.map((item) => (
              <div className={stylesS.wrapperDataPegawai} key={item.id}>
                <div>
                  {!image ? (
                    <Image src="/SidebarProfile.svg" width={90} height={90} />
                  ) : (
                    <Image
                      src={image}
                      width={90}
                      height={90}
                      style={{ borderRadius: 90 }}
                    />
                  )}
                </div>
                <div className={stylesS.wrapperTxt}>
                  <p className={stylesS.txtNama}>{asn.nama}</p>
                  <p className={stylesS.txtJabatan}>
                    {`${asn.jabatan}
                    ${asn.sub_bidang}`}
                  </p>
                  <p className={stylesS.txtPegawai}>{item.pegawai}</p>
                </div>
              </div>
            ))}
            <div className={stylesS.wrapperFilter} ref={menuRef}>
              <div className={stylesS.btnFilter} onClick={btnFilter}>
                <Image src={"/Filter.svg"} width={23} height={23} />
                <p>Filter</p>
              </div>
              {activeDropdown && (
                <div
                  className={stylesS.wrapperSelectStatus}
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
          </div>
          <Gap height={50} width={0} />
          <TableContainer style={styleContainer}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={styleHeader} width={300}>
                    Program
                  </TableCell>
                  <TableCell style={styleHeader} width={300}>
                    Kegiatan
                  </TableCell>
                  <TableCell style={styleHeader} width={300}>
                    Sub Kegiatan
                  </TableCell>
                  <TableCell style={styleHeader} width={300}>
                    Tupoksi
                  </TableCell>
                  <TableCell style={styleHeader} width={300}>
                    Rekan
                  </TableCell>
                  <TableCell style={styleHeader} width={300}>
                    Rencana
                  </TableCell>
                  <TableCell style={styleHeader} width={300}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataRenaksi.map((row) => (
                  <Row key={row.id_renaksi} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}
