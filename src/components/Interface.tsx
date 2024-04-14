'use client';

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { CodeComponent } from './CodeComponent';
import { Navigation, htmlCode } from './ui/Navigation';

export const Interface = () => {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List className="flex justify-center mb-5">
        <Tabs.Trigger
          value="tab1"
          className="data-[state=active]:text-violet-600 p-2 border m-2"
        >
          Preview
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab2"
          className="data-[state=active]:text-violet-600 p-2 border m-2"
        >
          Code
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab3"
          className="data-[state=active]:text-violet-600 p-2 border m-2"
        >
          Notes
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        value="tab1"
        className="flex justify-center p-4 border rounded empty:p-0 empty:border-none"
      >
        <Navigation />
      </Tabs.Content>
      <Tabs.Content
        value="tab2"
        className="flex justify-center p-4 border rounded empty:p-0 empty:border-none"
      >
        <CodeComponent htmlCode={htmlCode} />
      </Tabs.Content>
      <Tabs.Content
        value="tab3"
        className="flex justify-center p-4 border rounded empty:p-0 empty:border-none"
      >
        Icon from lucide icons
      </Tabs.Content>
    </Tabs.Root>
  );
};
