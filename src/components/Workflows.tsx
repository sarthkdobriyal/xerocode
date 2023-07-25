import { FC } from 'react'
import WorkflowsCard from './WorkflowsCard'

interface WorkflowsProps {
  
}

const comingSoonData = [{
  id: 1,
  title: 'ask questions',
  description: 'To assist with managing the development, testing, and deployment process, ask it questions or issue instructions.',
  comingSoon: true,
},{
  id: 2,
  title: 'execute',
  description: 'With a single command, you may run a series of tests or install a new version of a programme in a particular setting.',
  comingSoon: true,
},{
  id: 3,
  title: 'Fix security concerns more quickly using generated code recommendations',
  description: 'With the aid of AI, recognise any security risk and swiftly and effectively fix it.granting developers the freedom they require to protect their work frequently and early.',
  comingSoon: false,
}]

const Workflows: FC<WorkflowsProps> = ({}) => {
  return <div className='h-screen w-full '>
    <div className='text-center w-full  bg-gradient-to-r from-[#4E4BE4] to-[#E862FE] text-3xl tracking-widest py-5 bg-clip-text text-transparent font-bold'>Use AI to handle workflows in your chat platforms.</div>
  <div  className='w-full flex flex-wrap justify-center gap-10 my-10'>
      {
        comingSoonData.map((data) => (
          <WorkflowsCard 
          key={data.id}
          id={data.id}
          title={data.title}
          description={data.description}
          comingSoon={data.comingSoon}
          />
        ))
      }
  </div>


  </div>
}

export default Workflows

