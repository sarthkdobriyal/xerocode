import Image from 'next/image'
import { FC } from 'react'
import FeatureCards from './FeatureCards'

interface FeaturesProps {
  
}

const Features: FC<FeaturesProps> = ({}) => {
  return <div className="mt-80 mb-5 w-full h-screen">
    <div className='font-urbanist flex-col flex justify-center items-center py-2 '>
        <span className=' text-xl bg-clip-text text-transparent purple_gradient w-[32%] text-center leading-8'>Boost the speed of your development and test cycles. </span>
        <span className='leading-6 w-[41%] text-center text-sm'>With AI-driven test case generation and code analysis, problems may be found and fixed more quickly.</span>
    </div>

    <div className='relative h-[80%]  w-[95%] mx-5 flex justify-center items-center'>
    <svg xmlns="http://www.w3.org/2000/svg" width="247" height="220" viewBox="0 0 247 220" fill="none">
  <g filter="url(#filter0_f_6_47)">
    <path d="M233 118.157C233 171.176 178.114 206 119.724 206C61.3343 206 14 163.019 14 110C14 56.9807 61.3343 14 119.724 14C178.114 14 233 65.1375 233 118.157Z" stroke="url(#paint0_linear_6_47)" strokeWidth="10"/>
    <path d="M233 118.157C233 171.176 178.114 206 119.724 206C61.3343 206 14 163.019 14 110C14 56.9807 61.3343 14 119.724 14C178.114 14 233 65.1375 233 118.157Z" stroke="url(#paint1_linear_6_47)" strokeWidth="10"/>
  </g>
  <defs>
    <filter id="filter0_f_6_47" x="0" y="0" width="247" height="220" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_6_47"/>
    </filter>
    <linearGradient id="paint0_linear_6_47" x1="124.759" y1="14" x2="124.759" y2="206" gradientUnits="userSpaceOnUse">
      <stop stopColor="#A056F7"/>
      <stop offset="1" stopColor="#20C1E4"/>
    </linearGradient>
    <linearGradient id="paint1_linear_6_47" x1="25.9569" y1="109.373" x2="205.15" y2="185.046" gradientUnits="userSpaceOnUse">
      <stop offset="0.0104167" stopColor="#0A05F8" stopOpacity="0.33"/>
      <stop offset="1" stopColor="white" stopOpacity="0.15"/>
    </linearGradient>
  </defs>
    </svg>
    
    <div className='bg-[#181924] absolute top-10 left-32 rounded-xl flex flex-col px-5 w-[25%] fonr-urbanist text-sm font-light'>        
        <div className='border-b border-slate-600 border-opacity-30 py-3 flex gap-2'>
            <Image 
            src='/images/duotone-stack.svg'
            width={25}
            height={25}
            className='object-contain'
            alt='stack_png'
            />
            <span className='text-xs'>
            CI/CD Pipeline Generate
            </span>
        </div>
        <div className='py-3 flex gap-2'>
            <Image 
            src='/images/duotone-stack_blue.svg'
            width={25}
            height={25}
            className='object-contain'
            alt='stack_png'
            />
            <span className='text-xs'>
            Build / Deploymnent
            </span>
        </div>
    </div> 
    <div className='bg-[#181924] absolute bottom-10 right-32 rounded-xl flex flex-col px-5 w-[25%] fonr-urbanist text-sm font-light'>        
        <div className='border-b border-slate-600 border-opacity-30 py-3 flex gap-2'>
            <Image 
            src='/images/duotone-stack.svg'
            width={25}
            height={25}
            className='object-contain'
            alt='stack_png'
            />
            <span className='text-xs'>
            Generate Test Cases
            </span>
        </div>
        <div className='py-3 flex gap-2'>
            <Image 
            src='/images/duotone-stack_blue.svg'
            width={25}
            height={25}
            className='object-contain'
            alt='stack_png'
            />
            <span className='text-xs'>
            Code Analysis
            </span>
        </div>
    </div> 

    
    </div>
  </div>
}

export default Features