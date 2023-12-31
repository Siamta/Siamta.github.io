import BaseSVG from "../../svg/BaseSVG"

function SVGClose(): JSX.Element {
  return (
    <BaseSVG description="Cerrar" width={16} height={16}>
      <path d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z" />
    </BaseSVG>
  )
}

export default SVGClose
