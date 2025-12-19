'use client';

import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { Badge } from './Badge';
import { usePathname } from 'next/navigation';
import { getCurrentYear } from '@/lib/utils';

const sidebarMenu = [
  {
    title: 'Motion',
    link: '/',
    ready: true,
  },
  {
    title: 'Components',
    link: '/ui',
    ready: true,
    // submenus: [
    //   { title: 'Navigation', link: '/ui', ready: true, },
    // ]
  },
];

const secondMenu = [
  {
    title: 'Ksier',
    link: '/prototype/ksier',
    ready: true,
  },
  {
    title: 'MinimaLink',
    link: '/prototype/minimalink',
    ready: true,
  },
  {
    title: '✨ DescriptAI ',
    link: '/prototype/descript-ai',
    ready: true,
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
        'py-1 pr-2 text-sm',
        'block rounded border-[.5px] border-transparent',
        'transition-all hover:pl-2',
        'data-[active=true]:bg-white data-[active=true]:border-gray-300 data-[active=true]:pl-2',
      ].join(' ')}
    >
      {title}
      {soon && <Badge title="soon" />}
    </Link>
  );
};

export const SidebarMobile = () => {
  return (
    <>
      <section className="min-w-[280px] p-4 sticky top-0 h-screen">
        <div className="rounded-md bg-griey h-full p-4 border flex flex-col">
          <h2 className="mb-2 font-mono font-semibold border-b pb-2">
            UI Component Collections
          </h2>
          <p className="text-xs mb-10 text-gray-400">
            Semantic, less &quot;div&quot;.
          </p>
          <h3 className="mt-10 mb-2 uppercase opacity-50 text-xs">UI</h3>
          <ul className="space-y-1">
            {sidebarMenu.map(({ title, link, ready }, i) => (
              <li key={i}>
                <SidebarLink title={title} link={link} soon={!ready} />
              </li>
            ))}
          </ul>
          <h3 className="mt-10 mb-2 uppercase opacity-50 text-xs">Prototype</h3>
          <ul className="space-y-1">
            {secondMenu.map(({ title, link, ready }, i) => (
              <li key={i}>
                <SidebarLink title={title} link={link} soon={!ready} />
              </li>
            ))}
          </ul>
          <p className="mt-auto text-xs text-gray-400">
            By{' '}
            <a href="https://nurrul.com" target="_blank" className="note">
              Nurul ID
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export const Sidebar = () => {
  const currentYear = getCurrentYear();

  return (
    <section className="min-w-[280px] p-4 sticky top-0 h-screen">
      <div className="rounded-md bg-griey h-full p-4 border flex flex-col">
        <h2 className="mb-2 font-mono font-semibold border-b pb-2 text-lg">
          UI Component
          <span className='opacity-50 font-normal block text-xs'>Collections</span>
        </h2>
        <p className="text-xs mb-10 text-gray-400">
          Semantic, less &quot;div&quot;.
        </p>
        <h3 className="mt-10 mb-2 uppercase opacity-50 text-xs">UI</h3>
        <ul className="space-y-1">
          {sidebarMenu.map(({ title, link, ready }, i) => (
            <li key={i}>
              <SidebarLink title={title} link={link} soon={!ready} />
            </li>
          ))}
        </ul>
        <h3 className="mt-10 mb-2 uppercase opacity-50 text-xs">Prototype</h3>
        <ul className="space-y-1">
          {secondMenu.map(({ title, link, ready }, i) => (
            <li key={i}>
              <SidebarLink title={title} link={link} soon={!ready} />
            </li>
          ))}
        </ul>
        <div className="mt-auto text-xs space-y-1 opacity-50">
          <div className="group space-y-2">
            <a
              href="https://nurrul.com"
              target="_blank"
              className="note hidden group-hover:inline-block transition-all duration-300 ease-out
                   group-hover:animate-[slideUp_0.3s_ease-out]"
            >
              https://nurrul.com
            </a>
            <p>by Nurul ID</p>
          </div>
          <p className="text-[10px]">ⓒ 2024 - {currentYear}</p>
        </div>
      </div>
    </section>
  );
};
