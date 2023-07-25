'use client'
import Image from 'next/image'
import { FC } from 'react'
import WaitlistInput from './WaitlistInput'
import { itemScale, itemFade, itemSlide } from '@/variants/textVariants'
import { m } from 'framer-motion'

import { abeezee, openSans } from './fonts'

interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({}) => {
  return <div className='flex flex-col p-5 text-center gap-8 items-center  h-full'>

    <m.span variants={itemFade} initial='hidden' whileInView='visible' className={`purple_gradient ${openSans.variable} font-open tracking-wider text-4xl bg-clip-text text-transparent`}>Integrate AI Throughout Your Workflow</m.span>
  
     <m.span variants={itemScale} initial='hidden' whileInView='visible' className={`text-white ${abeezee.variable} font-abeezee text-5xl tracking-wider font-normal`}>Code Doctor</m.span>
     <m.span variants={itemFade} initial='hidden' whileInView='visible' className={`${openSans.variable} font-open text-sm text-center w-[34%]`}>Make processes where AI collaborates with your team throughout the whole development process.</m.span>


      <WaitlistInput />
      
     {/* image */}
     <div   className='w-full  relative flex justify-center py-1 my-1'>
      <m.div variants={itemScale} initial='hidden'  whileInView='visible' className='z-1 border absolute top-40 left-24  rounded-full bg-[#8593e8] blur-2xl w-[24rem] h-[24rem] opacity-[0.2]' ></m.div>
      <m.div variants={itemScale} initial='hidden'  whileInView='visible' className='z-1 border absolute top-40 right-24 rounded-full bg-[#fc4ff6] blur-2xl w-[24rem] h-[24rem] opacity-[0.2]' ></m.div>

        <m.div 
          animate={{y: [-10, 20, -10]}}
          transition={{duration: 2, repeat:Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className='w-full flex justify-center'
        >

        <Image
          src='/images/hero.png'
          alt='hero image'
          className="object-contain z-2 absolute"
          width={1200}
          height={1000}
          />
          </m.div>
     </div>


  </div>
}

export default Hero

