import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[1200px] h-[890px] mx-auto pt-10 pb-5 px-10 border-gray-200 border-double border-[12px] rounded-3xl bg-white shadow-lg relative">
      <div className="relative z-10">{children}</div>
      <h1 className="absolute bottom-4 left-4 font-inconsolata">
        <span>Ksier</span>
      </h1>
    </div>
  );
}
