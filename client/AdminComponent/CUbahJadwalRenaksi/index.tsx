import React, { useEffect, useRef, useState } from "react";
import stylesS from "./cUbahJadwalRenaksi.module.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Axios from "axios";
import FileDownload from "js-file-download";
import "jspdf-autotable";
import Image from "next/future/image";
import { useRouter } from "next/router";
import Gap from "../Gap";
import styles from "./TableMUI.module.css";

Axios.defaults.withCredentials = true;

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
    id: 5,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
  {
    id: 6,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
  {
    id: 7,
    name: "angurs",
    calories: 10,
    fat: 22,
    carbs: 39,
    protein: <Image src={"/User1.svg"} width={50} height={50} />,
    protein1: 40,
    protein2: 40,
  },
];

function Row(props) {
  const { row, stateChanger, arrSubid } = props;

  const [rowClik, setRowClick] = useState(true);
  const [styleRow, setStyleRow] = useState("");
  const [ketAdmin, setKetAdmin] = useState("");



  const router = useRouter();

  const clickRow = () => {
    router.push({
      pathname: "/Admin/UbahJadwal",
      query: {
        subid: row.sub_bidang,
      },
    });
  };

  const style1 = {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 600,
    color: "#000",
  };

  const style2 = {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 400,
    color: "#000",
  };

    const styleAksi = {
      flexDirection: "row",
      display: "flex",
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: 18,
      width: 130,
      justifyContent: "space-between",
      cursor: "pointer",
    };

  return (
    <>
 
      <React.Fragment>
        <TableRow
          className={`${styles.tableRow} ${styleRow}`}
          // sx={{ "& > *": { borderBottom: "" } }}
          hover
        >
          <TableCell>
            <p style={style1}>{row.sub_bidang}</p>
          </TableCell>
          <TableCell>
            <p style={style2}>{row.nama}</p>
          </TableCell>
          <TableCell>
            <div onClick={clickRow} style={styleAksi}>
              <Image src={"/LihatDetail.svg"} width={25} height={25} />
              Lihat detail
            </div>
          </TableCell>
        </TableRow>
      </React.Fragment>
    </>
  );
}

export const CUbahJadwalRenaksi = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  const [asn, setAsn] = useState("");
  const [thnSkrg, setThnSkrg] = useState("");
  const [dataRenaksi, setDataRenaksi] = useState([]);
  const [subid, setSubid] = useState("");

  const [pegawaiSubag, setPegawaiSubag] = useState([]);
  const [pegawaiSubid, setPegawaiSubid] = useState([]);
  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      setDomLoaded(true);

      Axios.get("http://localhost:3001/ambilKasubid").then((ambilKasubid) => {
        Axios.get("http://localhost:3001/adminAmbilRenaksiMJD").then(
          (ambilRenaksi) => {
            let pegawaiYgAdaRenaksi = [];
            let kasubid = ambilKasubid.data;
            let renaksi = ambilRenaksi.data;
            console.log("Kasubid: ", kasubid);
            console.log("Renaksi: ", renaksi);

            pegawaiYgAdaRenaksi = kasubid.filter((elA) => {
              return renaksi.some(
                (elB) => elA["sub_bidang"] === elB["sub_bidang"]
              );
            });

            pegawaiYgAdaRenaksi.map((item) => {
              setPegawaiSubid((nextData) => {
                return [item, ...nextData];
              });
            });

            console.log("Pegawai Ada Renaksi: ", pegawaiYgAdaRenaksi);
          }
        );
      });
    }
  }, []);

  const btnFilterBulan = () => {
    // setActiveDropdownBulan(!activeDropdownBulan);
    console.log(dataRenaksi);
  };

  const style = {
    fontFamily: "Poppins",
    fontSize: 17,
    fontWeight: 600,
    color: "#959595",
  };

  const styleContainer = {
    paddingLeft: 2,
    paddingRight: 40,
    paddingBottom: 20,
  };

  return (
    <>
      {domLoaded && (
        <div className={stylesS.wrap}>
          <div className={stylesS.container}>
            <div className={stylesS.wrapperTitle}>
              <div>
                <Image src={"/UbahJadwalTitle.svg"} width={40} height={40} />
              </div>
              <p
                style={{
                  marginLeft: 5,
                  marginBottom: 10,
                  color: "rgba(221, 202, 27, 1)",
                }}
              >
                UBAH JADWAL
              </p>
            </div>
            <Gap height={150} width={0} />
            <TableContainer style={styleContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={style} width={700}>
                      Sub Bagian
                    </TableCell>
                    <TableCell style={style} width={700}>
                      Kepala Sub Bagian
                    </TableCell>
                    <TableCell style={style} width={700}>
                      Aksi
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pegawaiSubid.map((row) => (
                    <Row
                      key={row.id_renaksi}
                      row={row}
                      stateChanger={setPegawaiSubid}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Gap height={50} width={0} />
            <TableContainer style={styleContainer}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={style} width={700}>
                      Sub Bidang
                    </TableCell>
                    <TableCell style={style} width={700}>
                      Kepala Sub Bidang
                    </TableCell>
                    <TableCell style={style} width={700}>
                      Aksi
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pegawaiSubid.map((row) => (
                    <Row
                      key={row.id_renaksi}
                      row={row}
                      stateChanger={setPegawaiSubid}
                      arrSubid={pegawaiSubid}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </>
  );
};
