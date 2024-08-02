import { XIcon } from '@/components/icons/XIcon'
import { Dribbble, Home, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const DockHover = () => {
  const iconStyles = 'inline-block p-3 border border-white/20 rounded-full text-white/80 bg-black fill-white/80 relative hover:up transition-all shadow-md';
  return (
    <nav className='flex items-center gap-3 py-2 px-2 border-2 bg-[#272b2f] rounded-full shadow-lg border-white/20'>
      <Link href="" className={iconStyles} data-title="Home"><Home /></Link>
      <Link href="" data-title="E-Mail" className={`${iconStyles}`}><Mail /></Link>
      <Link href="" data-title="X" className={iconStyles}><XIcon /></Link>
      <Link href="" data-title="Dribbble" className={iconStyles}><Dribbble /></Link>
      <Link href="" data-title="LinkedIn" className={iconStyles}><Linkedin /></Link>
    </nav>
  )
}
