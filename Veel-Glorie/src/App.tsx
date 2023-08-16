import Base from "./layout/Base"
import Info from "./layout/Info"
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
        <Info />
        <Recruiting />
      </div>
    </Base>
  )
}

export default App
