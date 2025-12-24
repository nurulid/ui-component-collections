'use client';

import Link from 'next/link';
import { Badge } from './Badge';
import { usePathname } from 'next/navigation';

// define a clean interface for the link items
export interface SidebarItem {
  title: string;
  link: string;
  isNew?: boolean;
  icon?: React.ReactNode;
}

export const SidebarLink = (
  props: SidebarItem) => {
  const pathname = usePathname();
  const isActive = pathname === props.link;
  const { title, link, isNew, icon } = props;

  return (
    <Link
      href={link}
      data-active={isActive}
      className={[
        'group flex items-center justify-between py-1 pr-2 text-sm',
        'rounded border-[0.5px] border-transparent',
        'transition-all hover:pl-2',
        'text-muted-foreground hover:text-foreground',
        'data-[active=true]:bg-white data-[active=true]:border-gray-200 data-[active=true]:pl-2 data-[active=true]:text-foreground data-[active=true]:shadow-sm',
      ].join(' ')}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="flex shrink-0 items-center justify-center">{icon}</span>}
        <span className="font-medium">{title}</span>
      </div>

      {isNew && <Badge title="New" />}
    </Link>
  );
};
