import {
  Gap, Sidebar
} from "../../../KasubagComponent";
import CCaKinSubidang from "../../../KasubagComponent/CCakinSubidang";
import sidebarStyles from "../../../KasubagComponent/Sidebar/sidebar.module.css";
import styles from "./profil.module.css";

export default function CakinSubidang() {
  return (
    <div className={styles.container}>
      <Sidebar kotakProfil={sidebarStyles.kotakAktif} />
      <Gap height={0} width={141} />
      <CCaKinSubidang />
    </div>
  );
}
