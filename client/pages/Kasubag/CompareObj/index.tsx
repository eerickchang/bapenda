import React from "react";

export default function CompareObj() {
  const a = [
    { id: 1, nama: "Erick", sub_bidang: "Pertama" },
    { id: 2, nama: "Andre", sub_bidang: "Kedua" },
    { id: 3, nama: "Geo", sub_bidang: "Ketiga" },
  ];

  const b = [
    { id: 1, nama: "Ando", sub_bidang: "Pertama" },
    { id: 2, nama: "Gerald", sub_bidang: "Pertama" },
    { id: 3, nama: "Lomo", sub_bidang: "Ketiga" },
  ];

  let sameElement = [];

  sameElement = a.filter((elA) => {
    return b.some((elB) => elA["sub_bidang"] === elB["sub_bidang"]);
  });

  //   console.log(sameElement);

  let store = [];
  for (var key in a) {
    store.push(a[key]);
  }

  console.log("Store: ", store);
  return <div>CompareObj</div>;
}
