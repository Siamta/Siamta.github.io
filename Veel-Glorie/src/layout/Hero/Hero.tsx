import Button from "../../components/Button"
import { H1 } from "../../components/Headings"
import Section from "../../components/Section"

function Hero(): JSX.Element {
    return (
        <Section>
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse min-w-full">
                <div className="avatar">
                    <div className="border-4 rounded-md w-44 h-44 border-primary">
                        <img src="https://media.discordapp.net/attachments/1112947416434483292/1114628259410358334/veel_glorie.png" className="max-w-full min-h-full" />
                    </div>
                </div>
                <div>
                    <H1>{process.env.SITE_NAME.toUpperCase()}</H1>
                    <p className="py-6">Gremio Hispanohablante de Albion Online.</p>
                    <Button url="https://discord.gg/BThjZ9HCZm">Discord</Button>
                </div>
            </div>
        </div>
    </Section>
)
}

export default Hero
