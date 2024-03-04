import Section, { separations } from "../../components/Section"
import Link from "../../components/Link"

function Info(): JSX.Element {
  return (
    <Section separation={separations.BIG_DOUBLE}>
      <div className="text-justify">
        <p>
          Brindamos contenido chill y no tan chill.
          Todas nuestras actividades son de carácter no obligatorio, es decir, si estamos por ir a conquistar outposts puedes hacer tu mazmorra o tu transporte y no te molestaremos.
          Claramente tendremos situaciones donde necesitaremos ayuda, como cuando alguien quiere venir a molestar al vecindario donde vivimos y destruir nuestra casa que tanto nos costó conseguir.
          Es por ello que es importante que si quieres ser parte de nuestro gremio, comprendas que somos una familia que en algún momento, en el intento de cuidar su granja de los feroces lobos, nos convertimos poco a poco en pequeños guerreros.
          Y no hay nada más noble para nosotros que ir a luchar por aquello que es nuestro y nos importa.
          Tener el espíritu de levantar una espada para ayudarnos entre todos es importante al momento de querer unirte a nuestra causa.
        </p>
        <p>
          No poseemos impuestos, tasas o exigencias, salvo que sea una ocasión extraordinaria y demasiado especial.
          El no tener impuestos y brindar total libertad horaria permite a nuestros guerreros disfrutar del juego en su máxima amplitud, y también les otorga la posibilidad de crear una economía sólida.
        </p>
        <p>
          El loot de las actividades se reparte, salvo un porcentaje menor que se quita y se brinda al gremio para poder ofrecer reequips y realizar inversiones para nuestro futuro.
          No somos renters, asi que tampoco exigimos una contribución para mantener nuestros HOs.
          Cualquier contribución que hagas al gremio de manera individual, y que realmente sea significativa, será recompensada siempre con más de lo que ofreciste.
        </p>
        <p>
          Nuestro contenido es relajado y también intenso.
          Nos movemos por Royal, Zona Negra y Caminos.
          Realizamos PVP, PVE y cualquier otra actividad que desees.
          Nos gusta gankear, farmear, trollear y relajarnos en la <b>Cantina 🍺</b>.
        </p>
      </div>
      <Link color href={process.env.DISCORD_LINK}>
        <b>Visita Nuestro Canal de Voz</b>
      </Link>
    </Section>
  )
}

export default Info
