import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-dvh w-full">
      <div className="max-w-6xl mx-auto pt-10 pb-5 px-10 border-green-100 border-double border-[12px] rounded-3xl h-[94vh] bg-white shadow-lg relative">
        <div className="relative z-10">{children}</div>
        <h1 className="absolute bottom-4 left-4 font-inconsolata">
          <span>Ksier</span>
        </h1>
      </div>
    </div>
  );
}
