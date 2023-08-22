import './styles.css'

import Image from 'next/image'

const HomeBenefitsSection = () => {
  return (
    <section className="home-benefits-section">
      <h1 className="font-normal text-3xl text-blue-primary-light max-w-[305px] mx-auto">
        Somos a Via Certa para o seu negócio
      </h1>
      <div className="triangle-section">
        <div className="triangle"></div>
      </div>

      <div className="lg:w-[991px] mt-[80px] mb-[166px]">
        <div className="flex items-center md:pl-[60px] md:gap-[40px]">
          <div className="flex flex-col gap-[32px]">
            <h1 className="font-bold text-xl text-white max-w-[194px] md:max-w-[319px] mx-auto text-right md:text-left uppercase md:text-2xl">
              Somos aceleradores de negócios
            </h1>
            <div className="horizontal-line"></div>
            <p className="font-medium text-base text-dark max-w-[234px] mx-auto text-left md:max-w-[323px]">
              O propósito da Via Certa é crescer junto com nossos parceiros,
              trazendo uma visão estratégica para a operação.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[6px]">
            <Image
              src={'/icons/Group-51.svg'}
              alt="logo"
              width={140}
              height={140}
            />
            <div className="circle-medium"></div>
            <div className="circle-medium"></div>
            <div className="circle-medium"></div>
            <div className="vertical-line md:hidden"></div>
          </div>
        </div>

        <div className="flex items-center md:pl-[430px] md:gap-[40px]">
          <div className="flex flex-col items-center justify-center gap-[6px] ">
            <Image
              src={'/icons/Group-52.svg'}
              alt="logo"
              width={140}
              height={140}
            />
            <div className="circle-medium"></div>
            <div className="circle-medium"></div>
            <div className="circle-medium"></div>
            <div className="vertical-line md:hidden"></div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <h1 className="font-bold text-xl text-white max-w-[194px] mx-auto text-left uppercase md:max-w-[319px] md:text-left md:text-2xl">
              Temos nossa Frota Própria
            </h1>
            <div className="horizontal-line"></div>
            <p className="font-medium text-base text-dark max-w-[234px] mx-auto text-right md:max-w-[329px] md:text-left">
              Assim podemos garantir total segurança para transportar seus
              produtos.
            </p>
          </div>
        </div>

        <div className="flex items-center md:pl-[60px] md:gap-[40px]">
          <div className="flex flex-col gap-[32px]">
            <h1 className="font-bold text-xl text-white max-w-[194px] mx-auto text-right uppercase md:max-w-[300px] md:text-left md:text-2xl">
              Entregamos em todos os municípios do Amazonas
            </h1>
            <div className="horizontal-line"></div>
            <p className="font-medium text-base text-dark max-w-[234px] mx-auto text-left md:max-w-[311px]">
              Abrangência na operação capaz de ultrapassar os limites urbanos.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[6px]">
            <Image
              src={'/icons/Group-53.svg'}
              alt="logo"
              width={140}
              height={140}
            />
            <div className="circle-medium"></div>
            <div className="circle-medium"></div>
            <div className="circle-medium"></div>
            <div className="vertical-line md:hidden"></div>
          </div>
        </div>

        <div className="flex items-center md:pl-[430px] md:gap-[40px] md:items-start">
          <div className="flex flex-col items-center justify-center gap-[6px]">
            <Image
              src={'/icons/Group-54.svg'}
              alt="logo"
              width={140}
              height={140}
            />
            <div className="circle-medium md:hidden"></div>
            <div className="circle-medium md:hidden"></div>
            <div className="circle-medium md:hidden"></div>
            <div className="vertical-line md:hidden"></div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <h1 className="font-bold text-xl text-white max-w-[194px] mx-auto text-left uppercase md:max-w-[329px] md:text-2xl">
              Conhecemos nossos clientes
            </h1>
            <div className="horizontal-line"></div>
            <p className="font-medium text-base text-dark max-w-[234px] mx-auto text-right md:max-w-[329px] md:text-left">
              São mais de 67 anos de experiência de confiança e lealdade na
              relação com os clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBenefitsSection
