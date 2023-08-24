import './styles.css'

//next
import Image from 'next/image'

const App = () => {
  return (
    <section className="contact-intro-section">
      <div className="contact-text-container">
        <h1 className="title-contact-container">Contato</h1>
        <h2 className="subtitle-contact-container">
          Se interessou? Fale conosco e tire suas dúvidas!
        </h2>
      </div>
      <div className="image-contact-container">
        <Image
          className="image-contact md:hidden"
          src="/assets/foto-pagina-contato-main-mobile.png"
          alt="Imagem"
          width={390}
          height={327}
        />

        <Image
          className="hidden md:block"
          src="/assets/foto-pagina-contato-main-desktop.png"
          alt="Imagem"
          width={632}
          height={555}
        />
      </div>
    </section>
  )
}

export default App
