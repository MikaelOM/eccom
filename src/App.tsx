import { useState } from 'react'

import { FirstSlider } from './layout/Sliders/FirstSlider'
import { Header } from './layout/Header/Header'
import { Footer } from './layout/Footer/Footer'
import { Newsletter } from './layout/main/Newsletter'
import { ColectionCard } from './layout/main/ColectionCard'
import { ProductCard } from './layout/Sliders/ProductCard'
import { Brands } from './layout/Sliders/Brands'
import { StoreDiference } from './layout/Sliders/StoreDiference'
import { ModalComponent } from './layout/main/Modal'

import './App.css'

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  }
  
  return (
    <>
      <Header />
      <main>
        <FirstSlider />
        <StoreDiference />
        <Brands />
        <ProductCard />
        <section className='content-page'>
          <ColectionCard />
        </section>
        <Newsletter />
        <ModalComponent isOpen={isModalOpen} onClose={closeModal}/>
      </main>
      <Footer />
    </>
  )
}

