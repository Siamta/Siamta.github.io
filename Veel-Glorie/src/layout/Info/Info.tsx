import Section, { separations } from "../../components/Section"
import Link from "../../components/Link"

function Info(): JSX.Element {
  return (
    <Section separation={separations.BIG_DOUBLE}>
      <div className="text-justify">
        <p>
          Contamos con CTAs a diario.
          Algunas son de carácter obligatorio (1 al día),
          y las demás de carácter no obligatorio.
        </p>
        <p>
          No poseemos impuestos, tasas o exigencias, salvo en las CTAs.
          El no tener impuestos y brindar total libertad horaria
          permite a nuestros guerreros disfrutar del juego en su máxima amplitud,
          y también les otorga la posibilidad
          de que generen una economía sólida según sus propios méritos.
        </p>
        <p>
          Nuestro contenido es relajado y también intenso.
          Nos movemos por Royal, Zona Negra y Caminos.
          Realizamos PVP, PVE y cualquier otra actividad que desees o quieras proponer.
          Nos gusta pelear y relajarnos en la <b>Cantina 🍺</b>.
        </p>
      </div>
      <Link color href={process.env.DISCORD_LINK}>
        <b>Visita Nuestro Canal de Voz</b>
      </Link>
    </Section>
  )
}

export default Info
