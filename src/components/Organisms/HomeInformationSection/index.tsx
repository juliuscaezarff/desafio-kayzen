// Styles
import Image from 'next/image'
import './styles.css'

// Assets

const HomeIformationSection = () => {
  return (
    <section className="home-information-section">
      <div className="w-full h-[81px] bg-blue-primary flex items-center justify-center gap-1">
        <div>
          <p className="font-medium text-sm text-white">Via Certa</p>
          <p className="text-right font-bold text-base text-white">ensina</p>
        </div>
        <Image
          src="/logos/logo-via-certa-ensina.png"
          alt="logo"
          width={35}
          height={25}
        />
      </div>
      <div className="home-information-container">
        <h1 className="title-information-container">
          Qual a diferença entre varejo e atacado?
        </h1>
        <p className="sub-title-information-container">
          5 exemplos para você entender na prática
        </p>
        <button className="px-16 bg-transparent text-red-primary border-2 border-red-primary rounded-3xl h-[53px] uppercase font-bold shadow-lg shadow-gray-600 mt-[40px] mb-[90px]">
          ler matéria completa
        </button>
      </div>
    </section>
  )
}

export default HomeIformationSection
