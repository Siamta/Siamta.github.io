import Base from "./layout/Base"
import Hero from "./layout/Hero"
import Info from "./layout/Info"
import Summary from "./layout/Summary"
import Introduction from "./layout/Introduction"
import Recruitment from "./layout/Recruitment"
import "./styles/base.scss"

function App() {
  return (
    <Base>
      <Hero />
      <div className="flex flex-col -mb-6">
        <Introduction />
        <Summary />
        <Recruitment />
        <Info />
      </div>
    </Base>
  )
}

export default App
