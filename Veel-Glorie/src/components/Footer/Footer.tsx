import Link from "../Link"
import Section, { separations } from "../../components/Section"

function Footer(): JSX.Element {
  return (
    <Section isFooter background="secondary" separation={separations.SMALL}>
      <div className="flex flex-col md:flex-row text-center py-4">
        <span>{"Web construida a base de ZvZ"}</span>
      </div>
    </Section>
  )
}

export default Footer
