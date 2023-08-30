import Link from "../Link"
import Section, { separations } from "../../components/Section"

function Footer(): JSX.Element {
  return (
    <Section isFooter background="secondary" separation={separations.SMALL}>
      <div className="flex flex-col md:flex-row text-center py-4">
        <span>{"Web construida con Cariño <3"}</span>
        <hr className="divider divider-vertical md:divider-horizontal" />
        <Link href="https://github.com/Siamta/Siamta.github.io">Ver el código fuente</Link>
      </div>
    </Section>
  )
}

export default Footer
