import styles from "./TxtInputRenaksi.module.css";

// interface InputProps {
//   className: string;
//   title: string;
// }

export default function TxtInputRenaksi({
  title = "Program",
  placeholder = "masukan program yang akan dilakukan",
  className = styles.container,
}) {
  return (
    <div className={className}>
      <p>{title}</p>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
