import Section, { separations } from "../../components/Section"
import { H2 } from "../../components/Headings"
import Link from "../../components/Link"

function Summary(): JSX.Element {
  return (
    <Section separation={separations.BIG_DOUBLE}>
      <H2>INFORMACIÓN</H2>
      <div className="flex flex-wrap lg:flex-nowrap flex-row lg:flex-column justify-center lg:items-center space-y-8 lg:space-x-8 lg:space-y-0">
        <div className="card w-full md:w-96 bg-primary">
          <div className="card-body p-4 md:px-8 m-auto text-sm md:text-normal">
            <ul className="style-li-fire">
              <li>Región: West</li>
              <li>Portal: Fort Sterling</li>
              <li>Horario: 18 UTC - 2 UTC</li>
              <li>Reequip: T8 equivalente</li>
            </ul>
          </div>
        </div>
        <div className="card w-full md:w-96 bg-primary">
          <div className="card-body p-4 md:px-8 m-auto text-sm md:text-normal">
            <ul className="style-li-castle">
              <li>Ally: NUSOM</li>
              <li>HO: FS T6 & AVA Roads T7</li>
              <li>Buena onda?: Por supuesto</li>
              <li>Discord: Claro que sí</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link color href={process.env.DISCORD_LINK}>
          <b className="text-center">Conocer más</b>
        </Link>
      </div>
    </Section>
  )
}

export default Summary
