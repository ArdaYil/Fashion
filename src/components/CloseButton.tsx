interface Props {
  className?: string;
  onClick: () => void;
}

export default function CloseButton({ onClick, className }: Props) {
  const closeClass = className ? `xs ${className}` : "";

  return (
    <img
      className={closeClass}
      src="/images/close.png"
      alt="An image of a close button looking like an X"
      onClick={onClick}
    />
  );
}
