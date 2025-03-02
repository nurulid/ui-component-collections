import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Section = ({
  icon: Icon,
  title,
  children,
  className,
}: ComponentProps<"div"> & {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={twMerge("p-5 space-y-2", className)}>
      <h2 className="p-2 text-lg flex items-center gap-2 border-b border-green-200 font-semibold">
        <Icon className="text-green-500" /> {title}
      </h2>
      <div className="p-2">{children}</div>
    </div>
  );
};

export { Section };
