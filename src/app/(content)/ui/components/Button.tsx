import React, { PropsWithChildren } from "react";
import Image from "next/image";

type Color = "primary" | "secondary";

interface Props {
  color: Color;
  full?: boolean;
  icon?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = (props: PropsWithChildren<Props>) => {
  const {
    color,
    full = false,
    icon,
    className,
    type = "button",
    children,
  } = props;

  const variants: Record<Color, string> = {
    primary: "bg-primary hover:bg-primary-hover text-white border-primary",
    secondary: "bg-secondary hover:bg-secondary-hover border",
  };

  return (
    <button
      type={type}
      className={[
        "px-4 rounded-md font-medium transition-all",
        "flex justify-center items-center gap-2",
        variants[color],
        full ? "w-full py-[10px]" : "py-2",
        className,
      ].join(" ")}
    >
      {icon && <Image src={icon} width={20} height={20} alt="Button icon" />}
      {children}
    </button>
  );
};
