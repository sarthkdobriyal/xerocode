'use client'
import { FC } from 'react'
import {m} from 'framer-motion'
import { itemFade, itemScale } from '@/variants/textVariants'
import { urbanist } from './fonts'
interface WorkflowsCardProps {
    id: number,
  title: string,
    description: string,
    comingSoon: boolean,
}

const WorkflowsCard: FC<WorkflowsCardProps> = ({id,title,description,comingSoon}) => {
  return <m.div initial={{scale:0, rotate:70}} animate={{scale:1,rotate: 360}} transition={{type: 'spring', stiffness:10, 
  when: 'beforeChildren',
  staggerChildren: 1,}} className={`${id == 3 ? 'w-[45%]': 'w-[35%]' }  pb-16 bg-[#181924] flex flex-col gap-10 ${urbanist.variable} font-urbanist px-5 py-8 rounded-xl`}>
    <div className='flex flex-col gap-2'>
    <m.span variants={itemFade} initial='hidden' whileInView='visible' className='bg-gradient-to-r bg-clip-text text-transparent from-[#4E4BE4] to-[#E862FE] text-3xl'>{title}</m.span>
    <m.span variants={itemFade} initial='hidden' whileInView='visible' className='leading-5 text-sm font-light tracking-wide'>
        {description}
    </m.span>
    </div>
    {
        comingSoon && (
            <m.div  variants={itemScale} initial='hidden' whileInView='visible' className='bg-[#4F4CE5] rounded-full shadow-lg shadow-[#303059] px-3 py-2 w-[30%] text-sm'>
                Coming soon
            </m.div>

        )
    }


  </m.div>
}

export default WorkflowsCard


