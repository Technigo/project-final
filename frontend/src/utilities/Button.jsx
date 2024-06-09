import { Link } from "react-router-dom";

export const Button = ({
  text,
  link,
  className = "",
  onClick,
  variant = "primary",
}) => {
  const baseClasses =
    "px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg";
  const variantClasses = {
    primary: "bg-primary text-light hover:bg-secondary",
    light: "bg-light text-primary hover:bg-lighter",
  };
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {text}
    </Link>
  );
};
