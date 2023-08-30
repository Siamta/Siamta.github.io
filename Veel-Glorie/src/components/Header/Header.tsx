import classNames from "classnames"
import { useEffect, useRef, useState } from "react"

import Link from "../Link"
import Button from "../../components/Button"
import SquareButton from "../../components/SquareButton"

import { SVGType } from "../../svg/BaseSVG"
import SVGClose from "../../svg/SVGClose"
import SVGDiscord from "../../svg/SVGDiscord"
import SVGHamburgerMenu from "../../svg/SVGHamburgerMenu"

import { getIndex } from "../../utils/transformers"

const scrollStates = {
  SCROLLED: "SCROLLED",
  NOT_SCROLLED: "NOT_SCROLLED",
}

interface MenuConfig {
  url: string
  svg: () => SVGType
  text: string
}

const buttons: MenuConfig[] = [
  {
    url: "https://discord.gg/BThjZ9HCZm",
    svg: SVGDiscord,
    text: "DISCORD",
  },
]

function Header(): JSX.Element {
  const divRef = useRef<HTMLUListElement>(null)
  const mainNavRef = useRef<HTMLElement>(null)
  const [scrollState, setScrollState] = useState<(typeof scrollStates)[keyof typeof scrollStates]>(
    scrollStates.NOT_SCROLLED,
  )
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  const [screenIsSmall, setScreenIsSmall] = useState<boolean>(false)
  const [scrollIsVisible, setScrollIsVisible] = useState<boolean>(false)
  const [height, setHeight] = useState<number | undefined>()

  const handleResize = () => {
    setHeight(window.innerHeight)
    if (divRef.current !== null && mainNavRef.current !== null && height !== undefined) {
      divRef.current.style.height = `${height - mainNavRef.current.clientHeight}px`
    }

    if (!menuIsVisible) {
      // In mobile version, the custom scroll is not visible.
      setScrollIsVisible(document.body.offsetWidth - window.innerWidth !== 0)
    }

    if (window.matchMedia(`(max-width: ${process.env.SCREEN_MD}px)`).matches) {
      setScreenIsSmall(true)
    } else {
      setScreenIsSmall(false)

      // If the menu was opened in small screen, when resizing to a bigger screen, close the menus.
      setMenuIsVisible(false)
    }
  }

  const handleScrollState = () => {
    if (window.scrollY === 0) {
      setScrollState(scrollStates.NOT_SCROLLED)
    } else {
      setScrollState(scrollStates.SCROLLED)
    }
  }

  useEffect(() => {
    if (menuIsVisible) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [menuIsVisible])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)

    handleScrollState()
    window.addEventListener("scroll", handleScrollState)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScrollState)
    }
  })

  return (
    <header
      className={classNames("sticky top-0 z-[1]", {
        "style-shadow bg-primary": scrollState === scrollStates.SCROLLED || menuIsVisible,
      })}
    >
      <nav
        ref={mainNavRef}
        className={classNames("justify-between navbar", { "mr-4": menuIsVisible && scrollIsVisible })}
      >
        <Button url="/">{process.env.SITE_NAME}</Button>
        <ul className={screenIsSmall ? "hidden" : undefined} aria-hidden={screenIsSmall}>
          {getIndex(buttons).map((item_1) => (
            <li key={item_1.id}>
              <Button url={item_1.data.url} isSVG>
                <item_1.data.svg />
              </Button>
            </li>
          ))}
        </ul>
        <div className={screenIsSmall ? undefined : "hidden"} aria-hidden={!screenIsSmall}>
          <SquareButton
            onClick={() => setMenuIsVisible(!menuIsVisible)}
            aria-expanded={menuIsVisible}
            aria-controls="hamburgerMenu"
          >
            <div className={menuIsVisible ? "hidden" : undefined} aria-hidden={menuIsVisible}>
              <SVGHamburgerMenu />
            </div>
            <div className={menuIsVisible ? undefined : "hidden"} aria-hidden={!menuIsVisible}>
              <SVGClose />
            </div>
          </SquareButton>
        </div>
      </nav>
      <nav className={menuIsVisible ? undefined : "hidden"} aria-hidden={!menuIsVisible} id="hamburgerMenu">
        <ul
          ref={divRef}
          className="style-scroll absolute left-0 w-screen max-w-full bg-primary menu overflow-y-auto pb-[var(--separator-big)] px-[var(--separator-big)]"
        >
          {getIndex(buttons).map((item_1) => (
            <li key={item_1.id}>
              <Link href={item_1.data.url}>
                <item_1.data.svg />
                <span>
                  <b>{item_1.data.text}</b>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
