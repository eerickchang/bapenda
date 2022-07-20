import { ReactNode } from "react";
import CtnUmum from "../CtnUmum";
import TxtUmum from "../TxtUmum";
import styles from "./layoutumum.module.css";

interface LayoutUmumProps {
  children: ReactNode;
}

export default function LayoutUmum(props: LayoutUmumProps) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <TxtUmum />
      <CtnUmum children={children} />
    </div>
  );
}
