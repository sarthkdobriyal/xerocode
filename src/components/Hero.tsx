import Image from 'next/image'
import { FC } from 'react'

interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({}) => {
  return <div className='flex flex-col p-5 text-center gap-8 items-center'>
    <div className="flex justify-center font-open">
    <span className='purple_gradient tracking-wider text-4xl bg-clip-text text-transparent'>Integrate AI Throughout Your Workflow</span>
    </div>
     <span className='text-white font-abeezee text-5xl tracking-wider font-normal'>Code Doctor</span>
     <span className='font-open text-sm text-center w-[34%] '>Make processes where AI collaborates with your team throughout the whole development process.</span>

     <div className='p-0.5 purple_gradient rounded-full flex mt-5 w-[25%]' >
        <input type="email" placeholder='Your Email' className=' overflow-hidden border-none outline-none text-sm font-space px-6 rounded-full py-3  h-full w-full bg-black text-slate-200 placeholder:text-gray-700 placeholder:font-extralight pr-24 ' />
        <button className='rounded-full text-xs px-3 my-1 -ml-[29%]
        border border-white bg-transparent hover:bg-slate-900'>Join Waitlist</button>
     </div>

     {/* image */}
     <div className='w-full  relative flex justify-center py-1'>
      <div className='z-1 border absolute top-40 left-24  rounded-full bg-[#8593e8] blur-2xl w-[24rem] h-[24rem] opacity-[0.2]' ></div>
      <div className='z-1 border absolute top-40 right-24 rounded-full bg-[#fc4ff6] blur-2xl w-[24rem] h-[24rem] opacity-[0.2]' ></div>

        <Image
          src='/images/hero.png'
          className="object-contain z-2"
          width={1200}
          height={1000}
          alt='hero image'
          />
        


     </div>


  </div>
}

export default Hero


// #FF3BFF, #ECBFBF, #5C24FF, #D94FD5