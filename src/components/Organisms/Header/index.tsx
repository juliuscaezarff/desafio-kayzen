'use client'

// React
import { useState } from 'react'

// Nextjs
import Link from 'next/link'

//Types & Mocks
import menu_navbar from './types'

// Components
import Logo from '../../../../public/logos/logo.svg'
import MobileMenuIcon from './MobileMenuIcon'
import MobileNavbar from '@/components/Molecules/MobileNavbar'
import Image from 'next/image'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleOpenMenu = () => {
    setOpen(!open)
  }

  return (
    <header className="flex justify-between items-center p-3 lg:px-[102px] lg:py-7 lg:max-w-[1440px] lg:mx-auto">
      <Link
        href="/"
        className="hover:scale-110 hover:duration-200 w-[62px] h-[44px]"
        onClick={() => setOpen(false)}
      >
        <Image src={Logo} alt="logo" />
      </Link>

      <ul className="hidden lg:flex lg:justify-center lg:items-center lg: lg:gap-6">
        <li className="relative">
          <button type="button" className="link">
            <span>Inicio</span>
          </button>
        </li>
        <li>
          <Link href={menu_navbar[1].href} className="link">
            {menu_navbar[1].label}
          </Link>
        </li>
        <li>
          <Link href={menu_navbar[2].href} className="link">
            {menu_navbar[2].label}
          </Link>
        </li>
        <li>
          <Link href={menu_navbar[3].href} className="link">
            {menu_navbar[3].label}
          </Link>
        </li>
      </ul>

      <a
        href="/formulario-de-contato"
        className="hidden bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-3xl lg:block lg: text-xs lg:font-bold lg:px-4 lg:py-3 lg:tracking-wide lg:shadow-gray-600"
      >
        FALAR COM A VIA CERTA
      </a>
      <button className="lg:hidden" onClick={handleOpenMenu}>
        <MobileMenuIcon />
      </button>
      {open && <MobileNavbar links={menu_navbar} onClick={handleOpenMenu} />}
    </header>
  )
}

export default Header

// #C70F08 #FF0000  #F52C2Cv box-shadow: 0px 4px 4px 0px #00000040;
