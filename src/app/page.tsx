import { TabPanel } from '@/components/ui/TabPanel';
import { Navigation, htmlNav, reactNav } from './(content)/ui/components/Navigation';
import { CodeWrapper } from '@/components/ui/CodeWrapper';
import { Header, htmlHeader, reactHeader } from './(content)/ui/components/Header';
import { TwitterProfile, reactProfile, htmlProfile } from './(content)/ui/components/TwitterProfile';

export default function Home() {
  return (
    <div className="space-y-5">
      <TabPanel
        title="Dashboard navigation"
        desc="Folder menu in dashboard"
        ui={<Navigation />}
        codeHTML={<CodeWrapper code={htmlNav} />}
        codeReact={<CodeWrapper code={reactNav} />}
        note={
          <p>
            Icons:{' '}
            <a href="https://lucide.dev/" target="_blank" className='note'>
              Lucide icon
            </a>
          </p>
        }
        bgContainer='bg-gray-50'
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
            <a href="https://lucide.dev/" target="_blank" className='note'>
              Lucide icon
            </a>
          </p>
        }
        bgContainer='bg-gray-50'
      />
      <TabPanel 
        title="Twitter profile card"
        desc=""
        ui={<TwitterProfile />}
        codeHTML={<CodeWrapper code={htmlProfile} />}
        codeReact={<CodeWrapper code={reactProfile} />}
      />
    </div>
  );
}
