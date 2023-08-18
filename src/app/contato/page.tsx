// Nextjs
import { Metadata } from "next"

// Components
import ContactPage from "@/components/Templates/ContactPage"

export const metadata: Metadata = {
  title: 'Via certa - Contato',
  description: ''
}

function Page() {
  return (
    <ContactPage />
  )
}

export default Page