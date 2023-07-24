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
    <path d="M233 118.157C233 171.176 178.114 206 119.724 206C61.3343 206 14 163.019 14 110C14 56.9807 61.3343 14 119.724 14C178.114 14 233 65.1375 233 118.157Z" stroke="url(#paint0_linear_6_47)" stroke-width="10"/>
    <path d="M233 118.157C233 171.176 178.114 206 119.724 206C61.3343 206 14 163.019 14 110C14 56.9807 61.3343 14 119.724 14C178.114 14 233 65.1375 233 118.157Z" stroke="url(#paint1_linear_6_47)" stroke-width="10"/>
  </g>
  <defs>
    <filter id="filter0_f_6_47" x="0" y="0" width="247" height="220" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="4.5" result="effect1_foregroundBlur_6_47"/>
    </filter>
    <linearGradient id="paint0_linear_6_47" x1="124.759" y1="14" x2="124.759" y2="206" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A056F7"/>
      <stop offset="1" stop-color="#20C1E4"/>
    </linearGradient>
    <linearGradient id="paint1_linear_6_47" x1="25.9569" y1="109.373" x2="205.15" y2="185.046" gradientUnits="userSpaceOnUse">
      <stop offset="0.0104167" stop-color="#0A05F8" stop-opacity="0.33"/>
      <stop offset="1" stop-color="white" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
    </svg>

    <FeatureCards
        feature1='CI/CD Pipeline Generate'
        feature2='Build / Deploymnent'
        top={10}
        left={32}
    />

  <FeatureCards
        feature1='Generate Test Cases'
        feature2='Code Analysis'
        bottom={10}
        right={32}
    />
    
    </div>
  </div>
}

export default Features