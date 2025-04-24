import React from 'react';

import { TabPanel } from '@/components/shared/TabPanel';
import { CodeWrapper } from '@/components/shared/CodeWrapper';
import { Navigation, htmlNav, reactNav } from '@/components/ui/Navigation';
import { Header, htmlHeader, reactHeader } from '@/components/ui/Header';
import {
  TwitterProfile,
  reactProfile,
  htmlProfile,
} from '@/components/ui/TwitterProfile';
import { PricingTable, htmlPricingTable, reactPricingTable } from '@/components/ui/PricingTable';

export default function page() {
  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-3xl">UI Components</h1>
        <p className="opacity-50">UI components for React.</p>
      </div>
      <div className="h-8" />
      <div className="space-y-8">
        <TabPanel
          title="Pricing table"
          desc='Pricing table without table elements'
          ui={<PricingTable />}
          codeHTML={<CodeWrapper code={htmlPricingTable} />}
          codeReact={<CodeWrapper code={reactPricingTable} />}
        />
        <TabPanel
          title="Navigation"
          desc="Folder menu in dashboard navigation"
          ui={<Navigation />}
          codeHTML={<CodeWrapper code={htmlNav} />}
          codeReact={<CodeWrapper code={reactNav} />}
          note={
            <p>
              Icons:{' '}
              <a href="https://lucide.dev/" target="_blank" className="note">
                Lucide icon
              </a>
            </p>
          }
          bgContainer="bg-gray-50"
        />
        <TabPanel
          title="Header"
          desc="Simple header"
          ui={<Header />}
          codeHTML={<CodeWrapper code={htmlHeader} />}
          codeReact={<CodeWrapper code={reactHeader} />}
          note={
            <p>
              Icons:{' '}
              <a href="https://lucide.dev/" target="_blank" className="note">
                Lucide icon
              </a>
            </p>
          }
          bgContainer="bg-gray-50"
        />
        <TabPanel
          title="X profile widget"
          ui={<TwitterProfile />}
          codeHTML={<CodeWrapper code={htmlProfile} />}
          codeReact={<CodeWrapper code={reactProfile} />}
        />
      </div>
    </div>
  );
}
