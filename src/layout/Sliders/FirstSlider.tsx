import Carousel from 'react-bootstrap/Carousel'
import { isMobile } from 'react-device-detect'

import './FirstSlider.css'

const itemContentInfo = [
  {
    image: 'https://i.imgur.com/ftECh3G.png',
    imageMobile: 'https://i.imgur.com/pypQdkj.png',
    title: 'Promoção de Outono',
    text: 'Confiras os melhores looks para combinar com você nesse Outono'
  },
  {
    image: 'https://i.imgur.com/ftECh3G.png',
    imageMobile: 'https://i.imgur.com/pypQdkj.png',
    title: 'Promoção de Outono',
    text: 'Confiras os melhores looks para combinar com você nesse Outono'
  },
  {
    image: 'https://i.imgur.com/ftECh3G.png',
    imageMobile: 'https://i.imgur.com/pypQdkj.png',
    title: 'Promoção de Outono',
    text: 'Confiras os melhores looks para combinar com você nesse Outono'
  }
]

export function FirstSlider() {

  return (
    <>
      <Carousel interval={null}>
        {itemContentInfo.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={isMobile ? item.imageMobile : item.image}
              alt="First slide"
            />
            <Carousel.Caption>
                <p className='title'>{item.title}</p>
                <p className='text'>{item.text}</p>
                <button>Conferir</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}