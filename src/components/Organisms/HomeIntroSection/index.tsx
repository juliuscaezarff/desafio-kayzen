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
        <button className="px-16 mt-[60px] relative bg-red-500 text-white rounded-3xl h-[53px] uppercase shadow-lg shadow-gray-600">
          Falar com a via certa
        </button>
      </div>
      <div className="w-full md:w-1/2">
      <Image src='/assets/foto-principal-pagina-home.png' alt="" className="image-container" width={390} height={327}/>
      </div>
    </section>
  )
}

export default HomeIntroSection
