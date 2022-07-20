import React from "react";
import LoginTxt from "../../components/LoginTxt";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <LoginTxt />
    </div>
  );
}
