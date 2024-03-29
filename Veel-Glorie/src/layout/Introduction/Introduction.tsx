import Section, { separations } from "../../components/Section"

function Introduction(): JSX.Element {
  return (
    <Section transparency background="secondary" separation={separations.BIG_DOUBLE}>
      <div className="flex flex-wrap justify-center md:flex-nowrap space-y-8 md:space-y-0 md:space-x-8">
        <div className="avatar">
          <div className="mask mask-squircle w-56 h-56 md:w-80 md:h-80">
            <img src="/images/people.png?version=postprocess_VERSION" className="max-w-full min-h-full" />
          </div>
        </div>
        <div className="flex flex-col space-y-8 m-auto max-w-prose px-8 md:px-0 text-center md:text-start">
          <p>
            <b>{process.env.SITE_NAME}</b> significa <i>Mucha Gloria</i>, y la sangre de nuestros soldados es un reflejo de la lucha y los actos gloriosos en sí mismos.
          </p>
          <p>En nuestro corazón reside la lucha, pero de todas maneras realizamos todo tipo de actividades.</p>
          <p>Nuestra misión es convertir a granjeros en verdaderas herramientas bélicas.</p>
        </div>
      </div>
    </Section>
  )
}

export default Introduction
