import Image from 'next/image';
interface ButtonProps {
  className: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  image: HTMLImageElement;
}

export default function Button(props: ButtonProps) {
  const { className, title, onClick, image } = props;
  return (
    <button className={className} onClick={onClick}>
      <img src={image} width={35} height={35}/>
      <p>{title}</p>
    </button>
  );
}
