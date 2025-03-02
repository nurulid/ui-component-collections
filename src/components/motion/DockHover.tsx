'use client';

import React, { ComponentProps, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Dribbble, Home, Linkedin, Mail } from 'lucide-react';
import { XIcon } from '@/components/icons/XIcon';

export const reactDockHover = `const Menu = ({
  title,
  children,
  ...menuProps
}: { title: string } & ComponentProps<typeof Link>) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 1,
          y: isHovered ? -16 : 0,
          paddingLeft: isHovered ? 10 : 0,
          paddingRight: isHovered ? 10 : 0,
        }}
        transition={{ type: 'spring', bounce: 0.3, duration: 0.8 }}
      >
        <span
          {...menuProps}
          className="inline-block p-3 border border-white/20 rounded-full text-white/80 bg-black fill-white/80 relative transition-all shadow-md"
        >
          {children}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.span
                  className="block px-2 absolute !left-1/2 -translate-x-1/2 -top-9 bg-[#171717] text-white rounded-md text-[10px] shadow-md whitespace-nowrap border border-white/10"
                  initial={{ opacity: 0, y: 20, x: '-50%' }}
                  animate={{ opacity: 1, y: 0, x: '-50%' }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  {title}
                </motion.span>
                <motion.span
                  className="size-[5px] rounded-full block bg-black absolute -bottom-[10px] left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: -20, x: '-50%' }}
                  animate={{ opacity: 1, y: 0, x: '-50%' }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                />
              </>
            )}
          </AnimatePresence>
        </span>
      </motion.div>
    </motion.div>
  );
};

export const DockHover = () => {
  return (
    <nav className="inline-flex items-center gap-3 py-2 pb-1 px-2 border bg-[#181A1C] rounded-full shadow-lg border-white/5 my-10">
      <Menu href="/" title="Home">
        <Home />
      </Menu>
      <Menu href="" title="Connect">
        <Mail />
      </Menu>
      <Menu href="" title="X">
        <XIcon />
      </Menu>
      <Menu href="" title="Dribbble">
        <Dribbble />
      </Menu>
      <Menu href="" title="LinkedIn">
        <Linkedin />
      </Menu>
    </nav>
  );
};`;

const Menu = ({
  title,
  children,
  ...menuProps
}: { title: string } & ComponentProps<typeof Link>) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.2 : 1,
          y: isHovered ? -16 : 0,
          paddingLeft: isHovered ? 10 : 0,
          paddingRight: isHovered ? 10 : 0,
        }}
        transition={{ type: 'spring', bounce: 0.3, duration: 0.8 }}
      >
        <span
          {...menuProps}
          className="inline-block p-3 border border-white/20 rounded-full text-white/80 bg-black fill-white/80 relative transition-all shadow-md"
        >
          {children}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.span
                  className="block px-2 absolute !left-1/2 -translate-x-1/2 -top-9 bg-[#171717] text-white rounded-md text-[10px] shadow-md whitespace-nowrap border border-white/10"
                  initial={{ opacity: 0, y: 20, x: '-50%' }}
                  animate={{ opacity: 1, y: 0, x: '-50%' }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  {title}
                </motion.span>
                <motion.span
                  className="size-[5px] rounded-full block bg-black absolute -bottom-[10px] left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: -20, x: '-50%' }}
                  animate={{ opacity: 1, y: 0, x: '-50%' }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                />
              </>
            )}
          </AnimatePresence>
        </span>
      </motion.div>
    </motion.div>
  );
};

export const DockHover = () => {
  return (
    <div className='flex justify-center'>
      <nav className="inline-flex items-center gap-3 py-2 pb-1 px-2 border bg-[#181A1C] rounded-full shadow-lg border-white/5 my-10">
        <Menu href="/" title="Home">
          <Home />
        </Menu>
        <Menu href="" title="Connect">
          <Mail />
        </Menu>
        <Menu href="" title="X">
          <XIcon />
        </Menu>
        <Menu href="" title="Dribbble">
          <Dribbble />
        </Menu>
        <Menu href="" title="LinkedIn">
          <Linkedin />
        </Menu>
      </nav>
    </div>
  );
};
