// Styles
import Image from 'next/image'
import './styles.css'

// Assets
import IntroBackground from '../../../../public/assets/via-certa-home-principal-mobile.png'

const HomeIntroSection = () => {
  return (
    <section className="home-section-intro">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-primary-light ">
          Via Certa:
        </h1>
        <h1 className="text-2xl font-normal mt-5 mx-auto max-w-[367px]">
          A distribuidora que entrega o melhor do mercado.
        </h1>
        <p className="text-base max-w-[351px] font-normal mt-[40px]">
          Conte com nosso selo de excelência, seja distribuindo sua marca ou
          abastecendo seu empreendimento.
        </p>
        <button className="px-16 mt-[60px] relative bg-red-500 text-white rounded-3xl h-[53px] uppercase shadow-lg shadow-gray-600">
          Falar com a via certa
        </button>
      </div>
      <Image src={IntroBackground} alt="" className="w-full mt-[-28px]" />
    </section>
  )
}

export default HomeIntroSection
