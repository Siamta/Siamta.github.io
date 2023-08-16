import { useEffect } from "react"

import Footer from "../../components/Footer"

import Header from "../../components/Header"

interface BaseProps {
  children: React.ReactNode
}

function Base({ children }: BaseProps): JSX.Element {
  const handleScrollState = () => {
    if (window.scrollY === 0) {
      document.body.classList.add("style-scroll-top")
      document.body.classList.remove("style-scroll-bottom")
    } else if (window.scrollY === document.body.scrollHeight - window.innerHeight) {
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
    <>
      <Header />
      <main className="my-auto py-[var(--separator-big)] -mt-24">{children}</main>
      <Footer />
    </>
  )
}

export default Base
