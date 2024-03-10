/* eslint-disable @typescript-eslint/no-explicit-any */
import { isMobile } from "react-device-detect";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import productImage1 from '../assets/productImage/Produto1.png'
import productImage2 from '../assets/productImage/Produto2.png'

import './ProductCard.css'
import { MobileSliderProps } from "./MobileSlider/MobileSlider";
import { motion } from "framer-motion";

const products = [
  {

    id: 1,
    productImage: productImage1,
    variations: [
      '#DEAC71',
      '#D37164',
      '#6497D3',
      '#3C3B79',
    ]
    ,
    value: '500,00',
    productName: 'Faux Suede Mini Skirt',
    productDescription: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.'
  },
  {
    id: 2,
    productImage: productImage2,
    variations: [
      '#1C1A19',
      '#D84E4B',
      '#CFC9B0',
      '#EAE9E5',
    ],
    value: '320,00',
    productName: 'Ruched Rose Print Mini Skirt',
    productDescription: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.'
  },
  {
    id: 3,
    productImage: productImage1,
    variations: [
      '#DEAC71',
      '#D37164',
      '#6497D3',
      '#3C3B79',
    ],
    value: '500,00',
    productName: 'Faux Suede Mini Skirt',
    productDescription: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.'
  },
  {
    id: 4,
    productImage: productImage2,
    variations: [
      '#1C1A19',
      '#D84E4B',
      '#CFC9B0',
      '#EAE9E5',
    ],
    value: '320,00',
    productName: 'Ruched Rose Print Mini Skirt',
    productDescription: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.'
  }
]

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

export function ProductCard() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="product-card-container">
      <h3 className="title-shelf">As mais pedidas</h3>
      {!isMobile ? (
        <Slider {...settings}>
            {products.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.productImage} alt="product image" />
                <div>
                  <div className="product-variation-container">
                    {item.variations.map((item) => (
                      <div key={item}className='product-variation' style={{'background': item}}></div>
                    ))}
                  </div>
                  <p className="product-value">R$ {item.value}</p>
                  <p className="product-name">{item.productName}</p>
                  <p className="product-description">{item.productDescription}</p>
                  <button>Adicionar</button>
                </div>
              </div>
            ))}
        </Slider>
      ) : (
        <MobileSliderProps>
          
            {products.map((item) => (
              <motion.div className='slider-item' key={item.id}>
                <div className="product-card">
                  <img src={item.productImage} alt="product image" />
                  <div>
                    <div className="product-variation-container">
                      {item.variations.map((item) => (
                        <div key={item}className='product-variation' style={{'background': item}}></div>
                      ))}
                    </div>
                    <p className="product-value">R$ {item.value}</p>
                    <p className="product-name">{item.productName}</p>
                    <p className="product-description">{item.productDescription}</p>
                    <button>Adicionar</button>
                  </div>
                </div>
              </motion.div>
            ))}
          
        </MobileSliderProps>
      )
      }
    </div>
  )
}