'use client'

import './styles.css'

import Image from 'next/image'

import CarrouselProducts from '@/components/Atoms/CarrouselProducts'

const HomeProductsSection = () => {
  return (
    <section className="home-products-section">
      <h1 className="products-title-container">
        Conheça as Marcas que estão com a gente
      </h1>
      <p className="sub-title-container">
        A Via Certa traz variedade, com produtos de diversos segmentos
        diferentes:
      </p>

      <CarrouselProducts />

      <div className="products-image-mobile">
        <Image
          src="/assets/via-certa-home-products-mobile.png"
          alt="imagem"
          width={321}
          height={813}
          className="w-full md:hidden py-[19px] px-[35px] h-[813px]"
        />
      </div>
      <div className="brands-container">
        <Image
          src="/logos/foto-pagina-home-brands-one-mobile.svg"
          alt="imagem"
          width={150}
          height={195}
          className="mb-[30px] md:mb-0 md:w-[232px] md:h-[304px]"
        />
        <div className="products-image-desktop">
          <Image
            src="/assets/foto-home-produtos-desktop.png"
            alt="imagem"
            width={698}
            height={370}
            className=""
          />
        </div>
        <Image
          src="/logos/foto-pagina-home-brands-two-mobile.svg"
          alt="imagem"
          width={150}
          height={173}
          className="md:mb-0 md:w-[232px] md:h-[281px]"
        />
      </div>
    </section>
  )
}

export default HomeProductsSection
