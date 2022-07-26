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
          <Image src="/Home.svg" width={40} height={40} alt="Sidebar Profile" />
        </div>
        <div>
          <Image src="/Input.svg" width={40} height={40} alt="List" />
        </div>
        <div>
          <Image src="/List.svg" width={40} height={40} alt="List" />
        </div>
        <div>
          <Image src="/History.svg" width={40} height={40} alt="History" />
        </div>
      </div>
      <div className={styles.wrapperNavBawah}>
        <div >
          <Image src="/IconNamaP.svg" width={25} height={30} alt="notif" />
        </div>
        <div>
          <Image src="/Notification.svg" width={40} height={40} alt="notif" />
        </div>
        <div >
          <Image src="/Exit.svg" width={40} height={40} alt="notif" />
        </div>
      </div>
    </div>
  );
}

// import styles from "./sidebar.module.css";
// import Image from "next/image";
// import Gap from "../Gap";

// export default function Sidebar() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.image}>
//         <Image
//           src="/SidebarProfile.svg"
//           width={90}
//           height={90}
//           alt="Sidebar Profile"
//         />
//       </div>
//       <div className={styles.content}>
//         <div>
//           <Image src="/Home.svg" width={50} height={50} alt="Sidebar Profile" />
//         </div>
//         <div>
//           <Image src="/Input.svg" width={40} height={40} alt="List" />
//         </div>
//         <div>
//           <Image src="/List.svg" width={40} height={40} alt="List" />
//         </div>
//         <div>
//           <Image src="/History.svg" width={40} height={40} alt="History" />
//         </div>
//       </div>
//     </div>
//   );
// }
