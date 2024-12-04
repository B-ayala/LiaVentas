import classNames from "classnames";
import { InputHTMLAttributes } from "react";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={classNames("border rounded px-3 py-2", className)} {...props} />;
}
