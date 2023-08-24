'use client'

// React
import { useState } from 'react'

// Nextjs
import Link from 'next/link'

//Types & Mocks
import menu_navbar from './types'

// Components
import Logo from '/logos/logo.svg'
import MobileMenuIcon from './MobileMenuIcon'
import MobileNavbar from '@/components/Molecules/MobileNavbar'
import Image from 'next/image'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleOpenMenu = () => {
    setOpen(!open)
  }

  return (
    <header className="flex justify-between items-center p-3 lg:px-[60px] lg:py-7 lg:max-w-[1440px] lg:mx-auto bg-white">
      <Link
        href="/"
        className="hover:scale-110 hover:duration-200 w-[62px] h-[44px]"
        onClick={() => setOpen(false)}
      >
        <Image src="/logos/logo.svg" alt="logo" width={103} height={72} />
      </Link>

      <ul className="hidden lg:flex lg:justify-center lg:items-center lg: lg:gap-6">
        <li className="relative">
          <Link href={menu_navbar[0].href}>{menu_navbar[0].label}</Link>
        </li>
        <li>
          <Link href={menu_navbar[1].href}>{menu_navbar[1].label}</Link>
        </li>
        <li>
          <Link href={menu_navbar[2].href}>{menu_navbar[2].label}</Link>
        </li>
        <li>
          <Link href={menu_navbar[3].href}>{menu_navbar[3].label}</Link>
        </li>
      </ul>

      <a
        href="/"
        className="hidden bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white rounded-3xl lg:block lg: text-xs lg:font-bold lg:px-4 lg:py-3 lg:tracking-wide lg:shadow-gray-600"
      >
        FALAR COM A VIA CERTA
      </a>
      <button className="lg:hidden bg-white" onClick={handleOpenMenu}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 5C20.5523 5 21 5.44772 21 6C21 6.51284 20.614 6.93551 20.1166 6.99327L20 7H4C3.44772 7 3 6.55228 3 6C3 5.48716 3.38604 5.06449 3.88338 5.00673L4 5H20ZM20 11C20.5523 11 21 11.4477 21 12C21 12.5128 20.614 12.9355 20.1166 12.9933L20 13H4C3.44772 13 3 12.5523 3 12C3 11.4872 3.38604 11.0645 3.88338 11.0067L4 11H20ZM21 18C21 17.4477 20.5523 17 20 17H4L3.88338 17.0067C3.38604 17.0645 3 17.4872 3 18C3 18.5523 3.44772 19 4 19H20L20.1166 18.9933C20.614 18.9355 21 18.5128 21 18Z"
            fill="#1E2126"
          />
        </svg>
      </button>
      {open && <MobileNavbar links={menu_navbar} onClick={handleOpenMenu} />}
    </header>
  )
}

export default Header
