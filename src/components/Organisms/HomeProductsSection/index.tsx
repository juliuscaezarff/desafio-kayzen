// Styles
import Image from 'next/image'
import './styles.css'

// Assets
import ProductsMobile from '../../../../public/assets/via-certa-home-products-mobile.png'
import BrandsOne from '../../../../public/logos/foto-pagina-home-brands-one-mobile.svg'
import BrandsTwo from '../../../../public/logos/foto-pagina-home-brands-two-mobile.svg'

const HomeProductsSection = () => {
  return (
    <section className="home-products-section">
      <h1 className="text-4xl font-semibold text-blue-primary-light max-w-[333px]">
        Conheça as Marcas que estão com a gente
      </h1>
      <p className="text-base font-normal text-sub-title-dark max-w-[333px] mt-[20px]">
        A Via Certa traz variedade, com produtos de diversos segmentos
        diferentes:
      </p>
      <div className="w-full h-[50px] bg-red-500 mt-[60px] text-center">
        fdf
      </div>
      <div className="bg-blue-light py-[19px] px-[35px]">
        <Image src={ProductsMobile} alt="imagem" />
      </div>
      <div className="bg-blue-primary-dark flex py-[60px] px-[45px]">
        <Image src={BrandsOne} alt="imagem" />
        <Image src={BrandsTwo} alt="imagem" height={173} />
      </div>
    </section>
  )
}

export default HomeProductsSection
