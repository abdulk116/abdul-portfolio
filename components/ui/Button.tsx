import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const className = `button button-${variant}`;

  if (href && external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}