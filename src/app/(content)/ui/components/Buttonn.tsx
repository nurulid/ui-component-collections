import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const variants = {
  primary: "bg-blue-500 hover:bg-blue-600",
  secondary: "bg-gray-500 hover:bg-gray-600",
  danger: "bg-red-500 hover:bg-red-600",
  info: "bg-green-500 hover:bg-green-600",
};
const sizes = {
  sm: "text-sm px-3 py-2",
  md: "text-base px-4 py-3",
  lg: "text-lg px-5 py-4",
};

interface ButtonProps extends ComponentProps<"button"> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  padding?: string;
}

const buttonClassesBase: string[] = ["p-5 rounded-full"];
const additional: string[] = ["p-[--padding]"];

export const Buttonn = (props: ButtonProps) => {
  const { className = "", variant = "primary", size = "sm", padding = "", ...buttonProps } = props;
  const style: React.CSSProperties = padding ? { '--padding': padding } as React.CSSProperties : {};
  return (
    <button
      style={style}
      className={twMerge(buttonClassesBase, className, variants[variant], sizes[size], padding ? additional : "")}
      {...buttonProps}
    >dddd</button>
  );
};
