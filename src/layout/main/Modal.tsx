import { GrSend } from "react-icons/gr"
import { isMobile } from "react-device-detect";
import ModalImage from '../assets/ModalImage.png'

import './Modal.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose }) => {

  console.log('==>', isOpen)
  if (!isOpen)  return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>FECHAR</button>
        { !isMobile && <img src={ModalImage} alt="Modal Image newsletter" />}
        <div className='modal-left-content'>
          <div>
            <span className='email-icon'></span>
            <h3>BEM VINDO À LOJA</h3>
          </div>
          <p className='modal-text'>Receba em Primeira mão <br/> <strong>desconto e ofertas exclusivas</strong></p>
          <form>
            <input type="text" placeholder='Digite seu e-mail'/>
            <button>ENVIAR <GrSend size={15}/></button>
          </form>
        </div>
      </div>
    </div>
  )
}

