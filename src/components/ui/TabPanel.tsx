'use client';

import React, { PropsWithChildren } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Code, Eye } from 'lucide-react';

type Props = {
  ui: JSX.Element;
  code: JSX.Element;
  note?: React.ReactNode;
};

export const TabPanel: React.FC<Props> = (props) => {
  const { ui, code, note } = props;
  return (
    <Tabs.Root defaultValue="tab1">
      <div className='flex justify-between flex-row-reverse mb-2'>
        <Tabs.List className="text-xs space-x-2">
          <Tabs.Trigger
            value="tab1"
            className="group data-[state=active]:text-black text-gray-500 hover:text-black hover:bg-indie/10 rounded-md transition-all p-2"
          >
            <Eye size={16} className="group-data-[state=active]:text-indie inline-block mr-1 -translate-y-[1px]" />
            Preview
          </Tabs.Trigger>
          <Tabs.Trigger
            value="tab2"
            className="group data-[state=active]:text-black text-gray-500 hover:text-black hover:bg-indie/10 rounded-md transition-all p-2"
          >
            <Code size={16} className="group-data-[state=active]:text-indie inline-block mr-1 -translate-y-[1px]" />
            Code
          </Tabs.Trigger>
        </Tabs.List>
        <div>{note}</div>
      </div>
      <Tabs.Content
        value="tab1"
        className="flex justify-center p-6 border-[0.5px] border-black/20 rounded-md empty:p-0 empty:border-none"
      >
        {ui}
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className="flex justify-center p-6 border-[0.5px] border-black/20 rounded-md empty:p-0 empty:border-none bg-white"
      >
        {code}
      </Tabs.Content>
    </Tabs.Root>
  );
};
