import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "ghost" | "default" | "link"  | "primary"; // Agregar "link"
  size?: "sm" | "icon" | "default";
}


export const Button: React.FC<ButtonProps> = ({
  variant = "default", // Valor predeterminado correcto
  size = "default", // Valor predeterminado correcto
  className,
  children,
  ...props
}) => {
  const buttonClass = classNames(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none",
    {
      "border border-gray-300 bg-white text-black": variant === "outline",
      "bg-transparent text-black": variant === "ghost",
      "bg-gray-900 text-white": variant === "default",
      "text-sm px-2 py-1": size === "sm",
      "text-base px-4 py-2": size === "default",
      "p-2": size === "icon",
    },
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};
