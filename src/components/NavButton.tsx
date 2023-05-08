interface Props {
  onClick: () => void;
}

export default function NavButton({ onClick }: Props) {
  return (
    <img
      className="sm nav-bar__nav-btn"
      src="/images/more.png"
      onClick={onClick}
    />
  );
}
