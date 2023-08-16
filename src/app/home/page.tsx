// Nextjs
import { Metadata } from "next"

// Components
import HomePage from "@/components/Templates/HomePage"

export const metadata: Metadata = {
  title: 'Via certa distribuidora',
  description: ''
}

function Page() {
  return (
    <HomePage />
  )
}

export default Page