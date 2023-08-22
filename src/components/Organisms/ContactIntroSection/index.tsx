import './styles.css'

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
        <img
          className="image-contact"
          src="/assets/foto-pagina-contato-main.png"
          alt="Imagem"
        />
      </div>
    </section>
  )
}

export default App
