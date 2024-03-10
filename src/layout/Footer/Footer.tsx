import { FooterMenu } from './FooterMenu'

import youtubeIcon from '../assets/footer/youtube.svg'
import linkedinIcon from '../assets/footer/linkedin.svg'
import facebookIcon from '../assets/footer/facebook.com.svg'
import instagramIcon from '../assets/footer/instagram.svg'
import visaIcon from '../assets/footer/visa.svg'
import mastercardIcon from '../assets/footer/mastercard.svg'

import './Footer.css'

const socialMediaIcons = [
  facebookIcon,
  linkedinIcon,
  instagramIcon,
  youtubeIcon
]

const paymentsMethodsIcons = [
  visaIcon,
  mastercardIcon,
  visaIcon,
  mastercardIcon
]

export function Footer() {
  return (
    <>
      <footer>
        <FooterMenu />
        <div className='footer-last-row'>
          <div className='social-media'>
            { socialMediaIcons.map((item) => (
              <img key={item} src={item} width={32} height={32}/>
            ))}
          </div>
          <div className='payments-methods'>
            { paymentsMethodsIcons.map((item, index) => (
              <img key={index} src={item} alt="youtube icon" width={32} height={25}/>
            ))}
          </div>
          <div className='created-by'>
            <p>Created By Me</p>
          </div>
        </div>
      </footer>
    </>
  )
}