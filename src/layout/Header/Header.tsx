import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

import { HeaderMobile } from './HeaderMobile'
import { HeaderDesktop } from './HeaderDesktop'
import './Header.css'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setIsScrolled(scrollTop > 0);
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className={isScrolled ? 'header-off-top' : ''}>
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