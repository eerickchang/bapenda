import ContentInput from "../../components/ContentInput";
import LoginTxt from "../../components/LoginTxt";
import styles from './lupaSandi.module.css';

export default function index() {
  return (
    <div className={styles.container}>
      <LoginTxt />
      <ContentInput />
    </div>
  );
}
