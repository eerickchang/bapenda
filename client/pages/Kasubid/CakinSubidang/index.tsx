import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  CProfilAdm,
  Gap,
  HorBar,
  ProfileKanan,
  Sidebar,
} from "../../../KasubidComponent";
import styles from "./profil.module.css";
import sidebarStyles from "../../../KasubidComponent/Sidebar/sidebar.module.css";
import Image from "next/image";
import moment from "moment";
import Axios from "axios";
import { useRouter } from "next/router";
import CCaKinSubidang from "../../../KasubidComponent/CCakinSubidang";

export default function CakinSubidang() {
  return (
    <div className={styles.container}>
      <Sidebar kotakProfil={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <CCaKinSubidang />
    </div>
  );
}
