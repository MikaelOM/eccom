import globoImage from '../assets/StoreDiference/globo.png'
import houseImage from '../assets/StoreDiference/house.png'
import discountImage from '../assets/StoreDiference/discount.png'

import './StoreDiference.css'

const dataCard = [
  {
    image: globoImage,
    title: 'Produtos importados',
    text: 'Produto de Alta Qualidade'

  },
  {
    image: houseImage,
    title: 'Estoque no Brazil',
    text: 'Produtos mais perto de você!'

  },
  {
    image: 'https://i.imgur.com/5GTW9ii.png',
    title: 'Trocas Garantidas',
    text: 'Trocas em até 48 horas, vejas as regras'

  },
  {
    image: discountImage,
    title: 'Ganhe 5% off',
    text: 'Pagando à vista no Cartão'

  },
  {
    image: 'https://i.imgur.com/pyNUUin.png',
    title: 'Frete Grátis',
    text: 'Em compras acima de R$ 499,00'

  }
]

export function StoreDiference() {
  return (
    <section className="store-diference">
      <h3>Por que comprar em nossa Loja?</h3>
      <div className='store-diference-container'>
        { dataCard.map((item) => (
          <div key={item.title} className="store-diference-card">
            <img src={item.image} alt={item.title} />
            <div className='card-texts'>
              <p className='card-title'>{item.title}</p>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}