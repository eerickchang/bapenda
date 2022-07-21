import styles from "./sidebar.module.css";
import Image from "next/image";
import Gap from "../Gap";

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/SidebarProfile.svg"
          width={90}
          height={90}
          alt="Sidebar Profile"
        />
      </div>
      <div className={styles.content}>
        <div>
          <Image src="/Home.svg" width={32} height={31} alt="Sidebar Profile" />
        </div>
        <div>
          <Image src="/Input.svg" width={30} height={30} alt="List" />
        </div>
        <div>
          <Image src="/List.svg" width={30} height={30} alt="List" />
        </div>
        <div>
          <Image src="/History.svg" width={30} height={30} alt="History" />
        </div>
      </div>
    </div>
  );
}
