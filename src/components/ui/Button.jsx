import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  href,
  onClick,
  variant = "primary", // primary (dark: black -> white) | secondary (light: white -> black)
  size = "md", // sm | md | lg
  download = false,
  target,
  rel,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  const baseStyle =
    "btn-ripple inline-flex items-center justify-center rounded-none disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-4 py-2 text-xs font-medium",
    md: "px-6 py-3 text-sm font-medium",
    lg: "px-7.5 py-3.5 text-sm font-medium",
  };

  const variants = {
    primary: "btn-ripple-dark",
    secondary: "btn-ripple-light",
  };

  const fullStyle = `${baseStyle} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <span className="relative z-10 inline-flex items-center justify-center gap-2 pointer-events-none w-full">
      {children}
    </span>
  );

  // If internal routing link
  if (href && href.startsWith("/")) {
    return (
      <Link to={href} className={fullStyle} {...props}>
        {content}
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
        {content}
      </a>
    );
  }

  // Otherwise regular button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={fullStyle}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
