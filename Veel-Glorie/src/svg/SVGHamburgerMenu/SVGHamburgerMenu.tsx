import BaseSVG from "src/svg/BaseSVG"

function SVGHamburgerMenu(): JSX.Element {
  return (
    <BaseSVG description="Menú" width={20} height={20}>
      <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" />
    </BaseSVG>
  )
}

export default SVGHamburgerMenu
