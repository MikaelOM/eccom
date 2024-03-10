import { useState, useEffect, useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'

import './MobileSlider.css'

interface MobileSliderProps {
  children: ReactNode
}

export const MobileSliderProps: React.FC<MobileSliderProps> = ({children}) => {
  const slider = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if(slider.current) {
      setWidth(slider?.current?.scrollWidth - slider?.current?.offsetWidth)
    }
  }, [])
  
  return (
    <div className='slider-container-component'>
      <motion.div  ref={slider} className='slider-component'>
        <motion.div 
          className='slider-inner'
          drag='x'
          dragConstraints={{right: 0, left: -width}}
          initial={{x: 100}}
          animate={{x: 0}}
          transition={{duration: 0.8}}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}