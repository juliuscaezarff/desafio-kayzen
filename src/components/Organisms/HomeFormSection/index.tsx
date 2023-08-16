// Styles
import Image from 'next/image'
import './styles.css'

// Assets

const HomeFormSection = () => {
  return (
    <section className="home-form-section">
      <h1 className="text-4xl font-semibold text-white max-w-[303px]">
        Vem ser nosso parceiro, entre em contato.
      </h1>
      <form className="w-full max-w-[360px] flex flex-col gap-4 mt-[60px] ">
          <input
            className="h-[59px] p-[20px]"
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
          />
          <input
            className="h-[59px]  p-[20px]"
            type="text"
            name="phone"
            id="phone"
            placeholder="Telefone"
          />
          <input
            className="h-[59px]  p-[20px]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <textarea
          className='h-[131px]  p-[20px]'
            name="message"
            id="message"
            placeholder="Mensagem"
          ></textarea>
      </form>

      <button className="px-16 mt-[64px] bg-blue-primary text-white rounded-3xl h-[53px] uppercase shadow-lg shadow-gray-700">
          Enviar Mensagem
        </button>
    </section>
  )
}

export default HomeFormSection
