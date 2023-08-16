import A from "../../components/A"
import Section, { separations } from "../../components/Section"

function Footer(): JSX.Element {
  return (
    <Section isFooter background="secondary" separation={separations.SMALL}>
      <p>
        {"Web construida con Cariño <3 | "}
        <A href="https://github.com/Siamta/Siamta.github.io">Ver el código fuente</A>
      </p>
    </Section>
  )
}

export default Footer
