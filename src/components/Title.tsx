import { Link } from "react-router-dom";

interface Props {
  noLink?: boolean;
  className?: string;
}

export default function Title({ noLink, className }: Props) {
  const titleClass = className ? `title ${className}` : "";

  return !noLink ? (
    <Link to="/" className={titleClass}>
      Fashion
    </Link>
  ) : (
    <h2 className={titleClass}>Fashion</h2>
  );
}
