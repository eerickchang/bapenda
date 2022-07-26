import React from "react";
import TxtInputRenaksi from "../TxtInputRenaksi";
import styles from "./ContentInputRenaksiP.module.css";
import txtInputStyle from "../TxtInputRenaksi/TxtInputRenaksi.module.css";

export default function ContentInputRenaksiP() {
  return (
    <div className={styles.container}>
      <p>INPUT RENAKSI TAHUN 2023</p>
      <TxtInputRenaksi
        title="Kegiatan"
        className={`${txtInputStyle.container} ${txtInputStyle.program}`}
        
      />
      <TxtInputRenaksi
        title="Program"
        // className={`${txtInputStyle.program} ${txtInputStyle.container}`}
      />
      <TxtInputRenaksi title="Kegiatan" />
      <TxtInputRenaksi title="Kegiatan" />
    </div>
  );
}
