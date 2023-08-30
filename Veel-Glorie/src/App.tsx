import Base from "./layout/Base"
import Benefits from "./layout/Benefits"
import Hero from "./layout/Hero"
import Introduction from "./layout/Introduction"
import Recruiting from "./layout/Recruiting"
import "./styles/base.scss"

function App() {
  return (
    <Base>
      <Hero />
      <div className="flex flex-col -mb-6">
        <Introduction />
        <Benefits />
        <Recruiting />
      </div>
    </Base>
  )
}

export default App
