// Styles
import './styles.css'

//next
import Image from 'next/image'

const HomeIntroSection = () => {
  return (
    <section className="home-section-intro">
      <div className="home-section-container">
        <h1 className="title-container">Via Certa:</h1>
        <h1 className="subtitle-container">
          A distribuidora que entrega o melhor do mercado.
        </h1>
        <p className="paragraph-container">
          Conte com nosso selo de excelência, seja distribuindo sua marca ou
          abastecendo seu empreendimento.
        </p>
        <button className="btn">Falar com a via certa</button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/assets/via-certa-home-principal-mobile.png"
          alt="imagem principal"
          className="image-container md:hidden"
          width={390}
          height={327}
        />
        <Image
          src="/assets/via-certa-home-principal-desktop.png"
          alt="imagem principal"
          className="image-container hidden md:block"
          width={632}
          height={555}
        />
      </div>
    </section>
  )
}

export default HomeIntroSection
