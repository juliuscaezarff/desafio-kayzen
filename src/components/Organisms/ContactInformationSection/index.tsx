// Styles
import './styles.css'

//next
import Image from 'next/image'

const ContactInformationSection = () => {
  return (
    <section className="contact-information-section">
      <div className="contact-information-container">
        <div className="md:pl-[75px]">
          <div className="flex flex-col max-w-[308px]">
            <h1 className="font-semibold text-4xl text-blue-primary-light max-w-[268px]">
              Nossos canais
            </h1>
            <div className="flex items-center mt-[70px] gap-[16px] pb-[32px]">
              <Image
                src="/icons/icon-mail.svg"
                alt="logo"
                width={14}
                height={14}
              />
              <p className="font-medium text-xl">(92) 99132-7602</p>
            </div>
            <div className="flex items-center gap-[16px] pb-[32px]">
              <Image
                src="/icons/icon-mail.svg"
                alt="logo"
                width={14}
                height={14}
              />
              <p className="font-medium text-xl">(92) 99116-4333</p>
            </div>
            <div className="flex items-center gap-[16px]  pb-[32px]">
              <Image
                src="/icons/icon-mail.svg"
                alt="logo"
                width={14}
                height={14}
              />
              <p className="font-medium text-xl">(92) 3612-1212</p>
            </div>
            <div className="flex items-center gap-[16px]">
              <Image
                src="/icons/icon-mail.svg"
                alt="logo"
                width={14}
                height={14}
              />
              <p className="font-medium text-xl">contato@viacerta.com.br</p>
            </div>
          </div>
          <div className="mt-[80px] max-w-[313px] mx-auto flex flex-col items-center gap-[32px]">
            <h2 className="font-semibold text-2xl text-dark max-w-[275px]">
              Horário de atendimento
            </h2>
            <p className="font-medium text-lg max-w-[313px]">
              8h às 17h30 | segunda à sexta-feira
            </p>
          </div>
        </div>

        <div className="contact-local-box">
          <h1 className="font-semibold text-4xl text-blue-primary-light max-w-[268px] text-center">
            Onde estamos
          </h1>

          <iframe
            className="md:w-[511px] mt-[33px] md:mt-[64px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8478035834387!2d-60.010468325548096!3d-3.134882040439875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c057424b454bf%3A0x389e241c8cbc5bfe!2sAv.%20Castelo%20Branco%2C%20164%20-%20Cachoeirinha%2C%20Manaus%20-%20AM%2C%2069065-010!5e0!3m2!1spt-BR!2sbr!4v1692220503841!5m2!1spt-BR!2sbr"
            width="335"
            height="240"
            loading="lazy"
          ></iframe>

          <div className="flex items-center mt-[40px]">
            <Image
              src="/icons/icon-mail.svg"
              alt="logo"
              width={14}
              height={14}
            />
            <p className="max-w-[245px]">
              Av. Castelo Branco 164 – Cachoeirinha - Manaus, Am.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInformationSection
