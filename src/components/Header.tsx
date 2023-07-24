import Image from 'next/image'
import { FC } from 'react'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return <div className="border-b  border-[#e4e4e4] px-10 py-5 pt-8 flex items-center justify-between"> 
        <Image
            src="/images/logo.png"
            alt='Company logo'
            className='object-contain'
            width={60}               
            height={60}
            
        />

        <div className='px-8 py-3 text-xl text-center border-2 rounded-full font-space'>
        XEROCODEE
        </div>
    
  </div>
}

export default Header