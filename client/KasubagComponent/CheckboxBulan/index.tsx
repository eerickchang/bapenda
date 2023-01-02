import React from "react";
import styles from "./CheckboxBulan.module.css";

interface ButtonProps {
  className: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CheckboxBulan(props: ButtonProps) {
  const { title } = props;
  return (
    <div className={styles.container}>
      <input type="checkbox">
        <span>{title}</span>
      </input>
    </div>
  );
}
