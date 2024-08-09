"use client"

import React from 'react';
import Accordion from '../(content)/ui/components/Accordion';
// import Dock from '../(content)/framer-motion/Dock';
import { Pricing } from '../(content)/ui/components/Pricing';
import { motion } from 'framer-motion';
import { Images } from '../(content)/ui/components/Images';
import { DockHover } from '../(content)/ui/components/DockHover';
import { LineChartex } from '../(content)/ui/components/LineChartex';

export default function Page() {
  return (
    <div className="center-component bg-white">
      {/* <Dock /> */}
      {/* <motion.div
        className="w-full h-full flex justify-between items-center"
        variants={{
          hidden: { opacity: 0, x: -150, scale: 0.2 },
          visible: { opacity: 1, x: 0, scale: 1 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Images />
      </motion.div> */}
      {/* <Accordion /> */}
      {/* <Pricing /> */}
      {/* <DockHover /> */}
      <LineChartex />
      <div className="h-8" />

      {/* <form>
        <div className='space-y-6'>
          <Input id='email' title='Email' type='email' placeholder='Enter your email'/>
          <Input id='password' title='Password' type='password' placeholder='Create a password' desc="Must be at least 8 characters." password/>
          <Input id='repasword' title='Re Password' type='password' placeholder='Re enter your password' Icon={Eye}/>
        </div>
        <div className='h-8'/>
        <div className='space-y-3'>
          <Button type="submit" color='primary' full>Create account</Button>
          <Button color='secondary' icon="/icons/bag.svg" full className='mt-4' >Sign up with Google</Button>
        </div>
        <p className='text-center text-sm mt-6'><span className='opacity-50'>Already have an account?</span> <Link href="/login" className='text-primary font-semibold'>Login</Link></p>
      </form> */}
    </div>
  );
}
