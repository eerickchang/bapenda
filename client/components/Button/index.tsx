interface ButtonProps {
  className: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  const { className, title, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <p>{title}</p>
    </button>
  );
}
