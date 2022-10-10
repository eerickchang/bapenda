import React, { useEffect } from "react";
import { ContentNotifikasi, Gap, Sidebar } from "../../../KasubidComponent";
import styles from "./InputRenaksi.module.css";
import sidebarStyles from "../../../KasubidComponent/SidebarStaff/sidebar.module.css";
import Axios from "axios";

export default function Notifikasi() {
  useEffect(() => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      // console.log(response.data.user[0]);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar kotakNotif={sidebarStyles.kotakAktif} />
      <Gap width={195} height={0} />
      <ContentNotifikasi />
    </div>
  );
}
