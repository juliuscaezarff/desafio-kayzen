'use client'
// Nextjs
import Link from 'next/link'

// React
import { useState, useEffect } from 'react'

// Packages
import { v4 as uuidv4 } from 'uuid';

// Mocks
import { LinkProps } from '@/components/Organisms/Header/types'

interface MobileNavbarProps {
  links: Array<LinkProps>
  onClick: () => void
}

const MobileNavbar = ({ links, onClick }: MobileNavbarProps) => {
  const id = uuidv4()

  return (
    <nav className="bg-white border border-dark rounded absolute top-[45px] right-3 px-3 py-4 lg:hidden w-[280px]">
      <ul className="text-dark-grayish-blue flex flex-col gap-4 mb-[45px]">
        {links.map(link => (
          <li
            key={id}
            className="text-base leading-9 active:bg-red-primary"
          >
            <Link href={link.href} onClick={onClick}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileNavbar
