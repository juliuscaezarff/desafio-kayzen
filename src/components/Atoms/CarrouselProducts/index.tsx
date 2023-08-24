'use client'

import { BsCaretDownFill } from 'react-icons/bs'

import './styles.css'

const CarrouselProducts = () => {
  return (
    <div className="carrousel-container">
      <div className="letter">
       <div className='flex items-center gap-4 w-[190px]'>
        <BsCaretDownFill />
        <span>bebidas alcoólicas</span>
       </div>
       <div className='flex items-center gap-4 w-[190px]'>
        <BsCaretDownFill />
        <span>lanches e cereais</span>
       </div>
       <div className='flex items-center gap-4 w-[190px]'>
        <BsCaretDownFill />
        <span>refrescos em pó</span>
       </div><div className='flex items-center gap-4 w-[190px]'>
        <BsCaretDownFill />
        <span>pilhas e baterias</span>
       </div>
       <div className='flex items-center gap-4 w-[211px]'>
        <BsCaretDownFill />
        <span>produto de lavar roupa</span>
       </div>
       <div className='flex items-center gap-4 w-[170px] ml-10'>
        <BsCaretDownFill />
        <span>iluminação</span>
       </div>
       <div className='flex items-center gap-4 w-[190px]'>
        <BsCaretDownFill />
        <span>disjuntores</span>
       </div>
      </div>
    </div>
  )
}

export default CarrouselProducts
