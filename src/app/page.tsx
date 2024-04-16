import { TabPanel } from '@/components/ui/TabPanel';
import { Navigation, htmlNav } from './(content)/ui/components/Navigation';
import { CodeWrapper } from '@/components/ui/CodeWrapper';

export default function Home() {
  return (
    <div className="p-10">
      <h2 className="text-4xl mb-6">Tailwind UI</h2>
      <div className="space-y-10">
        <TabPanel
          title='Navigation'
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
