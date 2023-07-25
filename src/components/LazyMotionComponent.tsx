import { FC, ReactNode } from 'react'
import { LazyMotion, domAnimation} from "framer-motion"

interface LayoutProps {
children: ReactNode
}

const LazyMotionComponent: FC<LayoutProps> = ({children}) => {

  return <div>
    <LazyMotion features={domAnimation}>
    {children}
    </LazyMotion>
    </div>
}

export default LazyMotionComponent