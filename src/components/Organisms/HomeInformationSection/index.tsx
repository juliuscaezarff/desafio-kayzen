// Styles
import Image from 'next/image'
import './styles.css'

const HomeInformationSection = () => {
  return (
    <section className="home-information-section">
      <div className="home-information-container">
        <h1 className="title-information-container">
          Entenda melhor sobre o mercado atacadista.
        </h1>
        <p className="sub-title-information-container">
          Confira dicas para escolher seus parceiros.
        </p>
        <button className="px-16 bg-transparent text-red-primary border-2 border-red-primary rounded-3xl h-[53px] uppercase font-bold shadow-lg shadow-gray-600 mt-[40px] mb-[90px]">
          CONHEÇA O VIA CERTA ENSINA
        </button>
      </div>
      <div className="home-box-via-ensina">
        <Image
          className="md:w-[186px] md:h-[65px]"
          src="/logos/logo-via-certa-ensina.svg"
          alt="logo"
          width={116}
          height={39}
        />
      </div>
    </section>
  )
}

export default HomeInformationSection
