// Styles
import './styles.css'

//next
import Image from 'next/image'

const HomeProductsSection = () => {
  return (
    <section className="home-products-section">
      <h1 className="title-container">
        Conheça as Marcas que estão com a gente
      </h1>
      <p className="sub-title-container">
        A Via Certa traz variedade, com produtos de diversos segmentos
        diferentes:
      </p>
      <div className="carrousel-container">fdf</div>
      <div className="bg-blue-light py-[19px] px-[35px]">
        <Image
          src="/assets/via-certa-home-products-mobile.png"
          alt="imagem"
          width={321}
          height={813}
        />
      </div>
      <div className="brands-container">
        <Image
          src="/logos/foto-pagina-home-brands-one-mobile.svg"
          alt="imagem"
          width={150}
          height={195}
        />
        <Image
          src="/logos/foto-pagina-home-brands-two-mobile.svg"
          alt="imagem"
          width={150}
          height={173}
        />
      </div>
    </section>
  )
}

export default HomeProductsSection
