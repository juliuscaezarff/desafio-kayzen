import './styles.css'
import HomeFormComponent from '@/components/Atoms/HomeFormComponent'

const HomeFormSection = () => {
  return (
    <section className="home-form-section bg-no-repeat bg-center bg-cover md:bg-form-background">
      <div className="flex flex-col items-center justify-center h-[882px] w-full bg-red-700 md:h-[715px] md:w-[767px]">
        <h1 className="title-form-container">
          Vem ser nosso parceiro, entre em contato.
        </h1>

        <HomeFormComponent />

        <button className="px-16 mt-[64px] bg-blue-primary text-white rounded-3xl h-[53px] uppercase shadow-lg shadow-gray-700">
          Enviar Mensagem
        </button>
      </div>
    </section>
  )
}

export default HomeFormSection
