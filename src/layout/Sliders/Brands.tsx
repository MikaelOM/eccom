import { isMobile } from 'react-device-detect'

import { MobileSliderProps } from './MobileSlider/MobileSlider'

import './Brands.css'
import { motion } from 'framer-motion'

const imageLink = [
  'https://i.imgur.com/Qoc0YF7.png',
  'https://i.imgur.com/cHLLxR4.png',
  'https://i.imgur.com/JOTNQgl.png',
  'https://i.imgur.com/PN0nOAY.png',
  'https://i.imgur.com/qZ1WvYA.png'
]

const imageLinkMobile = [
  'https://i.imgur.com/JOTNQgl.png',
  'https://i.imgur.com/cHLLxR4.png',
  'https://i.imgur.com/Qoc0YF7.png',
  'https://i.imgur.com/PN0nOAY.png',
  'https://i.imgur.com/qZ1WvYA.png'
]

export function Brands() {
  return (
    <section className="brands">
      <h3>Marcas Parceiras</h3>
      <div className="brands-images-container">
        {!isMobile ?
          imageLink.map((item) => (
            <img key={item} src={item} alt="brand image" />
          )
        ) : (
          <MobileSliderProps>
            { imageLinkMobile.map((item) => (
              <motion.div className='slider-item' key={item}>
                <img key={item} src={item} alt="brand image" />
              </motion.div>
            ))}
          </MobileSliderProps>
        )
        }
      </div>
    </section>
  )
}