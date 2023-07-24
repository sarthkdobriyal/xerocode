import Image from 'next/image'
import { FC } from 'react'

interface FeatureCardsProps {
  top? : number,
  left? : number,
  bottom? : number,
  right? : number,
  feature1:    string,
  feature2: string 
}

const FeatureCards: FC<FeatureCardsProps> = ({top,left, right, bottom, feature1, feature2}) => {
  return <div className={`bg-[#181924] absolute ${top ? `top-${top} left-${left}` :'' } ${ bottom ? `bottom-${bottom} right-${right}`: ''} rounded-xl flex flex-col px-5 w-[25%] font-urbanist text-sm font-light`}>        
  <div className='border-b border-slate-600 border-opacity-30 py-3 flex gap-2'>
      <Image 
      src='/images/duotone-stack.svg'
      width={25}
      height={25}
      className='object-contain'
      />
      <span className='text-xs'>
      {feature1}
      </span>
  </div>
  <div className='py-3 flex gap-2'>
      <Image 
      src='/images/duotone-stack_blue.svg'
      width={25}
      height={25}
      className='object-contain'
      />
      <span className='text-xs'>
      {feature2}
      </span>
  </div>
</div>
}

export default FeatureCards