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

  // ? MODAL UNGGAH
  const custom = {
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: 878,
      borderRadius: 20,
      paddingTop: 40,
      paddingLeft: 61,
      height: 362,
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overlay: "#112350",
      backgroundColor: "white",
      zIndex: 1001,
    },
    overlay: {
      position: "absolute",
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
                  onClick={() => openModal()}
                  className={styles.btnUbahJadwal}
                >
                  <img src={"/UbahJadwalIcon.svg"} width={20} height={20} />
                  <p className={styles.txt}>Ubah Jadwal</p>
                </button>
              </div>
              <Gap width={750} height={0} />
              <div className={styles.wrapperBtnModal}>
                <p className={styles.p}>Hapus Renaksi</p>
                <button onClick={() => openModal()} className={styles.btnHapus}>
                  <img src={"/HapusIcon.svg"} width={20} height={20} />
                  <p className={styles.txt}>Hapus</p>
                </button>
              </div>
            </div>
          </TableRow>
        </TableBody>
      </Collapse>

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
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  return (
    <TableContainer style={{ paddingLeft: 40, paddingRight: 40 }}>
      <Table sx={{tableLayout: 'fixed'}}>
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
  );
}

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// import { useState } from "react";
// import { Box, Collapse, Typography } from "@mui/material";

// function head(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   {
//     id: 1,
//     name: "anggursss",
//     calories: 20,
//     fat: 22,
//     carbs: 99,
//     protein: 90,
//     expand: [
//       {
//         key: 1,
//         date: "2020-20-09ww",
//         seri: 123123,
//         price: "Rp. 12.000",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "anggursss",
//     calories: 20,
//     fat: 22,
//     carbs: 99,
//     protein: 90,
//     expand: [
//       {
//         key: 2,
//         date: "2020-20-09ww",
//         seri: 123123,
//         price: "Rp. 12.000",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "anggursss",
//     calories: 20,
//     fat: 22,
//     carbs: 99,
//     protein: 90,
//     expand: [
//       {
//         key: 3,
//         date: "2020-20-09ww",
//         seri: 123123,
//         price: "Rp. 12.000",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "anggursss",
//     calories: 20,
//     fat: 22,
//     carbs: 99,
//     protein: 90,
//     expand: [
//       {
//         key: 4,
//         date: "2020-20-09ww",
//         seri: 123123,
//         price: "Rp. 12.000",
//       },
//     ],
//   },
// ];

// export default function TableMUI() {
//   const [open, setOpen] = useState(false);
//   return (
//     <TableContainer component={Paper} style={{ paddingLeft: 45 }}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.id}
//               sx={{ "& > *": { borderBottom: "" } }}
//               className={styles.tableRow}
//               onClick={() => setOpen(!open)}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Customer</TableCell>
//                     <TableCell align="right">Amount</TableCell>
//                     <TableCell align="right">Total price ($)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {rows.map((expander) =>
//                     expander.expand.map((exp) => (
//                       <TableRow key={exp.key}>
//                         <TableCell component="th" scope="row">
//                           {exp.date}
//                         </TableCell>
//                         <TableCell>{exp.seri}</TableCell>
//                         <TableCell align="right">{exp.price}</TableCell>
//                       </TableRow>
//                     ))
//                   )}
//                   {/* {Array.isArray(rows)
//                     ? rowes.expand.map((expander) => (
//                         <TableRow key={expander.key}>
//                           <TableCell component="th" scope="row">
//                             {expander.date}
//                           </TableCell>
//                           <TableCell>{expander.seri}</TableCell>
//                           <TableCell align="right">{expander.price}</TableCell>
//                         </TableRow>
//                       ))
//                     : null} */}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
