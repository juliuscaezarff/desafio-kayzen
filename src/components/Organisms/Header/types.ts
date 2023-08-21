export type LinkProps = {
  label: string
  href: string
}

const menu_navbar: Array<LinkProps> = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'Nossos Parceiros',
    href: '/parceiros'
  },
  {
    label: 'Via Certa Ensina',
    href: '/blog'
  },
  {
    label: 'Contato',
    href: '/contato'
  },
]

export default menu_navbar
