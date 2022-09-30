import styles from "./TxtInputRenaksiProgram.module.css";

interface InputProps {
  className: string;
  title: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export default function TxtInputRenaksiProgram(props: InputProps) {
  const {
    title = "Program",
    placeholder = "masukan program yang akan dilakukan",
    onChange,
    value,
    className,
  } = props;

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
      />
    </div>
  );
}
