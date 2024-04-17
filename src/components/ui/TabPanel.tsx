'use client';

import React, { PropsWithChildren } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Code, Eye } from 'lucide-react';

type Props = {
  title: string;
  desc: string;
  ui: JSX.Element;
  code: JSX.Element;
  note?: React.ReactNode;
  bgContainer?: string;
};

export const TabPanel: React.FC<Props> = (props) => {
  const { title, desc, ui, code, note, bgContainer } = props;
  return (
    <Tabs.Root defaultValue="tab1" className="bg-griey p-2 rounded-md">
      <div className="mb-2 pl-3 pt-2">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xl font-[400] mb-1">{title}</h2>
            <p className='text-gray-500 mb-2'>{desc}</p>
            <div className='text-gray-400 text-xs'>{note}</div>
          </div>
          <Tabs.List className="text-xs space-x-1">
            <Tabs.Trigger
              value="tab1"
              className={[
                'group text-gray-500 rounded-md py-1 px-2',
                'data-[state=active]:text-black data-[state=active]:bg-indie/10',
                'hover:text-black hover:bg-gray-300/10 transition-all',
              ].join(' ')}
            >
              <Eye
                size={16}
                className="group-data-[state=active]:text-indie inline-block mr-1 -translate-y-[1px]"
              />
              Preview
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab2"
              className={[
                'group text-gray-500 rounded-md py-1 px-2',
                'data-[state=active]:text-black data-[state=active]:bg-indie/10',
                'hover:text-black hover:bg-gray-300/10 transition-all',
              ].join(' ')}
            >
              <Code
                size={16}
                className="group-data-[state=active]:text-indie inline-block mr-1 -translate-y-[1px]"
              />
              Code
            </Tabs.Trigger>
          </Tabs.List>
        </div>
      </div>
      <Tabs.Content
        value="tab1"
        className={[
          'flex justify-center',
          'rounded-md p-6 border-[0.5px] border-indie',
          'empty:p-0 empty:border-none',
          bgContainer ? bgContainer : 'bg-white',
        ].join(' ')}
      >
        {ui}
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className={[
          'flex justify-center',
          'rounded-md p-6',
          'border-[0.5px] border-indie pattern-boxes',
          'empty:p-0 empty:border-none',
          bgContainer ? bgContainer : 'bg-white',
        ].join(' ')}
      >
        {code}
      </Tabs.Content>
    </Tabs.Root>
  );
};
