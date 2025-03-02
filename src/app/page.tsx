import { TabPanel } from '@/components/shared/TabPanel';
import { CodeWrapper } from '@/components/shared/CodeWrapper';
import { DockHover, reactDockHover } from '@/components/motion/DockHover';
import { Pricing, reactPricing } from '@/components/motion/Pricing';
import { Images, reactImages } from '@/components/ui/Images';
import { Accordion, reactAccordion } from '@/components/motion/Accordion';

export default function Home() {
  return (
    <div className="space-y-8">
      <TabPanel
        title="Dock menu"
        note={
          <p>
            Inspired by:{' '}
            <a
              href="https://x.com/jinyongftw/status/1739585482848342378"
              target="_blank"
              className="note"
            >
              x.com
            </a>
          </p>
        }
        ui={<DockHover />}
        codeReact={<CodeWrapper code={reactDockHover} />}
      />
      <TabPanel
        title="Image list"
        note={
          <p>
            Inspired by:{' '}
            <a
              href="https://x.com/bartek_marzec/status/1798078019770482740"
              target="_blank"
              className="note"
            >
              x.com
            </a>
          </p>
        }
        ui={<Images />}
        codeReact={<CodeWrapper code={reactImages} />}
      />
      <TabPanel
        title="Accordion"
        ui={<Accordion />}
        codeReact={<CodeWrapper code={reactAccordion} />}
      />
      <TabPanel
        title="Comparison Card"
        note="Design source: Loom"
        ui={<Pricing />}
        codeReact={<CodeWrapper code={reactPricing} />}
      />
    </div>
  );
}
