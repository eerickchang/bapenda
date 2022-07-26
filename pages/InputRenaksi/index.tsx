import React from "react";
import { ContentInputRenaksiP, Sidebar } from "../../components";
import styles from "./InputRenaksi.module.css";

export default function InputRenaksi() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ContentInputRenaksiP/>
    </div>
  );
}
