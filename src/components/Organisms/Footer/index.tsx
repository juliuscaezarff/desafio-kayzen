'use client'

import Image from 'next/image'

import './styles.css'

import menu_navbar from '../Header/types'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="flex flex-col items-center justify-center gap-[40px]">
        <Image src="/logos/logo.svg" alt="logo" width={130} height={91} />
        <p className="font-normal text-xs text-dark max-w-[280px]">
          Distribuidora Via Certa - Av. Castelo Branco, 164 – Cachoeirinha -
          Manaus Am
        </p>
      </div>
      <div className="flex flex-col gap-[18px] mt-[74px] text-blue-primary font-semibold text-sm">
        <Link href={menu_navbar[0].href} className="link">
          {menu_navbar[0].label}
        </Link>
        <Link href={menu_navbar[1].href} className="link">
          {menu_navbar[1].label}
        </Link>
        <Link href={menu_navbar[2].href} className="link">
          {menu_navbar[2].label}
        </Link>
        <Link href={menu_navbar[3].href} className="link">
          {menu_navbar[3].label}
        </Link>
      </div>
      <div className="flex flex-col items-center mt-[89px]">
        <div className="flex items-center gap-[12px] ">
          <Image src="/icons/icon-mail.svg" alt="logo" width={14} height={14} />
          <p className="">contato@viacerta.com.br</p>
        </div>
        <div className="flex items-center gap-[12px]">
          <Image
            src="/icons/icon-phone.svg"
            alt="logo"
            width={14}
            height={14}
          />
          <p className="">(92) 3643-8250</p>
        </div>
        <div className="flex mt-[89px] gap-[20px]">
          <Link href="/">
            <Image
              src="/icons/icon-facebook.svg"
              alt="logo"
              width={12}
              height={18}
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/icon-instagram.svg"
              alt="logo"
              width={15}
              height={18}
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/icon-linkedin.svg"
              alt="logo"
              width={16}
              height={18}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
