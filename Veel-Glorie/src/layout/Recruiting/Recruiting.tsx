import { H2, H3 } from "../../components/Headings"
import Section, { separations } from "../../components/Section"
import Link from "../../components/Link"

function Recruiting(): JSX.Element {
  return (
    <Section transparency background="secondary" separation={separations.BIG_DOUBLE}>
      <H2>RECLUTAMIENTO</H2>
      <div className="flex flex-wrap lg:flex-nowrap flex-row lg:flex-column justify-center lg:items-center space-y-8 lg:space-x-8 lg:space-y-0">
        <div className="card w-full md:w-96 bg-primary">
          <div className="card-body p-4 md:px-8 m-auto text-sm md:text-normal">
            <ul className="style-li-shield">
              <p className="text-center pb-4">
                <H3>REQUISITOS</H3>
                <span className="block md:inline">
                  <i>(cumplir 1 de ellos)</i>
                </span>
              </p>
              <li>500k de fama PVP</li>
              <li>15M de fama PVE</li>
              <li>Ser recomendado por alguien del gremio</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>Que puedas hablar por Discord es indispensable.</p>
        <p>No pretendemos que te conectes todos los días, pero sí casualmente.</p>
      </div>
      <div className="text-center">
        <Link color href="https://discord.gg/BThjZ9HCZm">
          <b className="text-center">Ingresa al Discord para Reclutamiento</b>
        </Link>
      </div>
    </Section>
  )
}

export default Recruiting
