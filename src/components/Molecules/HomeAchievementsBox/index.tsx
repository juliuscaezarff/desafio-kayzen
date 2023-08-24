'use client'

// Nextjs
import Image from 'next/image'

// Packages
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

interface AchievementsBoxProps {
  title: string
  years: number
  text?: string
  plus?: string
  iconSrc: string
}

const HomeAchievementsBox = ({
  title,
  years,
  text,
  plus,
  iconSrc
}: AchievementsBoxProps) => {
  return (
    <VisibilitySensor partialVisibility offSet={{ bottom: 50 }}>
      {({ isVisible }: any) => (
        <div className="w-full h-[135px] max-w-[340px] mx-auto mt-[56px] flex flex-col items-center justify-center shadow-lg shadow-gray-300 md:max-w-[231px] bg-white">
          <div className="w-[50px] h-[50px] bg-blue-primary-light rounded-[25px] mt-[-50px] flex items-center justify-center">
            <Image src={iconSrc} alt="icone" width={25} height={20} />
          </div>
          <div className='flex'>
            <span className="font-extrabold text-[40px] text-red-primary">{plus}</span>
            <h1 className="font-extrabold text-[40px] text-red-primary">
              {isVisible && <CountUp end={years} />}
            </h1>
            <span className="font-extrabold text-[40px] text-red-primary">{text}</span>
          </div>

          <p className="font-extrabold text-sm text-gray-dark">{title}</p>
        </div>
      )}
    </VisibilitySensor>
  )
}

export default HomeAchievementsBox
