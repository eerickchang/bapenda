import React, { useEffect } from "react";
import { ContentInputRenaksi, Gap, Sidebar } from "../../../KabidComponent";
import styles from "./InputRenaksi.module.css";
import sidebarStyles from "../../../KabidComponent/SidebarStaff/sidebar.module.css";
import Axios from "axios";

export default function InputRenaksi() {
  useEffect(() => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      // console.log(response.data.user[0]);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar kotakInputRenaksi={sidebarStyles.kotakAktif} />
      <Gap height={0} width={140} />
      <ContentInputRenaksi />
    </div>
  );
}
