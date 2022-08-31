import React, { useState, useEffect } from "react";
import { ContentInputRenaksiP, Gap, Sidebar } from "../../components";
import styles from "./InputRenaksi.module.css";
import sidebarStyles from "../../components/Sidebar/sidebar.module.css";
import Axios from "axios";

export default function InputRenaksi() {
  useEffect(() => {
    Axios.get("http://localhost:3001/masuk").then((response) => {
      console.log(response.data.user[0]);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar kotakInput={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <ContentInputRenaksiP />
    </div>
  );
}
