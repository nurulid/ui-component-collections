'use client';

import { getCurrentYear } from '@/lib/utils';
import { Calculator, LayoutTemplate, Sparkles } from 'lucide-react';
import { SidebarItem, SidebarLink } from './SidebarLink';

const sidebarMenu: SidebarItem[] = [
  // {
  //   title: 'Components',
  //   link: '/',
  //   isNew: false,
  // },
  {
    title: 'Blocks',
    link: '/',
    isNew: false,
  },
  {
    title: 'Motion',
    link: '/motion',
    isNew: false,
  },
];

const secondMenu: SidebarItem[] = [
  {
    title: 'Ksier',
    link: '/prototype/ksier',
    isNew: false,
    icon: (<Calculator className="w-4 h-4 text-green-500" />),
  },
  {
    title: 'MinimaLink',
    link: '/prototype/minimalink',
    isNew: false,
    icon: <LayoutTemplate className="w-4 h-4 text-neutral-500" />,
  },
  {
    title: 'DescriptAI',
    link: '/prototype/descript-ai',
    isNew: true,
    icon: <Sparkles className="w-4 h-4 text-fuchsia-500" />,
  },
];

// export const SidebarMobile = () => {
//   return (
//     <>
//       <section className="min-w-[280px] p-4 sticky top-0 h-screen">
//         <div className="rounded-md bg-griey h-full p-4 border flex flex-col">
//           <h2 className="mb-2 font-mono font-semibold border-b pb-2">
//             UI Component Collections
//           </h2>
//           <p className="text-xs mb-10 text-gray-400">
//             Semantic, less &quot;div&quot;.
//           </p>
//           <h3 className="mt-10 mb-2 uppercase opacity-50 text-xs">UI</h3>
//           <ul className="space-y-1">
//             {sidebarMenu.map(({ title, link, icon, isNew }, i) => (
//               <li key={i}>
//                 <SidebarLink title={title} link={link} icon={icon} isNew={isNew} />
//               </li>
//             ))}
//           </ul>
//           <h3 className="mt-10 mb-2 uppercase opacity-50 text-xs">Prototype</h3>
//           <ul className="space-y-1">
//             {secondMenu.map(({ title, link, icon, isNew }, i) => (
//               <li key={i}>
//                 <SidebarLink title={title} link={link} icon={icon} isNew={isNew} />
//               </li>
//             ))}
//           </ul>
//           <p className="mt-auto text-xs text-gray-400">
//             By{' '}
//             <a href="https://nurrul.com" target="_blank" className="note">
//               Nurul ID
//             </a>
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

export const Sidebar = () => {
  const currentYear = getCurrentYear();

  return (
    <section className="min-w-[280px] p-4 sticky top-0 h-screen">
      <div className="rounded-md bg-griey h-full p-4 border flex flex-col">
        <h2 className="mb-2 font-mono font-semibold border-b pb-2 text-lg">
          UI Collections
          {/* <span className="opacity-50 font-normal block text-xs">
            -
          </span> */}
        </h2>
        <p className="text-xs mb-10 text-gray-400">
          Semantic, less &quot;div&quot;.
        </p>
        <h3 className="mt-10 mb-2 uppercase opacity-50 text-xs">UI</h3>
        <ul className="space-y-1">
          {sidebarMenu.map(({ title, link, icon, isNew }, i) => (
            <li key={i}>
              <SidebarLink title={title} link={link} icon={icon} isNew={isNew} />
            </li>
          ))}
        </ul>
        <h3 className="mt-10 mb-2 uppercase opacity-50 text-xs">Prototype</h3>
        <ul className="space-y-1">
          {secondMenu.map(({ title, link, icon, isNew }, i) => (
            <li key={i}>
              <SidebarLink title={title} link={link} icon={icon} isNew={isNew} />
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
            <p>by Nurul Insani Dewi</p>
          </div>
          <p className="text-[10px]">ⓒ 2024 - {currentYear}</p>
        </div>
      </div>
    </section>
  );
};
