"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({
  variant = "primary",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-transform motion-safe:transform-gpu";

  const variants: Record<string, string> = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 active:scale-95 focus-visible:ring-slate-300",
    secondary:
      "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 active:scale-95 focus-visible:ring-slate-300",
  };

  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
