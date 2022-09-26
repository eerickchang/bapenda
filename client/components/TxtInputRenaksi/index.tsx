import styles from "./TxtInputRenaksi.module.css";

interface InputProps {
  className: string;
  title: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export default function TxtInputRenaksi(props: InputProps) {
  const {
    title = "Program",
    placeholder = "masukan program yang akan dilakukan",
    onChange,
    value,
  } = props;

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
