import { HeaderMobile } from './HeaderMobile'
import './Header.css'
import { isMobile } from 'react-device-detect'
import { HeaderDesktop } from './HeaderDesktop'

export function Header() {
  return (
    <>
      <header>
          <section className='top-header'> 
            <p>Acompanhe as melhores promoções disponíveis aqui</p>
          </section>
          { isMobile ? 
            <HeaderMobile />
            :
            <HeaderDesktop />
          }
      </header>
    </>
  )
}