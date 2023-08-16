'use client'
// Nextjs
import Link from 'next/link'

// React
import { useState, useEffect } from 'react'

// Packages
import { v4 as uuid4 } from 'uuid'

// Mocks
import { LinkProps } from '@/components/Organisms/Header/types'

interface MobileNavbarProps {
  links: Array<LinkProps>
  onClick: () => void
}

const MobileNavbar = ({ links, onClick }: MobileNavbarProps) => {
  const id = uuid4()

  return (
    <nav className="bg-light-grayish-blue border border-dark-grayish-blue rounded absolute top-[87px] right-3 px-3 py-4 lg:hidden">
      <ul className="text-dark-grayish-blue flex flex-col gap-4 mb-[45px]">
        {links.map(link => (
          <li
            key={id}
            className="text-base leading-9 border-b border-dark-grayish-blue border-opacity-5"
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
