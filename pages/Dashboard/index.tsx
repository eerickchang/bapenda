import React from "react";
import { Sidebar } from "../../components";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  );
}
