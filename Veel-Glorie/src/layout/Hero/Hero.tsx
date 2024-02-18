import Button from "../../components/Button"
import { H1 } from "../../components/Headings"
import Section from "../../components/Section"

function Hero(): JSX.Element {
  return (
    <Section>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse min-w-full">
          <div className="avatar">
            <div className="border-4 rounded-md w-44 h-44 border-black">
              <img
                src="https://cdn.discordapp.com/attachments/1112947416434483292/1208575346967056394/logo.gif?ex=65e3c880&is=65d15380&hm=27b033d789f35522bb1fecd6eec524769fb71684f2610f521b82a18d349f4863&"
                className="max-w-full min-h-full"
              />
            </div>
          </div>
          <div className="text-center md:text-start">
            <H1>{process.env.SITE_NAME.toUpperCase()}</H1>
            <p className="py-6">Gremio Hispanohablante de Albion Online.</p>
            <Button url="https://discord.gg/q6KZcApac4">Discord</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
