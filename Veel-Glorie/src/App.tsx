import Base from "src/layout/Base"
import Info from "src/layout/Info"
import Separator from "src/components/Separator"
import Slideshow from "src/layout/Slideshow"
import Hero from "src/layout/Hero"
import Introduction from "src/layout/Introduction"
import Recruiting from "src/layout/Recruiting"

function App() {
  return (
    <Base>
      <Hero />
      <div className="flex flex-col -mb-6">
        <Introduction />
        <Info />
        <Slideshow version={1} />
        <Recruiting />
        <Slideshow version={2} />
      </div>
    </Base>
  )
}

export default App
