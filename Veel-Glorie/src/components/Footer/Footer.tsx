import Link from "../Link"
import Section, { separations } from "../../components/Section"

function Footer(): JSX.Element {
  return (
    <Section isFooter background="secondary" separation={separations.SMALL}>
      <p>
        {"Web construida con Cariño <3 | "}
        <Link href="https://github.com/Siamta/Siamta.github.io">Ver el código fuente</Link>
      </p>
    </Section>
  )
}

export default Footer
