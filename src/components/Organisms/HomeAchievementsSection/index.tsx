// Styles
import Image from 'next/image'
import './styles.css'
import HomeAchievementsBox from './../../Molecules/HomeAchievementsBox/index'

// Assets

const HomeAchieventsSection = () => {
  return (
    <section className="home-achievements-section">
      <h1 className="text-4xl font-semibold text-blue-primary-light max-w-[308px]">
        Nossos Números
      </h1>
      <p className="text-base font-normal text-sub-title-dark max-w-[340px] mt-[40px] mb-[60px]">
        Visando sempre excelência no atendimento, a Via Certa está preparada
        para atender os canais varejistas de pequeno porte até as principais
        redes de supermercados, seja na capital ou nos interiores do Amazonas.
      </p>

      <HomeAchievementsBox
        iconSrc="/icons/icon-clock.svg"
        years="67"
        title="anos de experiência"
      />
      <HomeAchievementsBox
        iconSrc="/icons/icon-bags.svg"
        years="+500"
        title="SKUs distribuídos"
      />
      <HomeAchievementsBox
        iconSrc="/icons/icon-boxes.svg"
        years="+3 mil"
        title="pontos de venda"
      />
      <HomeAchievementsBox
        iconSrc="/icons/icon-truck.svg"
        years="+10"
        title="caminhões de frota própria"
      />
      <HomeAchievementsBox
        iconSrc="/icons/icon-house.svg"
        years="5 mil"
        title="metros quadrados de CD"
      />
      <HomeAchievementsBox
        iconSrc="/icons/icon-people.svg"
        years="+25"
        title="agentes comerciais"
      />
    </section>
  )
}

export default HomeAchieventsSection
