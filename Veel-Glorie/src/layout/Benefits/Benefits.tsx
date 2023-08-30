import Section, { separations } from "../../components/Section"
import Link from "../../components/Link"
import { H2 } from "../../components/Headings"

function Benefits(): JSX.Element {
  return (
    <Section separation={separations.BIG_DOUBLE}>
      <H2>BENEFICIOS</H2>
      <div className="flex flex-wrap lg:flex-nowrap flex-row lg:flex-column justify-center lg:items-center space-y-8 lg:space-x-8 lg:space-y-0">
        <div className="card w-full md:w-96 bg-primary">
          <div className="card-body p-4 md:px-8 m-auto text-sm md:text-normal">
            <ul className="style-li-fire">
              <li>Región: West</li>
              <li>Ciudad: Martlock</li>
              <li>Impuestos: 0%</li>
              <li>Reequip: T7 equivalente</li>
            </ul>
          </div>
        </div>
        <div className="card w-full md:w-96 bg-primary">
          <div className="card-body p-4 md:px-8 m-auto text-sm md:text-normal">
            <ul className="style-li-castle">
              <li>Ally: NUSOM</li>
              <li>HO: Avalon map T7</li>
              <li>Buena onda?: Por supuesto</li>
              <li>Discord: Claro que sí</li>
            </ul>
          </div>
        </div>
      </div>
      <Link color href="https://discord.gg/BThjZ9HCZm">
        <b>Visita Nuestro Canal de Voz</b>
      </Link>
    </Section>
  )
}
export default Benefits
