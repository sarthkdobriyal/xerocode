import { FC } from 'react'

interface WorkflowsCardProps {
    id: number,
  title: string,
    description: string,
    comingSoon: boolean,
}

const WorkflowsCard: FC<WorkflowsCardProps> = ({id,title,description,comingSoon}) => {
  return <div className={`${id == 3 ? 'w-[45%]': 'w-[35%]' }  pb-16 bg-[#181924] flex flex-col gap-10 font-urbanist px-5 py-8 rounded-xl`}>
    <div className='flex flex-col gap-2'>
    <span className='bg-gradient-to-r bg-clip-text text-transparent from-[#4E4BE4] to-[#E862FE] text-3xl'>{title}</span>
    <span className='leading-5 text-sm font-light tracking-wide'>
        {description}
    </span>
    </div>
    {
        comingSoon && (
            <div className='bg-[#4F4CE5] rounded-full shadow-lg shadow-[#303059] px-3 py-2 w-[30%] text-sm'>
                Coming soon
            </div>

        )
    }


  </div>
}

export default WorkflowsCard


