// Nextjs
import Image from 'next/image'

interface AchievementsBoxProps {
  title: string
  years: string
  iconSrc: string
}

const HomeAchievementsBox = ({
  title,
  years,
  iconSrc
}: AchievementsBoxProps) => {
  return (
    <div className="w-full h-[135px] max-w-[340px] mx-auto mt-[56px] flex flex-col items-center justify-center shadow-lg shadow-gray-300 md:max-w-[231px]">
      <div className="w-[50px] h-[50px] bg-blue-primary-light rounded-[25px] mt-[-50px] flex items-center justify-center">
        <Image src={iconSrc} alt="icone" width={25} height={20} />
      </div>
      <h1 className="font-extrabold text-[40px] text-red-primary">{years}</h1>
      <p className="font-extrabold text-sm text-gray-dark">{title}</p>
    </div>
  )
}

export default HomeAchievementsBox
