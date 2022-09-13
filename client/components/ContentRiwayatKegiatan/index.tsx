import React, { useMemo, useState } from "react";
// import { useReactTable } from '@tanstack/react-table'
import { useTable, useExpanded } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";

import styles from "./ContentRiwayatKegiatan.module.css";
import Image from "next/image";
import Gap from "../Gap";

export const ContentRiwayatKegiatan = () => {
  // const columns = useMemo(() => COLUMNS, []);
  // const data = useMemo(() => MOCK_DATA, []);

  // const tableInstance = useTable(
  //   {
  //     columns,
  //     data,
  //   },
  //   useExpanded
  // );

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  //   visibleColumns,
  //   state: { expanded },
  // } = tableInstance;

  const [activeDropdownTahun, setActiveDropdownTahun] = useState(false);
  const [activeDropdownBulan, setActiveDropdownBulan] = useState(false);
  const [activeDropdownUnduh, setActiveDropdownUnduh] = useState(false);

  const tahun = [
    {
      id: 1,
      tahun: "2015",
    },
    {
      id: 2,
      tahun: "2016",
    },
    {
      id: 3,
      tahun: "2017",
    },
    {
      id: 4,
      tahun: "2018",
    },
    {
      id: 5,
      tahun: "2019",
    },
    {
      id: 6,
      tahun: "2020",
    },
    {
      id: 7,
      tahun: "2021",
    },
    {
      id: 8,
      tahun: "2022",
    },
    {
      id: 9,
      tahun: "2023",
    },
    {
      id: 10,
      tahun: "2024",
    },
    {
      id: 11,
      tahun: "2025",
    },
  ];
  const bulan = [
    {
      id: 1,
      bulan: "Jan",
    },
    {
      id: 2,
      bulan: "Feb",
    },
    {
      id: 3,
      bulan: "Mar",
    },
    {
      id: 4,
      bulan: "Apr",
    },
    {
      id: 5,
      bulan: "Mei",
    },
    {
      id: 6,
      bulan: "Jun",
    },
    {
      id: 7,
      bulan: "Jul",
    },
    {
      id: 8,
      bulan: "Agu",
    },
    {
      id: 9,
      bulan: "Sep",
    },
    {
      id: 10,
      bulan: "Okt",
    },
    {
      id: 11,
      bulan: "Nov",
    },
    {
      id: 12,
      bulan: "Des",
    },
  ];

  const unduh = [
    {
      id: 1,
      unduh: "Excel",
      image: <Image src={"/Excel1.svg"} width={38} height={35} />,
    },
    {
      id: 2,
      unduh: "PDF",
      image: <Image src={"/Pdf.svg"} width={35} height={35} />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapperTitleInputRenaksi}>
        <Image src={"/RiwayatIcon.svg"} width={50} height={50} />
        <p className={styles.txtTitle}>MASUKAN RENAKSI</p>
      </div>
      <Gap height={153} width={0} />
      <div className={styles.wrapperFilter}>
        <div className={styles.wrapperFilterTahun}>
          <div
            className={styles.btnFilterTahun}
            onClick={() => setActiveDropdownTahun(!activeDropdownTahun)}
          >
            <Image src={"/TahunIcon.svg"} width={23} height={23} />
            <p>Tahun</p>
          </div>
          {activeDropdownTahun && (
            <div
              className={styles.wrapperSelectFilterTahun}
              onClick={() => setActiveDropdownTahun(false)}
            >
              {tahun.map((item) => (
                <p key={item.id}>{item.tahun}</p>
              ))}
            </div>
          )}
        </div>
        <div className={styles.wrapperFilterBulan}>
          <div
            className={styles.btnFilterBulan}
            onClick={() => setActiveDropdownBulan(!activeDropdownBulan)}
          >
            <Image src={"/TahunIcon.svg"} width={23} height={23} />
            <p>Bulan</p>
          </div>
          {activeDropdownBulan && (
            <div
              className={styles.wrapperSelectFilterBulan}
              onClick={() => setActiveDropdownBulan(false)}
            >
              {bulan.map((item) => (
                <p key={item.id}>{item.bulan}</p>
              ))}
            </div>
          )}
        </div>
        <div className={styles.wrapperUnduh}>
          <div
            className={styles.btnUnduh}
            onClick={() => setActiveDropdownUnduh(!activeDropdownUnduh)}
          >
            <Image src={"/UnduhIcon.svg"} width={23} height={23} />
            <p>Unduh</p>
          </div>
          {activeDropdownUnduh && (
            <div
              className={styles.wrapperSelectUnduh}
              onClick={() => setActiveDropdownUnduh(false)}
            >
              {unduh.map((item) => (
                <div
                  style={{
                    display: "flex",
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: 22,
                  }}
                  key={item.id}
                >
                  {item.image} {item.unduh}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* <table {...getTableProps()} className={styles.header}>
        <thead className={styles.headerTable}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <td {...column.getHeaderProps()}>{column.render("Header")}</td>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={styles.tableTr}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
              
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
};
