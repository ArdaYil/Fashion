interface Props {
  onClick: () => void;
}

export default function NavButton({ onClick }: Props) {
  return (
    <img
      src="../../public/images/more.png"
      className="img-sm"
      onClick={onClick}
    />
  );
}
