// Styles
import './styles.css'

// components
import HomeFormComponent from '@/components/Atoms/HomeFormComponent'

const HomeFormSection = () => {
  return (
    <section className="home-form-section">
      <h1 className="title-form-container">
        Vem ser nosso parceiro, entre em contato.
      </h1>

      <HomeFormComponent />

      <button className="px-16 mt-[64px] bg-blue-primary text-white rounded-3xl h-[53px] uppercase shadow-lg shadow-gray-700">
        Enviar Mensagem
      </button>
    </section>
  )
}

export default HomeFormSection
