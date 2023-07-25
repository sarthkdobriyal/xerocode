'use client'
import Link from 'next/link'
import { FC } from 'react'
import { m } from 'framer-motion'
import { itemScale, itemFade } from '@/variants/textVariants'
import { spaceGrotesk } from './fonts'

interface WaitlistInputProps {
  
}

const WaitlistInput: FC<WaitlistInputProps> = ({}) => {
    return <m.div variants={itemScale} initial='hidden' whileInView='visible'  className='p-0.5 purple_gradient rounded-full flex  w-[25%]' >
  <m.input variants={itemScale} initial='hidden' whileInView='visible' type="email" placeholder='Your Email' className={`overflow-hidden border-none outline-none text-sm ${spaceGrotesk.variable} font-space px-6 rounded-full py-3  h-full w-full bg-black text-slate-200 placeholder:text-gray-700 placeholder:font-extralight pr-24`} />
  <button   className='rounded-full text-xs px-3 my-1 -ml-[29%]
  border border-white bg-transparent hover:bg-slate-900'>
    <Link href='/user-form'>
    Join Waitlist
  </Link>
    </button>
  
</m.div>
}

export default WaitlistInput