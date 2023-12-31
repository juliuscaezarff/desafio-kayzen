// Components
import HomeAchievementsBox from './../../Molecules/HomeAchievementsBox/index'

// Styles
import './styles.css'

const HomeAchievementsSection = () => {
  return (
    <section className="home-achievements-section">
      <div className="text-container">
        <h1 className="title-achievements-container">Nossos Números</h1>
        <p className="sub-title-achievements-container">
          Visando sempre excelência no atendimento, a Via Certa está preparada
          para atender os canais varejistas de pequeno porte até as principais
          redes de supermercados, seja na capital ou nos interiores do Amazonas.
        </p>
      </div>

      <div className="achievements-container">
        <HomeAchievementsBox
          iconSrc="/icons/icon-clock.svg"
          years={67}
          title="anos de experiência"
        />
        <HomeAchievementsBox
          iconSrc="/icons/icon-bags.svg"
          plus='+'
          years={500}
          title="SKUs distribuídos"
        />
        <HomeAchievementsBox
          iconSrc="/icons/icon-boxes.svg"
          plus='+'
          years={3}
          text='mil'
          title="pontos de venda"
        />
        <HomeAchievementsBox
          iconSrc="/icons/icon-truck.svg"
          plus='+'
          years={10}
          title="caminhões de frota própria"
        />
        <HomeAchievementsBox
          iconSrc="/icons/icon-house.svg"
          years={5}
          text='mil'
          title="metros quadrados de CD"
        />
        <HomeAchievementsBox
          iconSrc="/icons/icon-people.svg"
          plus='+'
          years={25}
          title="agentes comerciais"
        />
      </div>
    </section>
  )
}

export default HomeAchievementsSection
