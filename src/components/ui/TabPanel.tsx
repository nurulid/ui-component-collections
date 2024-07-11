'use client';

import React, { PropsWithChildren } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Atom, Code, Eye } from 'lucide-react';

type Props = {
  title: string;
  desc?: string;
  ui: JSX.Element; // JSX.Element for component
  codeHTML?: JSX.Element;
  codeReact?: JSX.Element;
  note?: React.ReactNode | string; //React.ReactNode for html element
  bgContainer?: string;
};

const tabMenu = [
  {
    icon: Eye,
    title: 'Preview',
    tab: 'preview',
  },
  {
    icon: Code,
    title: 'HTML',
    tab: 'html',
  },
  {
    icon: Atom,
    title: 'React',
    tab: 'react',
  },
];

export const TabPanel: React.FC<Props> = (props) => {
  const { title, desc, ui, codeHTML, codeReact, note, bgContainer } = props;
  return (
    <Tabs.Root
      defaultValue="preview"
      className="bg-griey p-2 rounded-md border"
    >
      <div className="pb-4 pl-3 pt-2">
        <div className="flex justify-between items-end gap-2 flex-wrap">
          <div>
            <h2 className="text-xl font-[400] font-mono">{title}</h2>
            {desc && <p className="text-gray-500 mt-1">{desc}</p>}
            {note && <div className="text-gray-400 text-xs mt-2">{note}</div>}
          </div>
          <Tabs.List className="text-xs space-x-1 ml-auto">
            {tabMenu.map((item, i) => {
              if (
                (item.tab === 'preview' && title) ||
                (item.tab === 'html' && codeHTML) ||
                (item.tab === 'react' && codeReact)
              ) {
                return (
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
                );
              } else {
                return null;
              }
            })}
          </Tabs.List>
        </div>
      </div>
      <Tabs.Content
        value="preview"
        className={[
          'flex justify-center',
          'rounded-md p-6 overflow-hidden',
          'border-[0.5px] border-indie/30',
          'empty:p-0 empty:border-none',
          bgContainer ? bgContainer : 'bg-white',
        ].join(' ')}
      >
        <div className="w-full">{ui}</div>
      </Tabs.Content>
      {codeHTML && (
        <Tabs.Content
          value="html"
          className={[
            'flex justify-center',
            'rounded-md p-6',
            'border-[0.5px] border-indie/30 pattern-boxes',
            'empty:p-0 empty:border-none',
            bgContainer ? bgContainer : 'bg-white',
          ].join(' ')}
        >
          {codeHTML}
        </Tabs.Content>
      )}
      <Tabs.Content
        value="react"
        className={[
          'flex justify-center',
          'rounded-md p-6',
          'border-[0.5px] border-indie/30 pattern-boxes',
          'empty:p-0 empty:border-none',
          bgContainer ? bgContainer : 'bg-white',
        ].join(' ')}
      >
        {codeReact}
      </Tabs.Content>
    </Tabs.Root>
  );
};
