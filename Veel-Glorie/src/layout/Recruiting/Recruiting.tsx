import { H2 } from "../../components/Headings"
import Section, { separations } from "../../components/Section"
import Link from "../../components/Link"

function Recruiting(): JSX.Element {
  return (
    <Section transparency background="secondary" separation={separations.BIG_DOUBLE}>
      <H2>RECLUTAMIENTO</H2>

      <div className="flex justify-center items-center space-x-8">
        <div className="card bg-primary">
          <div className="card-body m-auto">
            <ul>
              <p className="text-center pb-4">
                <span className="font-primary-bold">REQUISITOS</span> <i>(cumplir 1 de ellos)</i>
              </p>
              <li>🛡️ 500k de fama PVP</li>
              <li>🛡️ 15M de fama PVE</li>
              <li>🛡️ Ser recomendado por alguien del gremio</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p>Que puedas hablar por Discord es indispensable.</p>
        <p>No pretendemos que te conectes todos los días, pero sí casualmente.</p>
      </div>
      <Link color href="https://discord.gg/BThjZ9HCZm">
        <b>Ingresa al Discord para Reclutamiento</b>
      </Link>
    </Section>
  )
}

export default Recruiting
