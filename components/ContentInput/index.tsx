import styles from "./contentInput.module.css";
export default function ContentInput() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Masuk</p>
        <p>
          <b>Sandi</b>
        </p>
        <p>Daftar</p>
      </div>
    </div>
  );
}
