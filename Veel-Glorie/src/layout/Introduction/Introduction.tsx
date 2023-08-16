import Section, { separations } from "../../components/Section"

function Introduction(): JSX.Element {
  return (
    <Section transparency background="secondary" separation={separations.BIG_DOUBLE}>
      <div className="flex space-x-8">
        <div className="avatar">
          <div className="mask mask-squircle w-80 h-80">
            <img src="/images/people.png" className="max-w-full min-h-full" />
          </div>
        </div>
        <div className="flex flex-col space-y-8 m-auto">
          <p>
            <b>Veel Glorie</b> significa <i>Mucha Gloria</i>, y la sangre de nuestros soldados es un reflejo de la lucha
            y los actos gloriosos en sí mismos.
          </p>
          <p>En nuestro corazón reside la lucha, pero de todas maneras realizamos todo tipo de actividades.</p>
          <p>Nuestra misión es crecer y convertir a granjeros en verdaderas herramientas bélicas.</p>
        </div>
      </div>
    </Section>
  )
}

export default Introduction
