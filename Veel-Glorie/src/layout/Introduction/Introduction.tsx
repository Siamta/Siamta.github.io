import Section, { separations } from "../../components/Section"
import YouTube from "../../components/YouTube"



function Introduction(): JSX.Element {
  return (
    <Section transparency background="secondary" separation={separations.BIG_DOUBLE}>
      <div className="flex border-4 rounded-md border-primary border-color-primary border-[primary]">
        <YouTube title="Video gremial" url="ix-pyuUBMlE?si=h_nDnFwrtVFoUI3O" />
      </div>
      <div className="flex flex-col text-center px-0 md:px-4">
        <p>
          <b>{process.env.SITE_NAME}</b> significa <i>Mucha Gloria</i>,
          y la sangre de nuestros soldados es un reflejo de la lucha y los actos gloriosos en sí mismos.
        </p>
        <p>
          En nuestro corazón reside la lucha,
          pero de todas maneras realizamos todo tipo de actividades.
        </p>
        <p>
          Nuestra misión es convertir a granjeros en verdaderas herramientas bélicas.
        </p>
      </div>
    </Section>
  )
}

export default Introduction
