interface Props {
  onClick: () => void;
}

export default function NavButton({ onClick }: Props) {
  return (
    <img src="../../public/images/more.png" className="sm" onClick={onClick} />
  );
}
