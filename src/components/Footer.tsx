import { FC } from 'react'
import WaitlistInput from './WaitlistInput'
import { openSans } from './fonts'

interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return <div className={`h-10 w-full mt-16 py-10 flex flex-col gap-2 ${openSans.variable} font-open`}>
        <div className=' text-center w-full text-3xl justify-center flex'>
            <div className='w-[52%] font-semibold purple_gradient bg-clip-text text-transparent'>
        Automate all aspects of your delivery process with
AI support.
            </div>
        </div>


    <div className='text-center w-full text-sm mt-5 '>
    Get Early Access
    </div>

    <div className='flex w-full justify-center '>
        <WaitlistInput />
    </div>

    <div className="my-16  text-center font-semibold text-2xl">
    Copyright © 2023 EXOCODE TECHNOLOGIES | All rights reserved
    </div>


  </div>
}

export default Footer