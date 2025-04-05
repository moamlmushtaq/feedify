"use client";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "button";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`
        relative z-10
        px-6 py-2 rounded-2xl
        text-[var(--color-foreground)] font-semibold
        bg-transparent border-2
        border-[var(--color-primary: #3b82f6;)]
        hover:border-cyan-200
        hover:shadow-[0_0_12px_var(--color-primary: #3b82f6;)]
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        background: "transparent",
        boxShadow: "0 0 6px var(--color-primary: #3b82f6;)",
      }}
    >
      <span className="relative z-20">{children}</span>
    </button>
  );
}
