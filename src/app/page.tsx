import { TabPanel } from '@/components/shared/TabPanel';
import { Navigation, htmlNav, reactNav } from '../components/ui/Navigation';
import { CodeWrapper } from '@/components/shared/CodeWrapper';
import { Header, htmlHeader, reactHeader } from '../components/ui/Header';
import { TwitterProfile, reactProfile, htmlProfile } from '../components/ui/TwitterProfile';
import { Pricing, reactPricing, htmlPricing } from '../components/motion/Pricing';

export default function Home() {
  return (
    <div className="space-y-5">
      <TabPanel
        title="Navigation"
        desc="Folder menu in dashboard navigation"
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
        title="Twitter/X profile card/widget"
        ui={<TwitterProfile />}
        codeHTML={<CodeWrapper code={htmlProfile} />}
        codeReact={<CodeWrapper code={reactProfile} />}
      />
      <TabPanel 
        title="Comparison Card"
        note="Design source: Loom"
        ui={<Pricing />}
        // codeHTML={<CodeWrapper code={htmlPricing} />}
        codeReact={<CodeWrapper code={reactPricing} />}
      />
    </div>
  );
}
