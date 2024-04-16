import { TabPanel } from '@/components/ui/TabPanel';
import { Navigation, htmlNav } from './(content)/ui/components/Navigation';
import { CodeWrapper } from '@/components/ui/CodeWrapper';

export default function Home() {
  return (
    <div className="p-10">
      <h2 className="text-3xl mb-5">Tailwind UI</h2>
      <div className="">
        <TabPanel
          ui={<Navigation />}
          code={<CodeWrapper htmlCode={htmlNav} />}
          note={
            <p>
              Icons:{' '}
              <a href="https://lucide.dev" target="_blank">
                Lucide icon
              </a>
            </p>
          }
        />
      </div>
    </div>
  );
}
