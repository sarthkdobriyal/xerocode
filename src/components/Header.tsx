'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { itemFade } from '@/variants/textVariants'
import { spaceGrotesk } from './fonts'


interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <motion.div 
            
  initial={{  x: -100, opacity: 0 }}
  animate={{x: 0, opacity: 1 }}
  transition={{ type: 'spring', stiffness: 20, duration: 1 }}
  className="border-b  border-[#e4e4e4] px-10 py-5 flex items-center justify-between"> 
    <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            rotate: 270,
            opacity: 1
          }}
          transition={{
            type: 'spring',
            stiffness: 10,
          }}>
        <Image
            src="/images/logo.png"
            alt='Company logo'
            className='object-contain'
            width={60}               
            height={60}
            
            />
    </motion.div>

            <Link href='/' >
        <motion.div variants={itemFade} initial={`hidden`} whileInView={`visible`} className={`px-8 py-3 text-base text-center border-2 rounded-full ${spaceGrotesk.variable} font-space`}>
        XEROCODEE
        </motion.div>
    </Link>
    
  </motion.div>
}

export default Header