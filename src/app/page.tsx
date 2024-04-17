import { TabPanel } from '@/components/ui/TabPanel';
import { Navigation, htmlNav, reactNav } from './(content)/ui/components/Navigation';
import { CodeWrapper } from '@/components/ui/CodeWrapper';
import { Sidebar, htmlSidebar } from './(content)/ui/components/Sidebar';

export default function Home() {
  return (
    <div className="py-4 px-10">
      <div className="space-y-10">
        <TabPanel
          title="Dashboard navigation 1"
          desc="Folder menu in dashboard"
          ui={<Navigation />}
          codeHTML={<CodeWrapper code={htmlNav} />}
          codeReact={<CodeWrapper code={reactNav}/>}
          note={
            <p>
              Icons:{' '}
              <a href="https://lucide.dev/" target="_blank">
                Lucide icon
              </a>
            </p>
          }
          bgContainer='bg-gray-50'
        />
      </div>
    </div>
  );
}
