'use client'

import React, { useState, useMemo } from 'react'
import { partnersData } from './data'
import PartnersBox from '@/components/Molecules/PartnersBox'
import { Faders } from 'phosphor-react'

const PartnersSection = () => {
  const [busca, setBusca] = useState('')
  const [partneSelected, setPartneSelected] = useState<string[]>([])

  const partnersByOptions: { [key: string]: number[] } = {
    'Alimento para cães e gatos.': [1],
    'Lanches e cereais': [2, 3, 6, 5, 10],
    'Iluminação e disjuntores': [8, 9],
    'Sucos e refrescos': [4, 7],
    'Produto de lavar roupa': [11]
  }

  const filteredPartners = useMemo(() => {
    const lowerBusca = busca.toLowerCase()

    const selectedPartnersIds = partneSelected.reduce((ids, option) => {
      const correspondingPartners = partnersByOptions[option]
      if (correspondingPartners) {
        ids.push(...correspondingPartners)
      }
      return ids
    }, [] as number[])

    return partnersData.filter(partners => {
      const lowerText1 = partners.text1.toLowerCase()
      const lowerText2 = partners.text2.toLowerCase()

      return (
        lowerText1.includes(lowerBusca) &&
        lowerText2.includes(lowerBusca) &&
        (partneSelected.length === 0 ||
          selectedPartnersIds.includes(partners.id))
      )
    })
  }, [busca, partneSelected])

  const initialCheckboxOptions = [
    'Iluminação e disjuntores',
    'Lanches e cereais',
    'Sucos e refrescos',
    'Produto de lavar roupa',
    'Alimento para cães e gatos.'
  ]

  const togglePartneSelected = (option: string) => {
    if (partneSelected.includes(option)) {
      setPartneSelected(partneSelected.filter(item => item !== option))
    } else {
      setPartneSelected([...partneSelected, option])
    }
  }

  return (
    <section>
      <h1 className='text-center font-bold text-3xl text-blue-primary-light mt-[90px] md:text-[40px]'>Nossos Parceiros</h1>
      <p className='text-center font-normal text-xl mt-[12px] md:text-2xl'>Distribuímos confiança para suas prateleiras</p>
      <div className="flex flex-col md:flex-row md:space-x-4 items-center md:items-start mt-[60px] md:mt-[150px] gap-[80px]">
        <div className="max-w-[290px] items-center md:w-[450px] md:h-[405px] md:border md:rounded-r-lg md:flex md:flex-col md:justify-center md:items-start md:shadow-xl md:bg-white">
          <div className="flex gap-[12px] items-center mb-[30px] md:mb-0 md:justify-center md:p-6">
            <h1 className="font-medium text-2xl text-red-primary">Filtros</h1>
            <Faders size={24} className="text-red-primary" />
          </div>
          <ul className="flex flex-col gap-[6px] md:p-6">
            {initialCheckboxOptions.map(option => (
              <li key={option}>
                <label className="flex items-center gap-3 cursor-pointer">
                  <span className="relative inline-block w-6 h-6">
                    <input
                      type="checkbox"
                      className="absolute opacity-0 w-0 h-0"
                      checked={partneSelected.includes(option)}
                      onChange={() => togglePartneSelected(option)}
                    />
                    <span
                      className={`absolute w-6 h-6 border border-gray-400 rounded transition-all duration-300 ${
                        partneSelected.includes(option)
                          ? 'bg-red-500'
                          : 'bg-white'
                      } flex items-center justify-center`}
                    >
                      {partneSelected.includes(option) && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </span>
                  </span>
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-wrap gap-[18px] justify-center md:justify-start">
          {filteredPartners.map(partners => (
            <PartnersBox
              key={partners.id}
              imageSrc={partners.imageSrc}
              text1={partners.text1}
              text2={partners.text2} id={0} label={''}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection