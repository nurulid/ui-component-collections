import { TabPanel } from '@/components/ui/TabPanel';
import { Navigation, htmlNav } from './(content)/ui/components/Navigation';
import { CodeWrapper } from '@/components/ui/CodeWrapper';
import { Sidebar, htmlSidebar } from './(content)/ui/components/Sidebar';

export default function Home() {
  return (
    <div className="py-4 px-10">
      <div className="space-y-10">
        <TabPanel
          title="Navigation folder"
          desc="Folder menu in dashboard"
          ui={<Navigation />}
          code={<CodeWrapper htmlCode={htmlNav} />}
          note={
            <p>
              Icons:{' '}
              <a href="https://lucide.dev/guide/packages/lucide#with-unpkg" target="_blank">
                Lucide icon
              </a>
            </p>
          }
          bgContainer='bg-gray-50'
        />
        <TabPanel
          title="Sidebar"
          desc=""
          ui={<Sidebar />}
          code={<CodeWrapper htmlCode={htmlSidebar} />}
        />
      </div>
    </div>
  );
}
