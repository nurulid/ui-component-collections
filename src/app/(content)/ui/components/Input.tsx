"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  id: string;
  title: string;
  type: string;
  placeholder: string;
  Icon?: string;
  desc?: string;
  password?: boolean;
}

export const Input = (props: Props) => {
  const { id, title, type, placeholder, Icon, desc, password = false } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const isTypePassword = passwordVisible ? "text" : "password";

  return (
    <div>
      <label htmlFor={id} className="font-[600] mb-[6px] text-sm block">
        {title}
      </label>
      <div className="relative">
        <input
          id={id}
          type={password ? isTypePassword : type}
          placeholder={placeholder}
          className="py-[10px] px-[14px] w-full border rounded-md text-sm"
        />
        {password && (
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {/* {passwordVisible ? (
              <Eye className="opacity-50" with={24} height={24} />
            ) : (
              <EyeOff className="opacity-50" with={24} height={24} />
            )} */}
          </span>
        )}
        {/* {Icon && (
          <Icon
            className="absolute opacity-50 right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            with={24}
            height={24}
          />
        )} */}
      </div>
      {desc && <p className="text-sm opacity-40 mt-[6px]">{desc}</p>}
    </div>
  );
};
