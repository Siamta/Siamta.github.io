import Section, {separations} from "@components/Section"
import A from "@components/A"
import { H2 } from "@components/Headings"

function Info(): JSX.Element {
return (


    <Section separation={separations.BIG_DOUBLE}>
    <H2>BENEFICIOS</H2>
    <div className="flex justify-center items-center space-x-8">
        <div className="card w-96 bg-primary">
            <div className="card-body m-auto">
                <p>🔥 Región: West</p>
                <p>🔥 Ciudad: Martlock</p>
                <p>🔥 Impuestos: 0%</p>
                <p>🔥 Reequip: T7 equivalente</p>
            </div>
        </div>
        <div className="card w-96 bg-primary">
            <div className="card-body m-auto">
                <p>🏰 Ally: NUSOM</p>
                <p>🏰 HO: Avalon map T7</p>
                <p>🏰 Buena onda?: Por supuesto</p>
                <p>🏰 Discord: Claro que sí</p>
            </div>
        </div>
    </div>
    <A color href="https://discord.gg/BThjZ9HCZm"><b>Visita Nuestro Canal de Voz</b></A>
</Section>)}
export default Info