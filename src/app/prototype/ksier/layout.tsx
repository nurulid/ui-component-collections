import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black py-6 h-dvh w-full">
      <div className="max-w-6xl mx-auto pt-10 pb-5 px-10 border-black border-double border-[12px] rounded-4xl h-[94vh] bg-white shadow-xl relative">
        <div className="relative z-10">{children}</div>
        <h1 className="absolute bottom-4 left-4 font-inconsolata border-b-5 border-l-5 border-black/40 pl-[6px] rounded-bl-xl border-double">
          <span>Ksier</span>
        </h1>
      </div>
    </div>
  );
}
