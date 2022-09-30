import React from "react";
import {
  CLihatSemuaRenaksi,
  CTinjauRenaksi,
  Gap,
  Sidebar,
} from "../../../KasubidComponent";
import styles from "./tinjauRenaksi.module.css";
import sidebarStyles from "../../../KasubidComponent/Sidebar/sidebar.module.css";
import { useRouter } from "next/router";

export default function TinjauRenaksi() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Sidebar
        kotakTinjauRenaksi={sidebarStyles.kotakAktif}
        onClick={() => console.log("Oke")}
      />
      <Gap width={140} height={80} />
      <CTinjauRenaksi />
      {/* <CLihatSemuaRenaksi/> */}
    </div>
  );
}