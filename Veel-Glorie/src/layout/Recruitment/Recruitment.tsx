import { H2, H3 } from "../../components/Headings"
import Section, { separations } from "../../components/Section"
import Link from "../../components/Link"

function Recruitment(): JSX.Element {
  return (
    <Section transparency background="secondary" separation={separations.BIG_DOUBLE}>
      <H2>RECLUTAMIENTO</H2>
      <div className="flex flex-wrap lg:flex-nowrap flex-row lg:flex-column justify-center lg:items-center space-y-8 lg:space-x-8 lg:space-y-0">
        <div className="card w-full md:w-96 bg-primary">
          <div className="card-body p-4 md:px-8 m-auto text-sm md:text-normal">
            <ul className="style-li-shield">
              <div className="text-center pb-2 flex flex-col md:flex-row md:space-x-1 justify-center">
                <H3>REQUISITOS</H3>
              </div>
              <li>Set ZVZ 1400 de IP</li>
              <div className="text-center text-sm">
                <i>Equivalente a T8 (capa 4.3)</i>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        Que puedas hablar por Discord es indispensable.
      </div>
      <div className="text-center">
        <Link color href={process.env.DISCORD_LINK}>
          <b className="text-center">¡Postúlate!</b>
        </Link>
      </div>
    </Section>
  )
}

export default Recruitment
