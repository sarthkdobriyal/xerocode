'use client'
import { FC } from 'react'
import {motion} from 'framer-motion'
import { itemFade, itemScale } from '@/variants/textVariants'
interface WorkflowsCardProps {
    id: number,
  title: string,
    description: string,
    comingSoon: boolean,
}

const WorkflowsCard: FC<WorkflowsCardProps> = ({id,title,description,comingSoon}) => {
  return <motion.div initial={{scale:0, rotate:70}} animate={{scale:1,rotate: 360}} transition={{type: 'spring', stiffness:10, 
  when: 'beforeChildren',
  staggerChildren: 1,}} className={`${id == 3 ? 'w-[45%]': 'w-[35%]' }  pb-16 bg-[#181924] flex flex-col gap-10 font-urbanist px-5 py-8 rounded-xl`}>
    <div className='flex flex-col gap-2'>
    <motion.span variants={itemFade} initial='hidden' whileInView='visible' className='bg-gradient-to-r bg-clip-text text-transparent from-[#4E4BE4] to-[#E862FE] text-3xl'>{title}</motion.span>
    <motion.span variants={itemFade} initial='hidden' whileInView='visible' className='leading-5 text-sm font-light tracking-wide'>
        {description}
    </motion.span>
    </div>
    {
        comingSoon && (
            <motion.div  variants={itemScale} initial='hidden' whileInView='visible' className='bg-[#4F4CE5] rounded-full shadow-lg shadow-[#303059] px-3 py-2 w-[30%] text-sm'>
                Coming soon
            </motion.div>

        )
    }


  </motion.div>
}

export default WorkflowsCard


