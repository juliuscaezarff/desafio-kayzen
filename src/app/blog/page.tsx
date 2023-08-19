// Nextjs
import { Metadata } from "next"

// Components
import BlogPage from "@/components/Templates/BlogPage"


export const metadata: Metadata = {
  title: 'Via certa - Blog',
  description: ''
}

function Page() {
  return (
    <BlogPage />
  )
}

export default Page