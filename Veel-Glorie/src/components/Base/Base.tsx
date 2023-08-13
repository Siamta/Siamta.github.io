import { useEffect } from "react"

import { WithContext, Thing } from "schema-dts"

import Footer from "@components/Footer"

import Header from "@components/Header"

import SEO from "@components/SEO"

interface BaseProps {
  title: string
  description: string
  actualPath: string
  structuredData: WithContext<Thing> | undefined
  children: React.ReactNode
}

function Base({ title, description, actualPath, structuredData, children }: BaseProps): JSX.Element {
  const handleScrollState = () => {
    if (window.pageYOffset === 0) {
      document.body.classList.add("style-scroll-top")
      document.body.classList.remove("style-scroll-bottom")
    } else if (window.pageYOffset === document.body.scrollHeight - window.innerHeight) {
      document.body.classList.add("style-scroll-bottom")
      document.body.classList.remove("style-scroll-top")
    } else {
      document.body.classList.remove("style-scroll-top")
      document.body.classList.remove("style-scroll-bottom")
    }
  }

  useEffect(() => {
    handleScrollState()
    window.addEventListener("scroll", handleScrollState)
    return () => {
      window.removeEventListener("scroll", handleScrollState)
    }
  })

  return (
    <div className="flex flex-col min-h-screen style-background font-primary text-neutral break-word">
        <SEO title={title} description={description} actualPath={actualPath} structuredData={structuredData} />
        <Header />
        <main className="my-auto py-[var(--separator-big)]">{children}</main>
        <Footer />
    </div>
  )
}

export default Base
