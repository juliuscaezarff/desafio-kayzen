// Nextjs
import { Metadata } from "next"

// Components
import PartnersPage from "@/components/Templates/PartnersPage"



export const metadata: Metadata = {
  title: 'Via certa - Parceiros',
  description: ''
}

function Page() {
  return (
    <PartnersPage />
  )
}

export default Page