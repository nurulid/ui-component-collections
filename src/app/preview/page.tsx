'use client';

import React from 'react';
import { Accordion } from '../../components/motion/Accordion';
import Dock from '../../components/motion/Dock';
// import { Pricing } from '../../components/motion/Pricing';
import { motion } from 'framer-motion';
import { Images } from '../../components/ui/Images';
import { DockHover } from '../../components/motion/DockHover';
import { LineChartex } from '../../components/ui/LineChartex';
import { Input } from '../../components/ui/Input';
import { Eye } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import Link from 'next/link';
import EmailInput from '../../components/ui/MultiEmail';
import { PricingTable } from '@/components/ui/PricingTable';
import { TaskCard } from '@/components/ui/TaskCard';
import { SignUpForm } from '@/components/ui/SignUpForm';

export default function Page() {
  return (
    <div className=" bg-white">
      {/* <Dock /> */}
      {/* <PricingTable /> */}
      {/* <EmailInput /> */}
      {/* <Images /> */}
      {/* <Accordion /> */}
      {/* <Pricing /> */}
      {/* <DockHover /> */}
      {/* <LineChartex /> */}
      {/* <TaskCard /> */}
      <SignUpForm />

      <div className="h-8" />
    </div>
  );
}
