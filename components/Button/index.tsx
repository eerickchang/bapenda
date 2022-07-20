interface ButtonProps {
  className: string;
  title: string;
}

export default function Button(props: ButtonProps) {
  const { className, title } = props;
  return <button className={className}>{title}</button>;
}
