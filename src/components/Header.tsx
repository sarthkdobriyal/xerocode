'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <motion.div 
            
  initial={{  opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.2 }}
  className="border-b  border-[#e4e4e4] px-10 py-5 flex items-center justify-between"> 
  <Link href='/' >
        <Image
            src="/images/logo.png"
            alt='Company logo'
            className='object-contain'
            width={60}               
            height={60}
            
            />
    </Link>

        <div className='px-8 py-3 text-base text-center border-2 rounded-full font-space'>
        XEROCODEE
        </div>
    
  </motion.div>
}

export default Header