'use client';

import { PropsWithChildren, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { Lion } from '@/components/icons/Lion';
import { Penguin } from '@/components/icons/Penguin';
import { Dolphin } from '@/components/icons/Dolphin';
import { Elephant } from '@/components/icons/Elephant';
import { Kangaroo } from '@/components/icons/Kangaroo';

export const reactAccordion = String.raw`interface PanelProps {
  title: string;
  isActive: boolean;
  onShow: VoidFunction;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Panel = (props: PropsWithChildren<PanelProps>) => {
  const { title, isActive, onShow, Icon, children } = props;
  return (
    <motion.section
      className={[
        'p-3 pr-2 mb-1 rounded-md last:mb-0 trasition-all',
        isActive
          ? 'border border-slate-100 bg-slate-50'
          : 'hover:bg-slate-50 cursor-pointer ',
      ].join(' ')}
      onClick={onShow}
    >
      <div
        className={[
          'flex justify-between items-center',
          isActive ? 'pb-3 border-b mb-3 border-slate-100' : '',
        ].join(' ')}
      >
        <h3
          className={\`capitalize font-normal flex gap-2 items-center \${
            isActive ? ' flex-1 mr-4' : ''
          }\`}
        >
          {Icon && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1.3 : 0.7 }}
              transition={{ duration: 0.4 }}
            >
              <Icon />
            </motion.span>
          )}
          {title}
        </h3>
        <ChevronDown
          size={18}
          className={\`\${isActive ? 'rotate-180 transition-all' : ''}\`}
        />
      </div>
      <AnimatePresence>
        {isActive ? (
          <motion.p
            variants={{
              hidden: { opacity: 0, height: 0, y: -50 },
              visible: { opacity: 1, height: 'auto', y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              type: 'spring',
              bounce: !isActive ? 0 : 0.5,
              duration: 0.8,
            }}
            className={\`text-slate-500\`}
          >
            {children}
          </motion.p>
        ) : (
          ''
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const DATA = [
  {
    title: 'Lion',
    desc: 'A large, carnivorous feline known as the “king of the jungle,” native to Africa and parts of Asia, recognized for its majestic mane and social pride structure.',
    Icon: Lion,
  },
  {
    title: 'Penguin',
    desc: 'A flightless bird primarily found in the Southern Hemisphere, especially Antarctica, known for its distinctive black and white plumage and excellent swimming ability.',
    Icon: Penguin,
  },
  {
    title: 'Dolphin',
    desc: 'A highly intelligent marine mammal known for its playful behavior, complex social structures, and remarkable communication skills, commonly found in oceans worldwide.',
    Icon: Dolphin,
  },
  {
    title: 'Elephant',
    desc: 'The largest land animal, known for its long trunk, large ears, and strong social bonds, native to Africa and Asia.',
    Icon: Elephant,
  },
  {
    title: 'Kangaroo',
    desc: 'A marsupial native to Australia, known for its powerful hind legs, large feet adapted for jumping, and a pouch in which females carry their young.',
    Icon: Kangaroo,
  },
];

  return (
    <div className="p-4 border rounded-md max-w-[550px] bg-white">
      {DATA.map((item, i) => {
        return (
          <Panel
            key={i}
            title={item.title}
            Icon={item.Icon}
            isActive={activeIndex === i}
            onShow={() => setActiveIndex(i)}
          >
            {item.desc}
          </Panel>
        );
      })}
    </div>
  );
}`;

const DATA = [
  {
    title: 'Lion',
    desc: 'A large, carnivorous feline known as the “king of the jungle,” native to Africa and parts of Asia, recognized for its majestic mane and social pride structure.',
    Icon: Lion,
  },
  {
    title: 'Penguin',
    desc: 'A flightless bird primarily found in the Southern Hemisphere, especially Antarctica, known for its distinctive black and white plumage and excellent swimming ability.',
    Icon: Penguin,
  },
  {
    title: 'Dolphin',
    desc: 'A highly intelligent marine mammal known for its playful behavior, complex social structures, and remarkable communication skills, commonly found in oceans worldwide.',
    Icon: Dolphin,
  },
  {
    title: 'Elephant',
    desc: 'The largest land animal, known for its long trunk, large ears, and strong social bonds, native to Africa and Asia.',
    Icon: Elephant,
  },
  {
    title: 'Kangaroo',
    desc: 'A marsupial native to Australia, known for its powerful hind legs, large feet adapted for jumping, and a pouch in which females carry their young.',
    Icon: Kangaroo,
  },
];

interface PanelProps {
  title: string;
  isActive: boolean;
  onShow: VoidFunction;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Panel = (props: PropsWithChildren<PanelProps>) => {
  const { title, isActive, onShow, Icon, children } = props;
  return (
    <motion.section
      className={[
        'p-3 pr-2 mb-1 rounded-md last:mb-0 trasition-all',
        isActive
          ? 'border border-slate-100 bg-slate-50'
          : 'hover:bg-slate-50 cursor-pointer ',
      ].join(' ')}
      onClick={onShow}
    >
      <div
        className={[
          'flex justify-between items-center',
          isActive ? 'pb-3 border-b mb-3 border-slate-100' : '',
        ].join(' ')}
      >
        <h3
          className={`capitalize font-normal flex gap-2 items-center ${
            isActive ? ' flex-1 mr-4' : ''
          }`}
        >
          {Icon && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: isActive ? 1.3 : 0.7 }}
              transition={{ duration: 0.4 }}
            >
              <Icon />
            </motion.span>
          )}
          {title}
        </h3>
        <ChevronDown
          size={18}
          className={`${isActive ? 'rotate-180 transition-all' : ''}`}
        />
      </div>
      <AnimatePresence>
        {isActive ? (
          <motion.p
            variants={{
              hidden: { opacity: 0, height: 0, y: -50 },
              visible: { opacity: 1, height: 'auto', y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              type: 'spring',
              bounce: !isActive ? 0 : 0.5,
              duration: 0.8,
            }}
            className={`text-slate-500`}
          >
            {children}
          </motion.p>
        ) : (
          ''
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="p-4 border rounded-md max-w-[550px] bg-white mx-auto">
      {DATA.map((item, i) => {
        return (
          <Panel
            key={i}
            title={item.title}
            Icon={item.Icon}
            isActive={activeIndex === i}
            onShow={() => setActiveIndex(i)}
          >
            {item.desc}
          </Panel>
        );
      })}
    </div>
  );
};
