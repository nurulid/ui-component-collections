import React from 'react'
import Link from 'next/link'
import { Pricing } from '../(content)/ui/components/Pricing'
import { Button } from '../(content)/ui/components/Button'
// import { Input } from '../(content)/ui/components/Input.tsx'
import { Eye } from 'lucide-react'
import Accordion from '../(content)/ui/components/Accordion'

export default function Page() {
  return (
    <div className='center-component'>
      <Accordion />
      {/* <Pricing /> */}
      <div className='h-8'/>
      
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
  )
}
