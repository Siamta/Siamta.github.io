import Base from "./layout/Base"
import Hero from "./layout/Hero"
import Summary from "./layout/Summary"
import Introduction from "./layout/Introduction"
import Recruiting from "./layout/Recruiting"
import "./styles/base.scss"

function App() {
  return (
    <Base>
      <Hero />
      <div className="flex flex-col -mb-6">
        <Introduction />
        <Summary />
        <Recruiting />
      </div>
    </Base>
  )
}

export default App
