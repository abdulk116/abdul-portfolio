import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const className = `button button-${variant}`;

  if (href && external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
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
    >
      {children}
    </button>
  );
}