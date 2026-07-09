import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  href,
  onClick,
  variant = "primary", // primary | secondary
  download = false,
  target,
  rel,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2.5 border px-7.5 py-4 leading-normal rounded-none transition-colors duration-[1200ms] ease-in-out relative overflow-hidden z-1 before:absolute before:-bottom-5 before:-right-5 before:w-10 before:h-10 before:rounded-full before:scale-0 before:transition-transform before:duration-[1200ms] before:ease-in-out before:-z-1 before:origin-center hover:before:scale-[60] text-sm font-semibold cursor-pointer select-none";

  const variants = {
    primary:
      "bg-powerBlack text-white border-powerBlack hover:text-powerBlack before:bg-white",
    secondary:
      "bg-transparent text-powerBlack border-powerBlack hover:text-white before:bg-powerBlack",
  };

  const fullStyle = `${baseStyle} ${variants[variant]} ${className}`;

  // If internal routing link
  if (href && href.startsWith("/")) {
    return (
      <Link to={href} className={fullStyle} {...props}>
        {children}
      </Link>
    );
  }

  // If external link or anchor link or download
  if (href) {
    return (
      <a
        href={href}
        className={fullStyle}
        download={download}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Otherwise regular button
  return (
    <button type={type} onClick={onClick} className={fullStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
