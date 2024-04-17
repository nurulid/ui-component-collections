import Link from 'next/link';
import React from 'react';

export const Sidebar = () => {
  return (
    <section className="max-w-[280px] w-full p-4 sticky top-0 h-screen">
      <div className="rounded-md bg-griey h-full p-4 border">
        <h2 className="mb-4 font-mono font-semibold border-b pb-2">Tailwind CSS UI</h2>
        <ul className='space-y-1'>
          <li>
            <Link href="#" className='block py-1 pr-2 rounded transition-all border border-transparent hover:bg-white hover:border hover:border-gray-300 hover:pl-2'>Scratch</Link>
          </li>
          <li>
            <Link href="#" className='block py-1 pr-2 rounded transition-all border border-transparent hover:bg-white hover:border hover:border-gray-300 hover:pl-2'>Radix UI (primitive)</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
