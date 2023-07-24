import { Variants} from 'framer-motion'

export const itemFade: Variants = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible:{
        scale: 1,
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 1,
        }
    },
}

export const itemSlide: Variants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible:{
        x: 0,
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: 0.5,
        }
    }
}

export const itemScale: Variants = {
    hidden: {
        scale: 0,
    },
    visible:{
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
            delay:0.2,
            duration: 1.2
        }
    }
}

