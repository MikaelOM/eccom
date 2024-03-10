import './Footer.css'
import { isMobile } from 'react-device-detect'

export function FooterMenu() {
  
  return (
    <>
      { !isMobile ? (       
        <div className='footer-menu'>
          <div>
            <p className='title-menu'>Informações</p>
            <ul>
              <li><p>Quem Somos</p></li>
              <li><p>Prazo de Envio</p></li>
              <li><p>Trocas e Devoluções</p></li>
              <li><p>Promoções e Cupons</p></li>
            </ul>
          </div>
          <div>
            <p className='title-menu'>Minha Conta</p>
            <ul>
              <li><p>Minha Conta</p></li>
              <li><p>Meus Pedidos</p></li>
              <li><p>Cadastre-se</p></li>
            </ul>
          </div>
          <div>
            <p className='title-menu'>Onde nos Encontrar</p>
            <ul>
              <li><p>Lojas</p></li>
              <li><p>Endereços</p></li>
            </ul>
          </div>
        </div>
      ) : (
        <div className='footer-menu-mobile'>
          <ul>
            <li><p>Informações</p></li>
            <li><p>Minha Conta</p></li>
            <li><p>Onde nos Encontrar</p></li>
          </ul>
        </div>
      )
      }
    </>
  )
}