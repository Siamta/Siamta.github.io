import Section, { separations } from "../../components/Section"
import YouTube from "../../components/YouTube"



function Introduction(): JSX.Element {
  return (
    <Section transparency background="secondary" separation={separations.BIG_DOUBLE}>
      <div className="flex border-4 rounded-md border-primary border-color-primary border-[primary]">
        <YouTube title="Video gremial" url="ix-pyuUBMlE?si=h_nDnFwrtVFoUI3O" />
      </div>
      <p className="text-center">
        <b>{process.env.SITE_NAME}</b> significa <i>Mucha Gloria</i>,
        y la sangre de nuestros soldados es un reflejo de la lucha y los actos gloriosos en sí mismos.
      </p>
      <div className="flex flex-col pt-4">
        <p>
          Más que un gremio, a veces parecemos una comunidad o un grupo de amigos.
          Llevamos un buen tiempo juntos y, entre todos,
          defendemos nuestros ideales, nuestro patrimonio y tomamos las decisiones de manera conjunta.
        </p>
        <p>
          En nuestro corazón reside la lucha,
          pero de todas maneras realizamos todo tipo de actividades.
          Pasarla bien no es opción, ser tóxicos tampoco.
          Pelear es un deber, pero divertirse es obligación.
          Esperamos que todos sepan pelear,
          pero que también disfruten su contenido individual y hagan su propia economía.
        </p>
        <p>
          Nuestra misión es convertir a granjeros en verdaderas herramientas bélicas.
          A través de la capacitación, las peleas y las prácticas,
          buscamos desatar el potencial que reside en cada persona.
        </p>
      </div>
    </Section>
  )
}

export default Introduction
