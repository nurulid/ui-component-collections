'use client';

import React, { PropsWithChildren } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Atom, Code, Eye } from 'lucide-react';

type Props = {
  title: string;
  desc: string;
  ui: JSX.Element;
  codeHTML?: JSX.Element;
  codeReact?: JSX.Element;
  note?: React.ReactNode;
  bgContainer?: string;
};

const tabMenu = [
  {
    icon: Eye,
    title: 'Preview',
    tab: 'tab1',
  },
  {
    icon: Code,
    title: 'HTML',
    tab: 'tab2',
  },
  {
    icon: Atom,
    title: 'React',
    tab: 'tab3',
  },
];

export const TabPanel: React.FC<Props> = (props) => {
  const { title, desc, ui, codeHTML, codeReact, note, bgContainer } = props;
  return (
    <Tabs.Root defaultValue="tab1" className="bg-griey p-2 rounded-md border">
      <div className="pb-4 pl-3 pt-2">
        <div className="flex justify-between items-end gap-2 flex-wrap">
          <div>
            <h2 className="text-xl font-[400] mb-1 font-mono">{title}</h2>
            <p className="text-gray-500 mb-2">{desc}</p>
            <div className="text-gray-400 text-xs">{note}</div>
          </div>
          <Tabs.List className="text-xs space-x-1 ml-auto">
            {tabMenu.map((item, i) => (
              <Tabs.Trigger
                key={i}
                value={item.tab}
                className={[
                  'group text-gray-500 rounded-md py-1 px-2',
                  'data-[state=active]:text-black data-[state=active]:bg-indie/10',
                  'hover:text-black hover:bg-gray-300/10 transition-all',
                ].join(' ')}
              >
                <item.icon
                  size={16}
                  className="group-data-[state=active]:text-indie inline-block mr-1 -translate-y-[1px]"
                />
                {item.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>
      </div>
      <Tabs.Content
        value="tab1"
        className={[
          'flex justify-center',
          'rounded-md p-6',
          'border-[0.5px] border-indie/30',
          'empty:p-0 empty:border-none',
          bgContainer ? bgContainer : 'bg-white',
        ].join(' ')}
      >
        <div className="w-full text-center mx-auto">{ui}</div>
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className={[
          'flex justify-center',
          'rounded-md p-6',
          'border-[0.5px] border-indie/30 pattern-boxes',
          'empty:p-0 empty:border-none',
          bgContainer ? bgContainer : 'bg-white',
        ].join(' ')}
      >
        {codeHTML ? codeHTML : (<p className='p-4 z-[2] text-gray-500 text-base'>Comming Soon</p>)}
      </Tabs.Content>
      <Tabs.Content
        value="tab3"
        className={[
          'flex justify-center',
          'rounded-md p-6',
          'border-[0.5px] border-indie/30 pattern-boxes',
          'empty:p-0 empty:border-none',
          bgContainer ? bgContainer : 'bg-white',
        ].join(' ')}
      >
        {codeReact ? codeReact : (<p className='p-4 z-[2] text-gray-500 text-base'>Comming Soon</p>)}
      </Tabs.Content>
    </Tabs.Root>
  );
};
