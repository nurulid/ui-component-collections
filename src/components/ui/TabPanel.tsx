'use client';

import React, { PropsWithChildren } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Code, Eye } from 'lucide-react';

type Props = {
  title: string;
  ui: JSX.Element;
  code: JSX.Element;
  note?: React.ReactNode;
};

export const TabPanel: React.FC<Props> = (props) => {
  const { title, ui, code, note } = props;
  return (
    <Tabs.Root defaultValue="tab1" className="bg-griey p-2 rounded-md">
      <div className="mb-2 px-3 pt-2">
        <h2 className='text-xl mb-1'>{title}</h2>
        <div className="flex justify-between flex-row-reverse text-gray-500">
          <Tabs.List className="text-xs space-x-2">
            <Tabs.Trigger
              value="tab1"
              className="group data-[state=active]:text-black text-gray-500 hover:text-black hover:bg-indie/10 rounded-md transition-all p-2"
            >
              <Eye
                size={16}
                className="group-data-[state=active]:text-indie inline-block mr-1 -translate-y-[1px]"
              />
              Preview
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab2"
              className="group data-[state=active]:text-black text-gray-500 hover:text-black hover:bg-indie/10 rounded-md transition-all p-2"
            >
              <Code
                size={16}
                className="group-data-[state=active]:text-indie inline-block mr-1 -translate-y-[1px]"
              />
              Code
            </Tabs.Trigger>
          </Tabs.List>
          <div>{note}</div>
        </div>
      </div>
      <Tabs.Content
        value="tab1"
        className="flex justify-center bg-white p-6 border-[0.5px] border-indie rounded-md empty:p-0 empty:border-none"
      >
        {ui}
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className="flex justify-center p-6 border-[0.5px] border-indie rounded-md empty:p-0 empty:border-none pattern-boxes"
      >
        {code}
      </Tabs.Content>
    </Tabs.Root>
  );
};
