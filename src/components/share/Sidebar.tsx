"use client"

import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { Badge } from '../ui/Badge';
import { usePathname } from 'next/navigation';

const sidebarMenu = [
  {
    title: 'UI Components',
    link: '/',
    ready: true,
    submenus: [
      { title: 'Navigation', link: '/ui', ready: true, },
    ]
  },
  {
    title: 'Radix UI (primitive)',
    link: '/radix',
    ready: false,
  },
];

const SidebarLink = (
  props: PropsWithChildren<{ title: string; link: string; soon: boolean }>
) => {
  const { title, link, soon } = props;
  const pathname = usePathname();
  return (
    <Link
      href={link}
      data-active={pathname === link}
      className={[
        'py-1 pr-2',
        'block rounded border border-transparent',
        'transition-all hover:pl-2',
        'data-[active=true]:bg-white data-[active=true]:border data-[active=true]:border-gray-300 data-[active=true]:pl-2'
      ].join(' ')}
    >
      {title}
      {soon && <Badge title="soon" />}
    </Link>
  );
};

export const Sidebar = () => {
  return (
    <section className="max-w-[280px] w-full p-4 sticky top-0 h-screen">
      <div className="rounded-md bg-griey h-full p-4 border flex flex-col">
        <h2 className="mb-2 font-mono font-semibold border-b pb-2">
          Tailwind CSS UI Library
        </h2>
        <p className='text-xs mb-10 text-gray-400'>Semantic, less &quot;div&quot;.</p>
        <ul className="space-y-1">
          {sidebarMenu.map(({ title, link, ready }, i) => (
            <li key={i}>
              <SidebarLink
                title={title}
                link={link}
                soon={!ready}
              />
            </li>
          ))}
        </ul>
        <p className="mt-auto text-xs text-gray-400">By <a href='https://nurulid.space' target='_blank' className='note'>Nurul ID</a></p>
      </div>
    </section>
  );
};
