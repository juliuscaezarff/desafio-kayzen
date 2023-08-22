'use client'

import { ArrowBendDownLeft } from 'phosphor-react'
import './styles.css'
import Image from 'next/image'

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
      <div className="carrousel-container">
        <div className="letter">
          <div className="flex gap-[34px] text-white">
            <p className="w-[147px]">bebidas alcoolicas</p>
          </div>
          <div className="flex gap-[14px] text-white">
            <p className="w-[147px]">lanches e cereais</p>
          </div>
          <div className="flex gap-[14px] text-white">
            <p className="w-[147px]">refrescos em pó</p>
          </div>
          <div className="flex gap-[14px] text-white">
            <p className="w-[147px]">pilhas e baterias</p>
          </div>
          <div className="flex gap-[14px] text-white">
            <p className="w-[211px]">produto de lavar roupa</p>
          </div>
          <div className="flex gap-[14px] text-white">
            <p className="w-[147px]">iluminação</p>
          </div>
          <div className="flex gap-[14px] text-white">
            <p className="w-[147px]">disjuntores</p>
          </div>
        </div>
      </div>
      <div className="products-image-mobile">
        <Image
          src="/assets/via-certa-home-products-mobile.png"
          alt="imagem"
          width={321}
          height={813}
          className="md:hidden"
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
            height={342}
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
