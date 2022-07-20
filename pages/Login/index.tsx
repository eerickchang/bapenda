import React from "react";
import LoginCtn from "../../components/LoginCtn";
import LoginTxt from "../../components/LoginTxt";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <LoginTxt />
      <LoginCtn />
    </div>
  );
}
